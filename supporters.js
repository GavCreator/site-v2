document.addEventListener("DOMContentLoaded", function(){
document.querySelectorAll('icon').forEach(el => {
    const type = el.getAttribute('type');
    const label = type.charAt(0).toUpperCase() + type.slice(1);
    const img = document.createElement('img');
    if (type === "p1") {
        img.src = `res/supporters/patreon.png`;
        img.alt = "Patreon Tier 1";
        img.title = "Patreon Tier 1";
    } else if (type === "p2") {
        img.src = `res/supporters/patreon.png`;
        img.alt = "Patreon Tier 2";
        img.title = "Patreon Tier 2";
    } else if (type === "p3") {
        img.src = `res/supporters/patreon.png`;
        img.alt = "Patreon Tier 3";
        img.title = "Patreon Tier 3";
    } else if (type === "prime") {
        img.src = `res/supporters/prime gaming.png`;
        img.alt = "Twitch Prime Sub";
        img.title = "Twitch Prime Sub";
        img.style.borderRadius = "20%"
    } else {
        img.src = `res/supporters/${type}.png`;
        img.alt = label;
        img.title = label;
    }
    img.className = 'inline-icon icon';
    el.replaceWith(img);
});
})