////// WORKING DOWNLOADER for RC



//////Add download button
function addButton() {
    var btn = document.querySelector("body > nav > div > div.navbar-header > a").cloneNode(false);
    //btn.href = getDataLink();
    document.querySelector("body > nav > div > div.navbar-header").appendChild(btn);
    btn.outerHTML = "<a class='navbar-brand' href='#' onclick='return addTask()'>Download</a>";
    btn.style.cssText = document.defaultView.getComputedStyle(document.querySelector("body > nav > div > div.navbar-header > a.navbar-brand"), "").cssText;
    console.log("Queue Button added");
    var btn2 = btn.cloneNode(false);
    document.querySelector("body > nav > div > div.navbar-header").appendChild(btn2);


    btn2.outerHTML = "<a class='navbar-brand' href='#' onclick='return downloadTask()'>Now</a>";
    btn2.style.cssText = document.defaultView.getComputedStyle(document.querySelector("body > nav > div > div.navbar-header > a.navbar-brand"), "").cssText;
    console.log("Download Button added");

    //check for existing task in local storage
    var orig = cleanUrl(document.location.href);
    var taskString = window.localStorage.getItem(orig);

    var x = document.querySelector("body > nav > div");
    var y = document.createElement("div");
    if (orig != null) {
        //task exists
        taskString = JSON.parse(taskString);
        y.innerHTML = "TASK ALREADY EXISTS!!!!! <br>status: " + taskString[3] + "<br>date: " + taskString[4];
    } else {
        //no existing task
        y.textContent = "no existing task";
    }
    x.appendChild(y);


}


//////Add Task
function addTask() {
    var stor = window.localStorage;

    var cnt = stor.getItem("taskCount");
    if (cnt == null) {
        //stor.setItem("taskCount", "1");
        cnt = 0;
    }
    cnt = Number(cnt);

    var orig = cleanUrl(document.location.href);
    var file = document.title.replace(/[^\w\s]/gi, "") + ".mp4";
    var link = document.querySelector(".embed-responsive-item").contentDocument.querySelector("#example_video_1_html5_api > source:nth-child(3)").src;
    var status = "todo"; //other can be failed or done
    var date = new Date();
    var id = cnt + 1;
    var task = [orig, link, file, status, date];

    var taskString = JSON.stringify(task);
    stor.setItem(orig, taskString);
    //stor.setItem("taskCount",(cnt++).toString());
    console.log("new task added to queue: " + taskString);
}

//remove everything after the last forward slach (to make sure the link is unique)
function cleanUrl(lnk) {
    lnk = lnk.substring(0, lnk.lastIndexOf('/') + 1);
    return lnk;
}

function downloadTask() {
    ///////Download   
    // confirm("ready to download?");

    var orig = cleanUrl(document.location.href);
    var file = document.title.replace(/[^\w\s]/gi, "") + ".mp4";
    var link = document.querySelector(".embed-responsive-item").contentDocument.querySelector("#example_video_1_html5_api > source:nth-child(3)").src;


    document.body.innerHTML = "Downloading: " + link + " and saving as:" + file;

    var req = new Request(link);
    //var req=new XMLHttpRequest(link);

    fetch(req)
        .then(response => response.blob())
        .then(blob => {
            var myBlob = blob;
            var myLink = document.createElement("a");
            document.body.appendChild(myLink);
            myLink.href = window.URL.createObjectURL(myBlob);
            myLink.target = "_blank";
            myLink.download = file;
            myLink.click();
            console.log("Downlooad completed");
            document.body.innerHTML = "Download complete";

            //update task status in localstorage
            var status = "done"; //other can be failed or done
            var date = new Date();
            var task = [orig, link, file, status, date];
            var taskString = JSON.stringify(task);
            window.localStorage.setItem(orig, taskString);
        })

}

function getDataLink() {
    return 0;
}

/*

var s=document.createElement("script");
s.src="https://west.stepvda.net/lib/rctest.js";
document.body.appendChild(s);

addButton();

*/