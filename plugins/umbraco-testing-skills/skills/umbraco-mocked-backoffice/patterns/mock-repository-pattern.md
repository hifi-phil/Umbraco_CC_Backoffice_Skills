# Mock Repository Pattern (Recommended)

Replace the API-calling repository with a mock version that returns data directly. This is the **recommended approach** because:

- No cross-origin issues - bypasses the API client entirely
- No module resolution issues with TypeScript source
- Simpler setup - no ESM wrappers needed
- More reliable - fewer moving parts

> **Alternative**: For simple fetch-based APIs, see [External MSW Handlers](./external-msw-handlers.md).

## When to Use Each Approach

| Scenario | Recommended Approach |
|----------|---------------------|
| Extension uses hey-api/OpenAPI client | **Mock Repository Pattern** |
| Extension uses simple fetch calls | Either approach works |
| Loading TypeScript source directly | **Mock Repository Pattern** |
| Loading built/compiled extension | Either approach works |
| Need fine-grained API control | External MSW Handlers |

## Directory Structure

```
my-extension/
├── index.ts              # Entry point for mock mode
├── mock/
│   ├── index.ts          # Imports from src/, replaces repository
│   ├── mock-repository.ts # Repository returning mock data
│   └── mock-data.ts      # Test data (not exported from index)
└── src/                  # Production code (unchanged)
```

## Step 1: Create Entry Point

Create `index.ts` at the extension root:

```typescript
// Entry point for running in mocked backoffice mode
export { manifests } from './mock/index.js';
```

## Step 2: Create Mock Index

Create `mock/index.ts`:

```typescript
import type { UmbExtensionManifest } from '@umbraco-cms/backoffice/extension-api';
import { manifests as featureManifests } from '../src/feature/manifest.js';
import { manifests as workspaceManifests } from '../src/workspace/manifest.js';

// Mock repository manifest (replaces the API-calling one)
const mockRepositoryManifest: UmbExtensionManifest = {
  type: 'repository',
  alias: 'MyExtension.Repository',  // Same alias as original
  name: 'MyExtension Repository (Mock)',
  api: () => import('./mock-repository.js'),
};

// Filter out original repository, keep everything else
const filteredManifests = featureManifests.filter(
  (m) => m.alias !== 'MyExtension.Repository'
);

export const manifests: Array<UmbExtensionManifest> = [
  mockRepositoryManifest,
  ...filteredManifests,
  ...workspaceManifests,
];
```

## Step 3: Create Mock Repository

Create `mock/mock-repository.ts`:

```typescript
import type { UmbControllerHost } from '@umbraco-cms/backoffice/controller-api';
import type { UmbApi } from '@umbraco-cms/backoffice/extension-api';
import { UmbRepositoryBase } from '@umbraco-cms/backoffice/repository';

// Import types from original src files
import { MY_STORE_CONTEXT } from '../src/feature/my.store.js';
import { mockItems } from './mock-data.js';

export class MockRepository extends UmbRepositoryBase implements UmbApi {
  constructor(host: UmbControllerHost) {
    super(host, MY_STORE_CONTEXT);
  }

  async getItems() {
    return { data: mockItems };
  }
}

export { MockRepository as api };
```

## Step 4: Create Mock Data

Create `mock/mock-data.ts` (keep separate - not exported from index):

```typescript
export const mockItems = [
  { id: 'item-1', name: 'Test Item 1', icon: 'icon-document' },
  { id: 'item-2', name: 'Test Item 2', icon: 'icon-folder' },
];
```

**Important**: Keep mock data in a separate file that's NOT exported from `index.ts`. If arrays are exported directly, Umbraco will try to register them as extensions.

## Running

Point `VITE_EXTERNAL_EXTENSION` to the directory containing `index.ts`:

```bash
cd /path/to/Umbraco-CMS/src/Umbraco.Web.UI.Client
VITE_EXTERNAL_EXTENSION=/path/to/my-extension npm run dev:external
```

### Common Mistakes

| Wrong | Correct |
|-------|---------|
| `VITE_EXTERNAL_EXTENSION=.../src` | `VITE_EXTERNAL_EXTENSION=...` (where index.ts is) |
| `VITE_EXTERNAL_EXTENSION=.../vite.config.ts` | `VITE_EXTERNAL_EXTENSION=...` (directory, not file) |

## Working Example

See **tree-example** in `umbraco-backoffice/examples/tree-example/Client/`:

| Path | Description |
|------|-------------|
| `src/` | Production code with OpenAPI-generated client |
| `mock/` | Mock repository implementation |
| `index.ts` | Entry point using mock repository |

```bash
VITE_EXTERNAL_EXTENSION=/path/to/tree-example/Client npm run dev:external
```
