import { ManifestMenu, ManifestMenuItem } from "@umbraco-cms/backoffice/menu";
import { ManifestSectionSidebarApp } from "@umbraco-cms/backoffice/section";

const sectionAlias = "My.Section.Demo";

const menuManifest : ManifestMenu = {
  type: 'menu',
  alias: 'time.menu',
  name: 'time sidebar menu',
  meta: {
      label: 'Time'
  }
}

const menuItemManifest  : ManifestMenuItem = {
  type: 'menuItem',
  alias: 'time.menu,item',
  name: 'time menu item',
  meta: {
      label: 'Time Zones',
      icon: 'icon-alarm-clock',
      entityType: 'demo-workspace',
      menus: [
          'time.menu'
      ]
  }
}

const sectionSidebarAppManifest : ManifestSectionSidebarApp = {
  type: 'sectionSidebarApp',
  kind: 'menuWithEntityActions',
  alias: 'My.Section.Demo.SidebarApp',
  name: 'Sidebar app',
  meta: {
      label: "Time",
      menu: "time.menu"
  },
  conditions: [
      {
          alias: "Umb.Condition.SectionAlias",
          match: sectionAlias
      }
  ]   
}

export const manifests: Array<UmbExtensionManifest> = [
  {
    type: "section",
    alias: sectionAlias,
    name: "Demo Section",
    weight: 100,
    meta: {
      label: "Demo",
      pathname: "demo",
    },
  },
  sectionSidebarAppManifest,
  menuManifest,
  menuItemManifest];
