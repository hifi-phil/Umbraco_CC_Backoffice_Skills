---
name: umbraco-workspace
description: Implement workspaces in Umbraco backoffice using official docs
version: 1.0.0
location: managed
allowed-tools: Read, Write, Edit, WebFetch
---

# Umbraco Workspace

## What is it?
Workspaces are dedicated editing environments designed for specific entity types in Umbraco. They create isolated areas where users can edit content, media, members, and other entities with specialized interfaces tailored to each type. Workspaces maintain draft copies of entity data separate from published versions and support multiple extension types including contexts, views, actions, and footer apps.

## Documentation
Always fetch the latest docs before implementing:

- **Main docs**: https://docs.umbraco.com/umbraco-cms/customizing/workspaces
- **Workspace Context**: https://docs.umbraco.com/umbraco-cms/customizing/extending-overview/extension-types/workspace-context
- **Workspace Views**: https://docs.umbraco.com/umbraco-cms/customizing/extending-overview/extension-types/workspace-view
- **Workspace Actions**: https://docs.umbraco.com/umbraco-cms/customizing/extending-overview/extension-types/workspace-action
- **Foundation**: https://docs.umbraco.com/umbraco-cms/customizing/foundation
- **Extension Registry**: https://docs.umbraco.com/umbraco-cms/customizing/extending-overview/extension-registry

## Related Foundation Skills

If you need to explain these foundational concepts when implementing workspaces, reference these skills:

- **Context API**: When implementing workspace contexts, context consumption, or explaining workspace extension communication
  - Reference skill: `umbraco-context-api`

- **State Management**: When implementing draft state, observables, reactive updates, or workspace data management
  - Reference skill: `umbraco-state-management`

- **Umbraco Element**: When implementing workspace view elements, explaining UmbElementMixin, or creating workspace components
  - Reference skill: `umbraco-umbraco-element`

- **Controllers**: When implementing workspace actions, controllers, side effects, or action logic
  - Reference skill: `umbraco-controllers`

## Workflow

1. **Fetch docs** - Use WebFetch on the URLs above
2. **Ask questions** - What entity type? What views needed? What actions? What data management?
3. **Generate files** - Create manifest + workspace context + views + actions based on latest docs
4. **Explain** - Show what was created and how to test

## Minimal Examples

### Workspace Manifest (umbraco-package.json)
```json
{
  "type": "workspace",
  "alias": "My.Workspace",
  "name": "My Workspace",
  "meta": {
    "entityType": "my-entity"
  }
}
```

### Workspace Context (workspace-context.ts)
```typescript
import { UmbWorkspaceContext } from '@umbraco-cms/backoffice/workspace';

export class MyWorkspaceContext extends UmbWorkspaceContext {
  // Manage draft state
  // Handle save/publish operations
  // Provide shared state to workspace extensions
}
```

### Workspace View (workspace-view.ts)
```typescript
import { LitElement, html } from '@umbraco-cms/backoffice/external/lit';

export class MyWorkspaceView extends LitElement {
  render() {
    return html`
      <div>
        <h3>My Workspace View</h3>
        <!-- Edit form or content here -->
      </div>
    `;
  }
}
```

## Extension Types

Workspaces support five main extension types:
1. **Workspace Context** - Shared state management and communication
2. **Workspace Views** - Tab-based content areas for organizing editing
3. **Workspace Actions** - Primary action buttons (save, publish) in footer
4. **Workspace Action Menu Items** - Additional dropdown menu actions
5. **Workspace Footer Apps** - Persistent status information in footer

That's it! Always fetch fresh docs, keep examples minimal, generate complete working code.
