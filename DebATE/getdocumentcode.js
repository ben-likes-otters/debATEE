chrome.storage.local.set({"document": document.getElementsByTagName("html")[0].innerHTML}).then(() => {
    console.log("document is set");
    console.log(document.getElementsByTagName("html")[0].innerHTML);
});

