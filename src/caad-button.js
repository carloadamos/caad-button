import { html, css, LitElement } from "lit-element";

class CAADButton extends LitElement {
  static get properties() {
    return {
      title: { type: String }
    };
  }

  static get styles() {
    return css`
      input[type="button"] {
        /** Reset **/
        padding: 0;
        border: none;
        font: inherit;
        color: inherit;
        background-color: transparent;
        cursor: pointer;

        /** Style **/
        background-color: skyblue;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        margin: 2px 0;
        border: solid 1px transparent;
        border-radius: 4px;
        padding: 0.5em 1em;
        color: #ffffff;
        background-color: #9555af;
        font-family: Arial;
      }
    `;
  }

  render() {
    return html`
      <input type="button" value="${this.title}" />
    `;
  }
}

customElements.define("caad-button", CAADButton);
