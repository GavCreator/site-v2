class promoteBanner extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="gmg-deals">
          <a class="link-img" href="https://greenmangaming.sjv.io/c/6319715/3074726/15105"><img src="res/gmg/sundeal.png"></a>
        </div>
      `;
    }
}

customElements.define('promo-banner', promoteBanner);
