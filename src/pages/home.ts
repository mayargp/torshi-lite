import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import '../components/nav'
import '../components/sidebar'
import '../components/card'
import { palettes } from '../palettes'

@customElement('gh-home')
export class Home extends LitElement {
  static styles = css`
      * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
    }
    .home-section {
      position: relative;
      background: #e4e9f7;
      height: 100vh;
      left: 260px;
      width: calc(100% - 260px);
      transition: all 0.5s ease;
    }
    .home-section .home-content {
      height: 60px;
      display: flex;
      align-items: center;
    }
    .home-section .home-content .bx-menu,
    .home-section .home-content .text {
      color: #11101d;
      font-size: 35px;
    }
    .home-section .home-content .bx-menu {
      margin: 0 15px;
      cursor: pointer;
    }
    .home-section .home-content .text {
      font-size: 26px;
      font-weight: 600;
    }
  `;
  get first() {
    return this.renderRoot.querySelector('#sidebar');
  }
  // So that we can specify parent div element for the p5 sketch
  // protected createRenderRoot() {
  //   return this;
  // }

  render() {
    // Global array of nice palettes
    window.P5 = {
      palettes
    }

    document.title = "Gary Homewood"

    // const sketch = document.createElement('script');
    // sketch.id = 'script-sketch'
    // sketch.src = `/assets/sketches/home-sketch.js`;
    // document.body.appendChild(sketch);

    return html`

      <gh-sidebar isClosed="true"></gh-sidebar>
      <section class="home-section">
        <div class="home-content">
          <i class="bx bx-menu"></i>
          <span class="text">Drop Down Sidebar</span>
        </div>
      </section>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'gh-home': Home
  }
}
