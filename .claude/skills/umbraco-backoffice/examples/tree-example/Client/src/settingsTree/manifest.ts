import {
  OUR_TREE_ITEM_ENTITY_TYPE,
  OUR_TREE_ROOT_ENTITY_TYPE,
} from "./types.js";

const repositoryManifest: UmbExtensionManifest = {
  type: "repository",
  alias: "Our.Tree.Repository",
  name: "UmbRepositorySettings",
  api: () => import("./ourtree.repository.js"),
};

const storeManifest: UmbExtensionManifest = {
  type: "treeStore",
  alias: "Our.Tree.Store",
  name: "UmbTreeSettingsStore",
  api: () => import("./ourtree.store.js"),
};

const treeManifest: UmbExtensionManifest = {
  type: "tree",
  kind: "default",
  alias: "Our.Tree.Tree",
  name: "UmbTreeSettings",
  meta: {
    repositoryAlias: repositoryManifest.alias,
  },
};

const treeItem = {
  type: "treeItem",
  kind: "default",
  alias: "Our.Tree.Item",
  name: "UmbTreeSettingsItem",
  forEntityTypes: [OUR_TREE_ROOT_ENTITY_TYPE, OUR_TREE_ITEM_ENTITY_TYPE],
};

const menuManifest: UmbExtensionManifest = {
  type: "menu",
  alias: "Our.Tree.Menu",
  name: "Our Tree Menu",
  meta: {
    label: "Our Tree",
    icon: "icon-bug",
    entityType: OUR_TREE_ROOT_ENTITY_TYPE,
  },
};

const menuitemManifest: UmbExtensionManifest = {
  type: "menuItem",
  kind: "tree",
  alias: "Our.Tree.MenuItem",
  name: "Our Tree Menu Item",
  weight: 100,
  meta: {
    label: "Our Tree",
    icon: "icon-bug",
    entityType: OUR_TREE_ROOT_ENTITY_TYPE,
    menus: [menuManifest.alias],
    treeAlias: treeManifest.alias,
    hideTreeRoot: true,
  },
};

const sidebarManifest: UmbExtensionManifest = {
  type: "sectionSidebarApp",
  kind: "menu",
  alias: "Our.Tree.Sidebar",
  name: "Our Tree",
  weight: 100,
  meta: {
    label: "Our Tree",
    menu: menuManifest.alias,
  },
  conditions: [
    {
      alias: "Umb.Condition.SectionAlias",
      match: "Umb.Section.Settings",
    },
  ],
};

export const manifests: Array<UmbExtensionManifest> = [
  repositoryManifest,
  treeManifest,
  storeManifest,
  treeItem,
  menuManifest,
  menuitemManifest,
  sidebarManifest,
];
