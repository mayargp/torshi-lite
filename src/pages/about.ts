import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import '../components/nav'

@customElement('gh-about')
export class About extends LitElement {

  static styles = css`
  `;

  render() {
    return html`
      <gh-nav></gh-nav>
      <h1>about page</h1>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'gh-about': About
  }
}
