import {
  LitElement,
  css,
  html,
  customElement,
  state,
} from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";

@customElement("welcome-dashboard")
export class WelcomeDashboardElement extends UmbElementMixin(LitElement) {
  @state()
  private _counter = 0;

  #incrementCounter = () => {
    this._counter++;
  };

  render() {
    return html`
      <uui-box headline="Welcome to Umbraco!">
        <p>
          This is a simple example dashboard demonstrating the basics of Umbraco
          backoffice customization.
        </p>
        <p>
          From here, you can modify the content, media, and settings of your
          website.
        </p>

        <h3>Quick Stats</h3>
        <div class="stats-grid">
          <div class="stat-card">
            <uui-icon name="icon-document"></uui-icon>
            <div class="stat-content">
              <div class="stat-value">Content</div>
              <div class="stat-label">Section</div>
            </div>
          </div>

          <div class="stat-card">
            <uui-icon name="icon-picture"></uui-icon>
            <div class="stat-content">
              <div class="stat-value">Media</div>
              <div class="stat-label">Section</div>
            </div>
          </div>

          <div class="stat-card">
            <uui-icon name="icon-settings"></uui-icon>
            <div class="stat-content">
              <div class="stat-value">Settings</div>
              <div class="stat-label">Section</div>
            </div>
          </div>
        </div>

        <h3>Interactive Example</h3>
        <p>Button clicked: <strong>${this._counter}</strong> times</p>
        <uui-button
          color="positive"
          look="primary"
          @click="${this.#incrementCounter}"
        >
          Click me!
        </uui-button>

        <div class="footer">
          <p>© Your Company ${new Date().getFullYear()}</p>
        </div>
      </uui-box>
    `;
  }

  static styles = [
    css`
      :host {
        display: block;
        padding: var(--uui-size-layout-1);
      }

      uui-box {
        max-width: 800px;
        margin: 0 auto;
      }

      h3 {
        margin-top: var(--uui-size-space-5);
        margin-bottom: var(--uui-size-space-3);
        color: var(--uui-color-text);
      }

      p {
        line-height: 1.6;
        margin-bottom: var(--uui-size-space-4);
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: var(--uui-size-space-4);
        margin-bottom: var(--uui-size-space-5);
      }

      .stat-card {
        display: flex;
        align-items: center;
        gap: var(--uui-size-space-3);
        padding: var(--uui-size-space-4);
        background: var(--uui-color-surface);
        border: 1px solid var(--uui-color-border);
        border-radius: var(--uui-border-radius);
      }

      .stat-card uui-icon {
        font-size: 32px;
        color: var(--uui-color-interactive);
      }

      .stat-content {
        display: flex;
        flex-direction: column;
      }

      .stat-value {
        font-size: 18px;
        font-weight: bold;
        color: var(--uui-color-text);
      }

      .stat-label {
        font-size: 14px;
        color: var(--uui-color-text-alt);
      }

      uui-button {
        margin-top: var(--uui-size-space-3);
      }

      .footer {
        margin-top: var(--uui-size-space-6);
        padding-top: var(--uui-size-space-4);
        border-top: 1px solid var(--uui-color-border);
        text-align: center;
        color: var(--uui-color-text-alt);
      }

      .footer p {
        margin: 0;
      }
    `,
  ];
}

export default WelcomeDashboardElement;

declare global {
  interface HTMLElementTagNameMap {
    "welcome-dashboard": WelcomeDashboardElement;
  }
}
