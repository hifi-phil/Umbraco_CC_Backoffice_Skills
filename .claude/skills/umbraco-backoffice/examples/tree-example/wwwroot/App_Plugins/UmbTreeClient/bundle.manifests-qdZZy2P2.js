const r = [
  {
    name: "Umb Tree Client Entrypoint",
    alias: "UmbTreeClient.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint-BIGpY6pM.js")
  }
], e = "our-tree-root", a = "our-tree-item", i = {
  type: "repository",
  alias: "Our.Tree.Repository",
  name: "UmbRepositorySettings",
  api: () => import("./ourtree.repository-Bok29J5f.js")
}, s = {
  type: "treeStore",
  alias: "Our.Tree.Store",
  name: "UmbTreeSettingsStore",
  api: () => import("./ourtree.store-CiK112rZ.js")
}, n = {
  type: "tree",
  kind: "default",
  alias: "Our.Tree.Tree",
  name: "UmbTreeSettings",
  meta: {
    repositoryAlias: i.alias
  }
}, o = {
  type: "treeItem",
  kind: "default",
  alias: "Our.Tree.Item",
  name: "UmbTreeSettingsItem",
  forEntityTypes: [e, a]
}, t = {
  type: "menu",
  alias: "Our.Tree.Menu",
  name: "Our Tree Menu",
  meta: {
    label: "Our Tree",
    icon: "icon-bug",
    entityType: e
  }
}, m = {
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
    treeAlias: n.alias,
    hideTreeRoot: !0
  }
}, T = {
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
}, u = [
  i,
  n,
  s,
  o,
  t,
  m,
  T
], l = [...r, ...u];
export {
  a as O,
  e as a,
  l as m
};
//# sourceMappingURL=bundle.manifests-qdZZy2P2.js.map
