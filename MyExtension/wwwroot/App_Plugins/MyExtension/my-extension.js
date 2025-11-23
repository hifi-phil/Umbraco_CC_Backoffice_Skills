const a = [
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
        match: "Umb.Section.Content"
      }
    ]
  }
], o = [
  ...a,
  ...n
];
export {
  o as manifests
};
//# sourceMappingURL=my-extension.js.map
