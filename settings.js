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

function save_color() {
    var value = document.getElementById("color").value;
    console.log(value);
    chrome.storage.local.set({"color": value}).then(() => {
        console.log("Color is set");
    });
    document.getElementById("sample").style.backgroundColor = "rgb("+value+")";
}
document.getElementById("color").addEventListener("mouseout", save_color);
document.getElementById("color").addEventListener("focusout", save_color);


chrome.storage.local.get(["color"]).then((result) => {
    try {
        result.color.toString();
        document.getElementById("color").value = result.color;
        strcolor = result.color.toString() //just in case
        rgblist = strcolor.replace(/[^\d,]/g, '').split(',');
        document.getElementById("sample").style.backgroundColor = "rgb("+strcolor+")"; //rgblist[0],rgblist[1],rgblist[2])
        
    } catch {
        console.log("no color set");
    }
});
