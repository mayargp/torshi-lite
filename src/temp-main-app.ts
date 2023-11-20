import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('main-app')
export class MainApp extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    @property() name = 'Torshi Lit';

    render() {
        return html`<h1>Hello, ${this.name}</h1>`;
    }
}
