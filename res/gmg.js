const AAds = localStorage.getItem("AAds");

// Only run if it's ON, missing, or invalid
if (AAds !== "OFF") {
    // If value is missing or invalid, set to ON
    if (AAds !== "ON") {
        localStorage.setItem("AAds", "ON");
    }

(function(i,m,p,a,c,t){c.ire_o=p;c[p]=c[p]||function(){(c[p].a=c[p].a||[]).push(arguments)};t=a.createElement(m);var z=a.getElementsByTagName(m)[0];t.async=1;t.src=i;z.parentNode.insertBefore(t,z)})('https://utt.impactcdn.com/P-A6319715-8a79-45a0-b5fd-cff1e86a50241.js','script','impactStat',document,window);impactStat('transformLinks');impactStat('trackImpression');

}