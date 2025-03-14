class Dial extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      let str = "";
      const num_dials = parseInt(this.getAttribute("num-dials"), 10);
      for (let i = 1; i <= num_dials; i++) {
        str += `
          <div class="dial-item">
            <input type="radio" name="dial" class="dial-checkbox" id="dial-${i}" />
            <label for="dial-${i}"><h2>${i}</h2></label>
          </div>
        `;
      }
  
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/dial/dial.css">
        <div class="dial">
          ${str}
        </div>
      `;
    }
  }
  
  customElements.define('dial-component', Dial);
  