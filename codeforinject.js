selected = window.getSelection();
//chrome.storage.local.set({"selected":selected});

chrome.storage.local.set({"selected": selected.toString()}).then(() => {
    console.log("Selected is set");
});

chrome.storage.local.set({"anchor": selected.anchorOffset}).then(() => {
    console.log("Anchor is set");
});

chrome.storage.local.set({"focus": selected.focusOffset}).then(() => {
    console.log("Focus is set");
});

chrome.storage.local.set({"innertext": document.body.innerText}).then(() => {
    console.log("Innertext is set");
});


