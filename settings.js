function save() {
    var value = document.getElementById("initials").value;
    console.log(value);
    chrome.storage.local.set({"initials": value}).then(() => {
        console.log("Initials is set");
    });
}
document.getElementById("initials").addEventListener("mouseout", save);
document.getElementById("initials").addEventListener("focusout", save);


chrome.storage.local.get(["initials"]).then((result) => {
    try {
        result.initials.toString();
        document.getElementById("initials").value = result.initials;
        
    } catch {
        console.log("no initials set");
    }
});
