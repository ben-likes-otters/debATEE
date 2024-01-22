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
    
    chrome.storage.local.get(["cardheader"]).then((result) => {
        var formattedstuff = result.cardheader;
        console.log(formattedstuff)
        if (!['!','?','.'].includes(formattedstuff.charAt(formattedstuff.length -1))) {
            formattedstuff += "."
        }
        
        
        var initials;
        var formattedcardhead;
        chrome.storage.local.get(["initials"]).then((result) => {
            //console.log(result.initials);
            try {
                result.initials.toString();
                initials = result.initials;
                formattedcardhead = formattedstuff + " <em>//" + initials + "</em>"+ "<br><a style=\"color:rgb(40, 84, 197)\" href=\""+url+"\" title=\""+url+"\"><u>" +url+"</u></a>";
                
            } catch {
                console.log("caught")
                formattedcardhead = formattedstuff + "<br><a style=\"color:rgb(40, 84, 197)\" href=\""+url+"\" title=\""+url+"\"><u>" +url+"</u></a>";
            }
            document.getElementById("cardhead").innerHTML = formattedcardhead;

        });
    });
    
    
    
    chrome.scripting.executeScript( {
    target: {tabId: tabs[0].id},
    files: ["codeforinject.js"]
    });
    
    chrome.storage.local.get(["selected", "anchor", "focus","innertext"]).then((result) => {
        var alltext = "";//result.innertext
        //var textlist = alltext.split(" ");
        var page = new XMLHttpRequest();
        page.open("GET",url,false);
        page.send(null);
        const parser = new DOMParser();
        page = parser.parseFromString(page.responseText,"text/html");

        var listofptags = page.getElementsByTagName("p");
        for (var i = 0; i < listofptags.length; i++) {
            //console.log(listofptags[i].innerText)
            alltext += listofptags[i].innerText + "\n\n";
        }
        //console.log(alltext);
        
        
        anchor = result.anchor;
        focus = result.focus;
        
        start = anchor < focus ? anchor : focus;
        end = anchor > focus ? anchor : focus;

        if (start - end != 0) {
            var snippethighlight = result.selected;
            document.getElementById("highlight").style.padding = "1px";
            
            slicestart = (start - 200 >= 0) ? start - 200 : 0;
            sliceend = (end + 200 <= alltext.length - 1) ? end + 200: alltext.length - 1;
            
            //REDOING W/ OTHER THING
            //console.log(result.selected.replace("\n"," "));
            start = alltext.indexOf(result.selected);
            end = start + result.selected.length;
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
                snippetback = snippetback.slice(1,-1)
            }
            //placing spaces cause i cannot look at that
            //snippetfront = snippetfront.replace(":",": ");
            //snippetback = snippetback.replace(":",": ");
            //snippethighlight = snippethighlight.replace(":",": ");
            
            
            document.getElementById("highlight").innerHTML = "<u><b>"+snippethighlight+"</b></u>";
            document.getElementById("topcontext").innerHTML = snippetfront;
            document.getElementById("bottomcontext").innerHTML = snippetback;
        }
    });
});


