class NoteItemArchived extends HTMLElement {
  _shadowRoot = null;
  _style = null;
  _note = {
    title: null,
    body: null,
    createdAt: null,
  };

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  set note(value) {
    this._note = value;

    this.render();
  }

  get note() {
    this._note = value;
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 15px;
      }
  
      .note-item-archived {
          background-color: var(--second-color);
          border-radius: 5px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 0 10px rgb(0, 0, 0, 1);
          }
  
      .note-item-archived p {
          font-size: 24px;
          font-weight: 500;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          }
  
      .note-item-archived span {
          display: block;
          padding: 1rem 0;
          font-size: 18px;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          }
  
      .note-item-archived .bottom-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #ccc;
          }
  
      .note-item-archived .bottom-content span {
          color: black;
          font-size: 16px;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          }
  
      .note-item-archived .bottom-content img {
          width: 25px;
          cursor: pointer;
          }

      .note-item-archived .bottom-content .setting {
        position: relative;
      }

      .note-item-archived .bottom-content .setting .menu {
        position: absolute;
        bottom: 0;
        right: -5px;
        padding: 5px 0;
        background: var(--primary-color);
        border-radius: 4px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
        transform: scale(0);
        transform-origin: bottom right;
        transition: transform 0.2s ease;
      }

      .note-item-archived .bottom-content .setting:hover .menu {
        transform: scale(1);
      }

      .note-item-archived .bottom-content .setting .menu li {
        height: 25px;
        width: 150px;
        border-radius: 0;
        cursor: pointer;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 13px 10px;
      }

      .note-item-archived .bottom-content .setting .menu li:hover {
        background: var(--third-color);
      }

      .note-item-archived .bottom-content .setting .menu li img {
        padding: 8px;
        width: 30px;
      }
      `;
  }

  render() {
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
      <div class="note-item-archived" id="${this._note.id}">
              <div class="details" id="${this._note.id}">
                <p>${this._note.title}</p>
                <span>${this._note.body}</span>
              </div>
              <div class="bottom-content">
                <span>${this._note.createdAt.substring(0, 10)}</span>
                <div class="setting">
                  <img src="more-horizontal.svg" alt="" />
                  <ul class="menu">
                    <li><img src="rotate-ccw.svg" alt="" />Back to Note</li>
                    <li><img src="trash-2.svg" alt=""/>Delete</li>
                  </ul>
                </div>
              </div>
            </div>
      `;
  }
}

customElements.define("note-item-archived", NoteItemArchived);
