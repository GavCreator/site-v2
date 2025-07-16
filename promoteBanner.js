class promoteBanner extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="collab-deals">
          <a class="link-img" href="https://greenmangaming.sjv.io/c/6319715/1279942/15105"><img src="res/gmg/saveonpcgames.png"></a>
        </div>
      `;
    }
}

customElements.define('promo-banner', promoteBanner);
