class AppBar extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  _updateStyle() {
    this._style.textContent = `
        :host {
            background-color: var(--primary-color);
            height: 100px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: white;
            border-bottom: 1px solid var(--third-color);
        }

        h1 {
            margin-left: 2rem;
        }
  
        .search-bar {
            width: 50%;
            padding: 0.5rem;
            display: flex;
            background: var(--second-color);
            border-radius: 5em;
        }

        .search-bar input {
            width: 90%;
            padding: 0.8rem;
            outline: none;
            border: none;
            font-size: 18px;
            background: var(--second-color);
            color: white;
        }

        a img {
            width: 70px;
            height: 70px;
            border-radius: 50em;
            margin-right: 2rem;
        }
      `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `      
        <h1>Note App</h1>
        <div class="search-bar" id="search-bar">
            <img src="search.svg" alt="search-icon" />
            <input type="text" placeholder="Find Your's Note" />
        </div>
        <a href="#"><img src="fotoFauzan.jpg" alt="" /></a>
      `;
  }
}

customElements.define("app-bar", AppBar);
