//update version (which is basically disabling the change feature thing)

chrome.storage.local.set({"version":chrome.runtime.getManifest().version})
console.log("done");
