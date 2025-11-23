---
name: umbraco-dashboard
description: Implement dashboards in Umbraco backoffice using official docs
version: 1.0.0
location: managed
allowed-tools: Read, Write, Edit, WebFetch
---

# Umbraco Dashboard

## What is it?
Dashboards are customizable components that appear in Umbraco's backoffice sections to display information and functionality. They show an 'editor' for the selected item in the tree or default section information when no item is selected. Dashboards use conditions to control where and when they appear in the backoffice.

## Documentation
Always fetch the latest docs before implementing:

- **Main docs**: https://docs.umbraco.com/umbraco-cms/customizing/extending-overview/extension-types/dashboard
- **Foundation**: https://docs.umbraco.com/umbraco-cms/customizing/foundation
- **Extension Registry**: https://docs.umbraco.com/umbraco-cms/customizing/extending-overview/extension-registry
- **Tutorial**: https://docs.umbraco.com/umbraco-cms/tutorials/creating-a-custom-dashboard

## Workflow

1. **Fetch docs** - Use WebFetch on the URLs above
2. **Ask questions** - What section? What functionality? Who can access?
3. **Generate files** - Create manifest + implementation based on latest docs
4. **Explain** - Show what was created and how to test

## Minimal Examples

### Manifest (umbraco-package.json)
```json
{
  "type": "dashboard",
  "alias": "my.dashboard",
  "name": "My Dashboard",
  "element": "/App_Plugins/MyDashboard/dashboard.js",
  "meta": {
    "label": "My Dashboard",
    "pathname": "my-dashboard"
  },
  "conditions": [
    {
      "alias": "Umb.Condition.SectionAlias",
      "match": "Umb.Section.Content"
    }
  ]
}
```

### Implementation (dashboard.js)
```javascript
import { LitElement, html, css } from '@umbraco-cms/backoffice/external/lit';
import { UmbElementMixin } from '@umbraco-cms/backoffice/element-api';

export default class MyDashboardElement extends UmbElementMixin(LitElement) {
  render() {
    return html`
      <uui-box headline="My Dashboard">
        <p>Dashboard content goes here</p>
      </uui-box>
    `;
  }

  static styles = css`
    :host {
      display: block;
      padding: var(--uui-size-space-4);
    }
  `;
}

customElements.define('my-dashboard', MyDashboardElement);
```

That's it! Always fetch fresh docs, keep examples minimal, generate complete working code.
