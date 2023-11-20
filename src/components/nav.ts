import { LitElement, PropertyValueMap, css, html } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';
import '@shoelace-style/shoelace/dist/components/drawer/drawer.styles.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import { classMap } from 'lit/directives/class-map.js';
import { sketches } from '../sketch-manifest';

declare const Hammer: new (arg0: HTMLElement) => any;

@customElement('gh-nav')
export class Nav extends LitElement {
  @property({ type: Boolean }) hidebutton = false;

  @query('#drawer') _drawer: { show: () => void; hide: () => void; } | undefined;

  @query('#drawer-button') _drawerButton: any;

  private _open() {
    this._drawer?.show()
  }

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    this._drawerButton.addEventListener('click', () => this._open())
  }

  static styles = css`
    sl-drawer {
      --size: 280px;
      --body-spacing: 0 20px;
    }

    sl-drawer::part(panel) {
      color: var(--sl-color-neutral-950);
      background: var(--sl-color-neutral-50);
    }

    sl-drawer::part(footer) {
      font-size: var(--sl-font-size-small)
    }

    ol {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    a {
      display: flex;
      text-decoration: none;
      width: 100%;
    }

    * + * {
      margin-top: 4px;
    }

    .gh-nav-item--home a {
      padding-left: 8px;
      width: calc(100% - 8px);
    }

    .gh-nav-item a {
      align-items: center;
      color: var(--sl-color-neutral-800);
      display: flex;
      min-height: 48px;
    }

    .gh-nav-item a:hover,
    .gh-nav-item--active {
      background-color: var(--sl-color-neutral-300);
      color: var(--sl-color-neutral-950);
    }

    .sketch-meta {
      align-items: center;
      display: flex;
      padding-left: 8px;
      margin-top: 0;
    }

    #drawer-button {
      background: rgba(0, 0, 0, 0.8);
      border-radius: 6px;
      left: 16px;
      position: absolute;
      top: 14px;
    }

    @media(max-width: 480px) {
      .hidebutton {
        display: none;
      }
    }
  `

  render() {
    // Set up swipe to open drawer
    const bodyElement = document.getElementsByTagName('body')
    const mc = new Hammer(bodyElement.item(0) as HTMLElement)
    mc.on("panright", () => {
      this._open();
    });

    // Sketch name matches the path; highlight the current sketch
    const url = window.location.href
    const sketchName = url.substring(url.lastIndexOf('/') + 1)

    // Sketch pages are full screen on mobile, swipe to show drawer
    const classes = {
      hidebutton: this.hidebutton
    }

    return html`
    <sl-drawer
        id="drawer"
        placement="start"
        class="drawer-placement-start">
        <nav>
          <ol>
            <li class="gh-nav-item gh-nav-item--home">
              <a href="/">
                Home
              </a>
            </li>
            <sl-divider style="--color: rgb(54, 54, 59);"></sl-divider>
            ${sketches.map((sketch) =>
            html`
            <li class="${sketch.sketch === sketchName ? 'gh-nav-item gh-nav-item--active': 'gh-nav-item'}">
              <a href="/sketch/${sketch.sketch}">
                <img src="/assets/img/${sketch.sketch}-thumb.png" alt="sketch thumb"/>
                <div class="sketch-meta">
                  ${sketch.name}
                </div>
              </a>
            </li>
            `
            )}
          </ol>
        </nav>
        <p slot="footer">Refresh page to redraw</p>
      </sl-drawer>
      <sl-icon-button
        id="drawer-button"
        class=${classMap(classes)}
        src="/assets/icons/menu-white.svg"
        label="Nav"
        style="font-size: 1rem;z-index: 10;"></sl-icon-button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'gh-nav': Nav
  }
}
