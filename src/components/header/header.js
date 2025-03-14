class Header extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./src/components/header/header.css">
            <div class="header-container">
                <div class="header">
                    <p>Blog-Sofia</p>
                    <ul class="nav">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        `;
    }
}

customElements.define('header-component', Header);