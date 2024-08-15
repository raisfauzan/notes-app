class NoteList extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");

    this.render();
  }

  _updateStyle() {
    this._style.textContent = `
      :host{
          display: block;
      `;
  }

  render() {
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
      <div class="note-list" id="note-list">
          <slot></slot>
      </div>
      `;
  }
}

customElements.define("note-list", NoteList);
