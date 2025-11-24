export const manifests: Array<UmbExtensionManifest> = [
  {
    type: "menuItem",
    alias: "My.MenuItem.DemoTree",
    name: "Demo Tree Menu Item",
    weight: 100,
    meta: {
      label: "Demo Items",
      icon: "icon-folder",
      entityType: "demo-tree-root",
      menus: ["Umb.Menu.Demo"],
    },
  },
  {
    type: "menu",
    alias: "Umb.Menu.Demo",
    name: "Demo Menu",
  },
];
