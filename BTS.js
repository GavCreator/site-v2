/* BTS.js - Behind The Scenes, Misc stuff for things like advertisements, analytics, traffic monitering, etc. */

class GoogleAnalytics extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <!-- Google tag (gtag.js) -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-VD774RE0J0"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-VD774RE0J0');
            </script>
        `;
    }
}

customElements.define('Googlytics', GoogleAnalytics);
