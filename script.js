document.addEventListener("DOMContentLoaded", (event) => {
    // Functions Here

    function loadScript(url) {
        const script = document.createElement('script');
        script.src = url;
        document.head.appendChild(script);
    }

    function getId(id) {
        return document.getElementById(id);
    }

    function rFunc(varhere, locationhere){
        varhere.addEventListener("click", function(){
            window.location.href = locationhere;
        })
    }
    
    // Load Scripts

    loadScript('https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.7.1.js');
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/jszip/3.7.1/jszip.min.js');
    loadScript('https://cdn.statically.io/gh/GsLibrary/Library/main/NewScript.js');
    loadScript('https://kit.fontawesome.com/5f8433758a.js');
    loadScript('res/app2.js');
    loadScript('res/gmg.js');

    // Variables

    const rHome = getId("home");
    const rYT = getId("youtube");
    const rTTV = getId("twitch");
    const rDisc = getId("discord");
    const rPat = getId("patreon");
    const rDon = getId("money");
    const rInfo = getId("additional");
    const rMerch = getId("shirt");
    const rGMG = getId("gmg");

    // OnClick Redirects

    if (getId("toBenefits")) {
        const rBenefits = getId("toBenefits");
        rFunc(rBenefits, "benefits.html");
    }
    
    if (getId("toRules")) {
        const rRules = getId("toRules");
        rFunc(rRules, "rules.html");
    }

    if (getId("toMainDon")){
        const rMainDon = getId("toMainDon");
        rFunc(rMainDon, "https://streamlabs.com/simplygav/tip");
    }

    if (getId("toAltDon")){
        const rAltDon = getId("toAltDon");
        rFunc(rAltDon, "https://gvnx.is-a-good.dev/altdonation");
    }

    if (getId("toAmazonGift")){
        const rAWL = getId("toAmazonGift");
        rFunc(rAWL, "https://gvnx.is-a-good.dev/awl");

    }

    if (getId("toThroneGift")){
        const rThrone = getId("toThroneGift");
        rFunc(rThrone, "https://gvnx.is-a-good.dev/throne");
    }

    if (getId("shirt")){
        const rMerch = getId("shirt");
        rFunc(rMerch, "https://simplygav.myspreadshop.com");
    }

    rFunc(rHome, "index.html");
    rFunc(rYT, "https://gvnx.is-a-good.dev/yt-main");
    rFunc(rTTV, "https://gvnx.is-a-good.dev/twitch");
    rFunc(rDisc, "https://discord.gg/qNVJeAyFPv");
    rFunc(rPat, "https://gvnx.is-a-good.dev/patreon");
    rFunc(rDon, "donations.html");
    rFunc(rInfo, "more.html");
    rFunc(rShirt, "https://simplygav.myspreadshop.com/");
    rFunc(rGMG, "https://greenmangaming.sjv.io/xLRVNR");
});
