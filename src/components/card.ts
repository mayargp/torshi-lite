
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { setBasePath } from '@shoelace-style/shoelace';

setBasePath('/')

@customElement('gh-card')
class Card extends LitElement {
  static styles = css`
    .card {
      background: rgba(0, 0, 0, 0.8);
      border: 1px solid black;
      color: #ffffff;
      padding: 16px;
    }
    .card h1 {
      font-weight: normal;
      margin-top: 0;
    }
    .card ul {
      display: flex;
      font-size: 20px;
      justify-content: space-between;
      margin: 0;
      padding: 0;
    }
    .card li {
      display: inline;
    }
    .card a {
      align-items: center;
      color: white;
      display: flex;
      height: 42px;
      justify-content: center;
      width: 42px;
    }
  `;

  render() {
    return html`
      <div class="card">
        <h1>Gary Homewood</h1>
        <p>Coder / Artist</p>
        <sl-divider style="--color: rgba(255, 255, 255, 0.4);"></sl-divider>
        <ul>
          <li>
            <a href="https://github.com/GaryHomewood" alt="Github"><sl-icon name="github" label="Github"></sl-icon></a>
          </li>
          <li>
            <a href="https://twitter.com/GaryHomewood" alt="Twitter"><sl-icon name="twitter" label="Twitter"></sl-icon></a>
          </li>
          <li>
            <a href="https://instagram.com/GaryHomewood" alt="Instagram"><sl-icon name="instagram" label="Instagram"></sl-icon></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/garyhomewooduk/" alt="LinkedIn"><sl-icon name="linkedin" label="LinkedIn"></sl-icon></a>
          </li>
        </ul>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'gh-card': Card
  }
}
