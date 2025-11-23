export const manifests: Array<UmbExtensionManifest> = [
  {
    name: "My Extension Dashboard",
    alias: "MyExtension.Dashboard",
    type: "dashboard",
    js: () => import("./dashboard.element.js"),
    meta: {
      label: "Example Dashboard",
      pathname: "example-dashboard",
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: "Umb.Section.Content",
      },
    ],
  },
  {
    name: "Welcome Dashboard",
    alias: "MyExtension.WelcomeDashboard",
    type: "dashboard",
    js: () => import("./welcome-dashboard.element.js"),
    weight: 100,
    meta: {
      label: "Welcome",
      pathname: "welcome-dashboard",
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: "Umb.Section.Content",
      },
    ],
  },
];
