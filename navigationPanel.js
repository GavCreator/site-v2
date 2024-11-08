class NavPanel extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="menu">
            <i class="fa-solid fa-house active" id="home"></i>
            <i class="fa-brands fa-discord" id="discord"></i>
            <i class="fa-brands fa-patreon" id="patreon"></i>
            <i class="fa-solid fa-award" id="benefits"></i>
            <i class="fa-brands fa-youtube" id="youtube"></i>
            <i class="fa-brands fa-twitch" id="twitch"></i>
            <i class="fa-solid fa-dollar-sign" id="money"></i>
            <i class="fa-solid fa-plus rightside" id="more"></i>
        </div>
      `;
    }
}

customElements.define('nav-panel', NavPanel);
