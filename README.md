# RAFFLE SCRIPT
### Authored by jbko6 6/11/2025

### HOW TO USE:
1. Copy the script below
2. Create a new bookmark in your browser.
3. Paste the script into the URL/location field of the bookmark.
4. Save the bookmark.
5. Navigate to the Toyhouse raffle page.
6. Click the bookmark to run the script.
7. You may need to wait a few moments depending on your network speed.

hiii! :3

```
javascript:(async function(){const CONTEST_ACCOUNT=prompt("Submit an account users must be subscribed to to be elligable for the raffle.\nLeave empty if you do not their subscriptions to be checked.\nNote if people have their subscriptions privated this will exclude them from the raffle!\n\n(This is case sensitive!)").trim(),EXCLUDED_USERS=prompt("Provide any users you don't want to win the raffle.\nProvide these with commas seperating them.\n\nEx: user1, user2\n(this is case sensitive!)").split(",").map((user=>user.trim())),EXTRA_SUBMISSIONS=Boolean(prompt("Do you want extra submissions via drawing the raffle character to be considered?\nReply with 'true' or 'false'").trim().toLowerCase());async function getUsersFromPage(url){let response=await fetch(url);if(!response.ok)return 403!=response.status&&alert("Error reaching stats at "+url+". This could be due to a network issue."),[];let data=await response.text(),content=(new DOMParser).parseFromString(data,"text/html").getElementById("content");return Array.from(content.getElementsByClassName("user-name-badge")).map((user=>user.innerText.trim()))}alert("Got it! Give me a few seconds... *beep boop*");let favorites_uwu=await getUsersFromPage(window.location.href+"/favorites"),drawers_uwu=[];var doc;EXTRA_SUBMISSIONS&&(doc=document,drawers_uwu=Array.from(doc.getElementsByClassName("artist-credit")).map((user=>user.innerText.trim())));let entries_uwu=favorites_uwu.concat(drawers_uwu);if(entries_uwu=entries_uwu.filter((uwu=>!EXCLUDED_USERS.includes(uwu))),""!=CONTEST_ACCOUNT){let subscribed_uwu=await Promise.all(entries_uwu.map((async uwu=>(await getUsersFromPage("https://toyhou.se/"+uwu+"/stats/subscriptions")).includes(CONTEST_ACCOUNT))));entries_uwu=entries_uwu.filter(((uwu,index)=>subscribed_uwu[index]))}let winner=entries_uwu[Math.floor(Math.random()*entries_uwu.length)];alert("Out of "+entries_uwu.length+" entries, our lucky winner is "+winner+"!")})();
```
