class New extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./src/components/new/new.css">
      <div class="new">
        <div class="new-content">
          <h2>${this.getAttribute("new-title")}</h2>
          <p>${this.getAttribute("new-text")}</p>
            <p>${this.getAttribute("new-author")}</p>
            <p>${this.getAttribute("new-date")}</p>
          </div>
      </div>
    `;
  }
  
}
customElements.define('news-component', New);