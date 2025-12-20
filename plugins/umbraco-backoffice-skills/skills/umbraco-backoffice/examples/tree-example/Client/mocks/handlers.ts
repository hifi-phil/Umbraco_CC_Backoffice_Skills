/**
 * MSW handlers for the tree-example custom API endpoints.
 * These handlers mock the C# backend API responses.
 *
 * Usage:
 *   VITE_EXTERNAL_EXTENSION=.../tree-example/Client/src \
 *   VITE_EXTERNAL_MOCKS=.../tree-example/Client/mocks \
 *   npm run dev:external
 *
 * Note: The extension's entrypoint detects mock mode and sets baseUrl to ''
 * (relative), allowing MSW to intercept same-origin requests.
 */

// Mock data types
interface TreeItem {
	id: string;
	name: string;
	icon: string;
	hasChildren: boolean;
	parent: { id: string } | null;
}

const rootItems: TreeItem[] = [
	{ id: 'settings-a', name: 'Settings Group A', icon: 'icon-folder', hasChildren: true, parent: null },
	{ id: 'settings-b', name: 'Settings Group B', icon: 'icon-folder', hasChildren: true, parent: null },
	{ id: 'config', name: 'Configuration', icon: 'icon-settings', hasChildren: false, parent: null },
];

const childrenByParent: Record<string, TreeItem[]> = {
	'settings-a': [
		{ id: 'settings-a-1', name: 'Setting A1', icon: 'icon-document', hasChildren: false, parent: { id: 'settings-a' } },
		{ id: 'settings-a-2', name: 'Setting A2', icon: 'icon-document', hasChildren: false, parent: { id: 'settings-a' } },
	],
	'settings-b': [
		{ id: 'settings-b-1', name: 'Setting B1', icon: 'icon-document', hasChildren: false, parent: { id: 'settings-b' } },
	],
};

// API path - relative path for same-origin interception
const API_PATH = '/umbraco/umbtreeclient/api/v1';

// Get rest from window.MockServiceWorker - must be accessed after MSW is loaded
const rest = (window as any).MockServiceWorker?.rest;

if (!rest) {
	console.error('MSW not available - window.MockServiceWorker.rest is undefined');
}

export const handlers = rest ? [
	// Handle CORS preflight requests
	rest.options(`${API_PATH}/*`, (_req: any, res: any, ctx: any) => {
		return res(
			ctx.status(200),
			ctx.set('Access-Control-Allow-Origin', '*'),
			ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'),
			ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization'),
		);
	}),

	// GET /root - Returns root tree items
	rest.get(`${API_PATH}/root`, (req: any, res: any, ctx: any) => {
		const skip = Number(req.url.searchParams.get('skip') || 0);
		const take = Number(req.url.searchParams.get('take') || 100);

		const items = rootItems.slice(skip, skip + take);

		return res(
			ctx.status(200),
			ctx.set('Access-Control-Allow-Origin', '*'),
			ctx.json({
				total: rootItems.length,
				items,
			})
		);
	}),

	// GET /Children - Returns children of a parent item
	rest.get(`${API_PATH}/Children`, (req: any, res: any, ctx: any) => {
		const parentId = req.url.searchParams.get('parent');

		if (!parentId) {
			// No parent = return root items
			return res(
				ctx.status(200),
				ctx.set('Access-Control-Allow-Origin', '*'),
				ctx.json({
					total: rootItems.length,
					items: rootItems,
				})
			);
		}

		const children = childrenByParent[parentId] || [];

		return res(
			ctx.status(200),
			ctx.set('Access-Control-Allow-Origin', '*'),
			ctx.json({
				total: children.length,
				items: children,
			})
		);
	}),

	// GET /Ancestors - Returns ancestors of an item
	rest.get(`${API_PATH}/Ancestors`, (_req: any, res: any, ctx: any) => {
		// For simplicity, return empty array (flat structure)
		return res(
			ctx.status(200),
			ctx.set('Access-Control-Allow-Origin', '*'),
			ctx.json([])
		);
	}),

	// GET /ping - Health check
	rest.get(`${API_PATH}/ping`, (_req: any, res: any, ctx: any) => {
		return res(
			ctx.status(200),
			ctx.set('Access-Control-Allow-Origin', '*'),
			ctx.json('pong')
		);
	}),
] : [];
