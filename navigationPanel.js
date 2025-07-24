class NavPanel extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="menu">
            <a href="index.html"><i class="fa-solid fa-house active" id="home"></i></a>
            <a href="https://gvnx.is-a-good.dev/yt-main"><i class="fa-brands fa-youtube" id="youtube"></i></a>
            <a href="https://gvnx.is-a-good.dev/twitch"><i class="fa-brands fa-twitch" id="twitch"></i></a>
            <a href="https://discord.gg/qNVJeAyFPv"><i class="fa-brands fa-discord" id="discord"></i></a>
            <a href="https://gvnx.is-a-good.dev/patreon"><i class="fa-brands fa-patreon" id="patreon"></i></a>
            <a href="https://simplygav.myspreadshop.com/"><i class="fa-solid fa-shirt" id="shirt"></i></a>
            <a href="supporters.html" target="_blank"><i class="fa-solid fa-user-group active" id="supporters"></i></a>
            <a href="donations.html"><i class="fa-solid fa-dollar-sign" id="money"></i></a>
            <a href="collabs.html"><i class="fa-solid fa-handshake" id="collabs"></i></a>
            <a href="more.html"><i class="fas fa-info-circle" id="more"></i></a>
            <a href=""><!-- <i id="greenmangaming">
                <a href="https://greenmangaming.sjv.io/xLRVNR"><img id="gmg" src="res/gmg.ico" alt="gmg"></a>
            </i> -->
        </div>
      `;
    }
}

customElements.define('nav-panel', NavPanel);
