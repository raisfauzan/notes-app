class NoteListArchived extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  _column = 2;
  _gutter = 16;

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
      <div class="note-list-archived" id="note-list-archived">
          <slot></slot>
      </div>
      `;
  }
}

customElements.define("note-list-archived", NoteListArchived);
