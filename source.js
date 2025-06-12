(async function(){
    const CONTEST_ACCOUNT = prompt("Submit an account users must be subscribed to to be elligable for the raffle.\nLeave empty if you do not their subscriptions to be checked.\nNote if people have their subscriptions privated this will exclude them from the raffle!\n\n(This is case sensitive!)").trim();
    const EXCLUDED_USERS = prompt("Provide any users you don't want to win the raffle.\nProvide these with commas seperating them.\n\nEx: user1, user2\n(this is case sensitive!)").split(',').map(user => user.trim());
    const EXTRA_SUBMISSIONS = Boolean(prompt("Do you want extra submissions via drawing the raffle character to be considered?\nReply with 'true' or 'false'").trim().toLowerCase());
    
    alert("Got it! Give me a few seconds... *beep boop*");

    async function getUsersFromPage(url) {
        let response = await fetch(url);
        if (!response.ok) {
            if (response.status != 403) {
                alert("Error reaching stats at " + url + ". This could be due to a network issue.");
            }
            return [];
        }
        let data = await response.text();
        let doc = new DOMParser().parseFromString(data, "text/html");
        let content = doc.getElementById('content');
        return Array.from(content.getElementsByClassName('user-name-badge')).map(user => user.innerText.trim());
    }

    function getDrawers(doc) {
        return Array.from(doc.getElementsByClassName('artist-credit')).map(user => user.innerText.trim());
    }

    let favorites_uwu = await getUsersFromPage(window.location.href + '/favorites');
    let drawers_uwu = [];
    if (EXTRA_SUBMISSIONS) {
        drawers_uwu = getDrawers(document);
    }
    let entries_uwu = favorites_uwu.concat(drawers_uwu);

    entries_uwu = entries_uwu.filter(uwu => !EXCLUDED_USERS.includes(uwu));

    if (CONTEST_ACCOUNT != '') {
        let subscribed_uwu = await Promise.all(entries_uwu.map(async uwu => {
            let users = await getUsersFromPage("https://toyhou.se/" + uwu + "/stats/subscriptions");
            return users.includes(CONTEST_ACCOUNT);
        }));
        entries_uwu = entries_uwu.filter((uwu, index) => subscribed_uwu[index]);
    }

    let winner = entries_uwu[Math.floor(Math.random() * entries_uwu.length)];
    alert("Out of " + entries_uwu.length + " entries, our lucky winner is " + winner + "!");
})();