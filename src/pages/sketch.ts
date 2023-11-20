import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'
// import '@shoelace-style/shoelace/dist/components/button/button';
// import '@shoelace-style/shoelace/dist/components/drawer/drawer.styles';
// import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';
import '../components/nav';
import { palettes } from '../palettes'
import { sketches } from '../sketch-manifest';

@customElement('gh-sketch')
export class Sketch extends LitElement {

  static styles = css`
  `

  // So that we can specify parent div element for the p5 sketch
  protected createRenderRoot() {
    return this;
  }

  render() {
    // Sketch name matches URL path
    const url = window.location.href
    const sketchName = url.substring(url.lastIndexOf('/') + 1)

    // Global array of nice palettes
    window.P5 = {
      palettes,
    }

    const s = sketches.find((e) => e.sketch === sketchName)
    document.title = `${s?.name} - Gary Homewood`

    // Add the sketch script
    const sketch = document.createElement('script');
    sketch.id = 'script-sketch'
    sketch.src = `/assets/sketches/${sketchName}.js`;
    document.body.appendChild(sketch);

    return html`
      <gh-nav hidebutton></gh-nav>
      <div id='sketch-canvas'></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'gh-sketch': Sketch
  }
}
