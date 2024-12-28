function copy() {
    document.getElementById("copier").style.filter = "invert(1)"
    document.getElementById("copier").style.border = "1px solid white";

    try {
        const content = document.getElementById('main').innerHTML;
        const blobInput = new Blob([content], {type: 'text/html'});
        const clipboardItemInput = new ClipboardItem({'text/html' : blobInput});
        navigator.clipboard.write([clipboardItemInput]);
    } catch(e) {
        // Handle error with user feedback - "Copy failed!" kind of thing
        console.log(e);
    }
    /*var text = document.getElementById("main");
    
    Clipboard.write(new ClipboardItem()*/
}
function copierborderadd() {
    document.getElementById("copier").style.border = "1px solid black";
}
function copierborderdel() {
    document.getElementById("copier").style.border = "";
}
function copierfilterdel() {
    document.getElementById("copier").style.filter = "";
    document.getElementById("copier").style.border = "1px solid black";
}
document.getElementById("copier").addEventListener("mousedown",copy);
document.getElementById("copier").addEventListener("mouseover",copierborderadd);
document.getElementById("copier").addEventListener("mouseout",copierborderdel);
document.getElementById("copier").addEventListener("mouseup",copierfilterdel);



chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    // use `url` here inside the callback because it's asynchronous!
    //document.getElementById("temp").innerHTML = url;
    
    console.log('carder here');
    chrome.storage.local.get(["headerdata"]).then((result) => {
        var stuff = result.headerdata;
        var formattedstuff;
        chrome.storage.local.get(["usingNS"]).then((result) => {
            console.log("usingns: "+ result.usingNS)
            if (result.usingNS) {
                var initials;

                chrome.storage.local.get(["initials"]).then((result) => {
                    //console.log(result.initials);
                    try {
                        result.initials.toString();
                        initials = result.initials;
                        formattedcardhead1 = formattedstuff + " <em>//" + initials + "</em>";
                        formattedcardhead2 = "<a style=\"color:rgb(40, 84, 197)\" href=\""+url+"\" title=\""+url+"\"><u>"+url.trim()+"</u></a>";
                        
                    } catch {
                        console.log("caught")
                        formattedcardhead1 = formattedstuff;
                        formattedcardhead2 = "<a style=\"color:rgb(40, 84, 197)\" href=\""+url+"\" title=\""+url+"\"><u>"+url.trim()+"</u></a>";
                    }
                    document.getElementById("cardhead1").innerHTML = formattedcardhead1+"\n"+formattedcardhead2;
                    //document.getElementById("cardhead2").innerHTML = formattedcardhead2;
        
                });
                
                var formattedstuff = stuff[0] + ". " + stuff[2] + ". " + stuff[1];
                try {
                    if(!['!','?','.'].includes(formattedstuff.charAt(formattedstuff.length-1))) {
                        formattedstuff += "."
                    }
                } catch {
                    console.log("errored")
                }
            
            } else {
                //console.log(stuff[2]);
                //console.log(!(stuff[2] === "No date"))
                var formattedstuff = "";

                if (stuff[0].includes(" ")) {
                    formattedstuff += "<b style=\"font-family:calibri-bold;\">"+stuff[0].split(" ")[stuff[0].split(" ").length-1] + " "
                } else {
                    formattedstuff += "<b style=\"font-family:calibri-bold;\">"+stuff[0] +  " "
                }

                if (!(stuff[2] === "No date")) {
                    formattedstuff += stuff[2].substring(stuff[2].length-2) + " "
                } else {
                    formattedstuff += " "
                }

                formattedstuff += "</b><span style=\"font-size:8pt; width:350px;\">(" + stuff[0] + ", " + stuff[2] + ", \"" + stuff[1] + "\""

                if (stuff[3] === "No publisher found") {
                    formattedstuff += ", "
                } else {
                    formattedstuff += ", "+stuff[3] + ", "
                }
                
                var initials;

                chrome.storage.local.get(["initials"]).then((result) => {
                    //console.log(result.initials);
                    try {
                        result.initials.toString();
                        initials = result.initials;
                        formattedcardhead1 = formattedstuff + "<a style=\"color:rgb(40, 84, 197)\" href=\""+url+"\" title=\""+url+"\"><u>"+url.trim()+"</u></a>) " + " <em>//" + initials + "</em></span>";
                        
                    } catch {
                        console.log("caught")
                        formattedcardhead1 = formattedstuff;
                        formattedcardhead1 = formattedstuff + "<a style=\"color:rgb(40, 84, 197)\" href=\""+url+"\" title=\""+url+"\"><u>"+url.trim()+"</u></a>)</span> ";
                    }
                    document.getElementById("cardhead1").innerHTML = formattedcardhead1;
                    //document.getElementById("cardhead2").innerHTML = formattedcardhead2;
        
                });
                
            }
        });
    });
    
    chrome.scripting.executeScript( {
        target: {tabId: tabs[0].id},
        files: ["codeforinject.js"]
    });
    
    chrome.storage.local.get(["selected", "anchor", "focus","innertext","document"]).then((result) => {
        var alltext = "";//result.innertext
        //var textlist = alltext.split(" ");
        
        const parser = new DOMParser();
        page = parser.parseFromString(result.document, "text/html");
        //page = parser.parseFromString(page.responseText,"text/html");
        //console.log(page);
        var listofptags = page.getElementsByTagName("p");
        for (var i = 0; i < listofptags.length; i++) {
            //console.log(listofptags[i].innerText)
            alltext += listofptags[i].innerText;
        }
        alltext = alltext.replaceAll("\n"," ");
        alltext = alltext.replaceAll(".",". ");
        alltext = alltext.replaceAll(" .",".");
        alltext = alltext.replaceAll("  ", " ");
        alltext = alltext.replaceAll("U. S. ", "U.S.");
        console.log(alltext);
        anchor = result.anchor;
        focus = result.focus;
        var start = anchor > focus ? focus : anchor;
        var end = anchor > focus ? anchor : focus;

        if (start - end != 0) {
            var selected = result.selected;
            selected = selected.replaceAll("\n"," ");
            selected = selected.replaceAll(".",". ");
            selected = selected.replaceAll(" .",".");
            selected = selected.replaceAll("  ", " ");
            selected = selected.replaceAll("U. S. ", "U.S.");

            var snippethighlight = result.selected;
            document.getElementById("highlight").style.padding = "1px";
            
            //REDOING W/ OTHER THING
            //console.log(result.selected.replace("\n"," "));
            start = alltext.indexOf(selected);
            end = start + selected.length;

            function match_selection() {
                //Custom search b/c I'm giving up

                listofwords = alltext.split(' ');

                //filter
                var temp = [];
                for (var i = 0; i < listofwords.length; i++) {
                    //console.log(listofwords[i].match("[a-zA-z]+"))
                    if (listofwords[i].match("[a-zA-z]")) {
                        temp.push(listofwords[i])
                    }
                }
                listofwords = temp;
                
                //redo w/ selected
                selectedlistwords = selected.split(' ');
                temp = [];
                for (var i = 0; i < selectedlistwords.length; i++) {
                    //console.log(listofwords[i].match("[a-zA-z]+"))
                    if (selectedlistwords[i].match("[a-zA-z]")) {
                        temp.push(selectedlistwords[i])
                    }
                }
                selectedlistwords = temp;
                console.log(listofwords);
                console.log(selectedlistwords);

                //this will only work if selected words are 'whole' words 
                //i.e., the splitter detects them *sigh*
                //that forces this AMAZING bit of code to be a fallback on the orig plan

                //SEARCH
                for (var i = 0; i < listofwords.length; i++) {
                    successfulwords = 0;
                    if (listofwords[i] == selectedlistwords[successfulwords]) {
                        successfulwords += 1;
                    } else {
                        successfulwords = 0;
                        continue;
                    }
                    if (successfulwords == selectedlistwords.length-1) {
                        //now to somehow return the index of the beginning of those words

                    }
                }
            }

            console.log("start: "+start+" end: "+end);

            const SLICEAMOUNT = 650;
            
            if (start - SLICEAMOUNT >= 0) {
                slicestart = start - SLICEAMOUNT;
            } else {
                slicestart = 0;
            }
            
            if (end + SLICEAMOUNT <= alltext.length-1) {
                sliceend = end + SLICEAMOUNT;
            } else {
                sliceend = alltext.length - 1;
            }
            console.log(slicestart);
            console.log(sliceend);
            
            var snippetfront = alltext.slice(slicestart,start);
            var snippetback = alltext.slice(end, sliceend);
            console.log("initial snippetfront: "+snippetfront);
            console.log("initial snippetback: "+snippetback);

            for (let i = slicestart-1; i>=0; i--) {
                if (['.','!','?'].includes(alltext.charAt(i))) {
                    snippetfront = snippetfront.slice(1,-1);
                    break;
                } else {
                    snippetfront = alltext.charAt(i) + snippetfront;
                }
            }
            for (let i = sliceend; i<=alltext.length - 1; i++) {
                if (['.','!','?'].includes(alltext.charAt(i))) {
                    snippetback += alltext.charAt(i)
                    break;
                } else {
                    snippetback = snippetback + alltext.charAt(i);
                }
            }
            if (snippetback.charAt(0) == " " && ['.','!','?',')'].includes(snippetback.charAt(1))) {
                snippetback = snippetback.slice(1,-1);
            }
            //placing spaces cause i cannot look at that
            //snippetfront = snippetfront.replace(":",": ");
            //snippetback = snippetback.replace(":",": ");
            //snippethighlight = snippethighlight.replace(":",": ");
            console.log("new snippetfront " + snippetfront)
            console.log("new snippetback " + snippetback)

            document.getElementById("highlight").innerHTML = "<u><b>"+snippethighlight+"</b></u>";
            document.getElementById("topcontext").innerHTML = snippetfront;
            document.getElementById("bottomcontext").innerHTML = snippetback;
            
            chrome.storage.local.get(["color"]).then((result) => {
                try {
                    //result.color.toString();
                    //document.getElementById("color").value = result.color;
                    strcolor = result.color.toString() //just in case
                    rgblist = strcolor.replace(/[^\d,]/g, '').split(',');
                    document.getElementById("highlight").style.backgroundColor = "rgb("+strcolor+")"; //rgblist[0],rgblist[1],rgblist[2])
                    
                } catch {
                    console.log("no color set");
                }
            });
        }
    });
});


