const o = [
  {
    name: "My Extension Entrypoint",
    alias: "MyExtension.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint-CkOuTyHN.js")
  }
], n = [
  {
    name: "My Extension Dashboard",
    alias: "MyExtension.Dashboard",
    type: "dashboard",
    js: () => import("./dashboard.element-Cs93TisS.js"),
    meta: {
      label: "Example Dashboard",
      pathname: "example-dashboard"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: "Umb.Section.Content"
      }
    ]
  },
  {
    name: "Welcome Dashboard",
    alias: "MyExtension.WelcomeDashboard",
    type: "dashboard",
    js: () => import("./welcome-dashboard.element-C5pNydR8.js"),
    weight: 100,
    meta: {
      label: "Welcome",
      pathname: "welcome-dashboard"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: "My.Section.Demo"
      }
    ]
  }
], a = "My.Section.Demo", i = {
  type: "menu",
  alias: "time.menu",
  name: "time sidebar menu",
  meta: {
    label: "Time"
  }
}, m = {
  type: "menuItem",
  alias: "time.menu,item",
  name: "time menu item",
  meta: {
    label: "Time Zones",
    icon: "icon-alarm-clock",
    entityType: "demo-workspace",
    menus: [
      "time.menu"
    ]
  }
}, s = {
  type: "sectionSidebarApp",
  kind: "menuWithEntityActions",
  alias: "My.Section.Demo.SidebarApp",
  name: "Sidebar app",
  meta: {
    label: "Time",
    menu: "time.menu"
  },
  conditions: [
    {
      alias: "Umb.Condition.SectionAlias",
      match: a
    }
  ]
}, c = [
  {
    type: "section",
    alias: a,
    name: "Demo Section",
    weight: 100,
    meta: {
      label: "Demo",
      pathname: "demo"
    }
  },
  s,
  i,
  m
], r = [
  {
    type: "menuItem",
    alias: "My.MenuItem.DemoTree",
    name: "Demo Tree Menu Item",
    weight: 100,
    meta: {
      label: "Demo Items",
      icon: "icon-folder",
      entityType: "demo-tree-root",
      menus: ["Umb.Menu.Demo"]
    }
  },
  {
    type: "menu",
    alias: "Umb.Menu.Demo",
    name: "Demo Menu"
  }
], e = "My.Repository.Demo.Tree", p = [
  ...r,
  {
    type: "repository",
    alias: e,
    name: "Demo Tree Repository",
    api: () => import("./demo-tree-repository-DmV7cSkn.js")
  },
  {
    type: "tree",
    kind: "default",
    alias: "My.Tree.Demo",
    name: "Demo Tree",
    meta: {
      repositoryAlias: e
    }
  },
  {
    type: "treeItem",
    kind: "default",
    alias: "My.TreeItem.Demo",
    name: "Demo Tree Item",
    forEntityTypes: ["demo-workspace", "demo-tree-root"]
  }
], t = "My.Workspace.Demo", l = [
  {
    type: "workspace",
    alias: t,
    name: "Demo Workspace",
    element: () => import("./demo-workspace.element-DwrlKVxN.js"),
    meta: {
      entityType: "demo-workspace"
    }
  },
  {
    type: "workspaceView",
    alias: "My.WorkspaceView.Demo",
    name: "Demo Workspace View",
    js: () => import("./demo-workspace.element-DwrlKVxN.js"),
    weight: 100,
    meta: {
      label: "Overview",
      pathname: "overview",
      icon: "icon-document"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: t
      }
    ]
  }
], y = [
  ...o,
  ...n,
  ...c,
  ...p,
  ...l
];
export {
  y as manifests
};
//# sourceMappingURL=my-extension.js.map
