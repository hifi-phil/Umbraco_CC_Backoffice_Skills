// Mock tree data - NOT exported from index.ts to avoid being registered as extensions

export interface MockTreeItem {
  id: string;
  name: string;
  icon: string;
  hasChildren: boolean;
}

export const rootItems: MockTreeItem[] = [
  { id: 'settings-a', name: 'Settings Group A', icon: 'icon-folder', hasChildren: true },
  { id: 'settings-b', name: 'Settings Group B', icon: 'icon-folder', hasChildren: true },
  { id: 'config', name: 'Configuration', icon: 'icon-settings', hasChildren: false },
];

export const childrenByParent: Record<string, MockTreeItem[]> = {
  'settings-a': [
    { id: 'settings-a-1', name: 'Setting A1', icon: 'icon-document', hasChildren: false },
    { id: 'settings-a-2', name: 'Setting A2', icon: 'icon-document', hasChildren: false },
  ],
  'settings-b': [
    { id: 'settings-b-1', name: 'Setting B1', icon: 'icon-document', hasChildren: false },
  ],
};
