import { UMB_WORKSPACE_CONDITION_ALIAS as s } from "@umbraco-cms/backoffice/workspace";
const o = [
  {
    name: "Umb Tree Client Entrypoint",
    alias: "UmbTreeClient.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint-BIGpY6pM.js")
  }
], e = "our-tree-root", i = "our-tree-item", a = {
  type: "repository",
  alias: "Our.Tree.Repository",
  name: "UmbRepositorySettings",
  api: () => import("./ourtree.repository-CncOQmFe.js")
}, m = {
  type: "treeStore",
  alias: "Our.Tree.Store",
  name: "UmbTreeSettingsStore",
  api: () => import("./ourtree.store-CiK112rZ.js")
}, r = {
  type: "tree",
  kind: "default",
  alias: "Our.Tree.Tree",
  name: "UmbTreeSettings",
  meta: {
    repositoryAlias: a.alias
  }
}, p = {
  type: "treeItem",
  kind: "default",
  alias: "Our.Tree.Item",
  name: "UmbTreeSettingsItem",
  forEntityTypes: [e, i]
}, t = {
  type: "menu",
  alias: "Our.Tree.Menu",
  name: "Our Tree Menu",
  meta: {
    label: "Our Tree",
    icon: "icon-bug",
    entityType: e
  }
}, T = {
  type: "menuItem",
  kind: "tree",
  alias: "Our.Tree.MenuItem",
  name: "Our Tree Menu Item",
  weight: 100,
  meta: {
    label: "Our Tree",
    icon: "icon-bug",
    entityType: e,
    menus: [t.alias],
    treeAlias: r.alias,
    hideTreeRoot: !0
  }
}, c = {
  type: "sectionSidebarApp",
  kind: "menu",
  alias: "Our.Tree.Sidebar",
  name: "Our Tree",
  weight: 100,
  meta: {
    label: "Our Tree",
    menu: t.alias
  },
  conditions: [
    {
      alias: "Umb.Condition.SectionAlias",
      match: "Umb.Section.Settings"
    }
  ]
}, l = [
  a,
  r,
  m,
  p,
  t,
  T,
  c
], n = "Our.Tree.Workspace", u = {
  type: "workspace",
  kind: "routable",
  alias: n,
  name: "Our Tree Item Workspace",
  api: () => import("./ourtree-workspace.context-BUHte_sK.js"),
  meta: {
    entityType: i
  }
}, O = {
  type: "workspaceView",
  alias: "Our.Tree.WorkspaceView.Details",
  name: "Our Tree Item Workspace Details View",
  js: () => import("./ourtree-workspace-view.element-DarGI6E9.js"),
  weight: 100,
  meta: {
    label: "Details",
    pathname: "details",
    icon: "icon-info"
  },
  conditions: [
    {
      alias: s,
      match: n
    }
  ]
}, y = [
  u,
  O
], f = [
  ...o,
  ...l,
  ...y
];
export {
  i as O,
  e as a,
  f as m
};
//# sourceMappingURL=bundle.manifests-DUiJ2ggB.js.map
