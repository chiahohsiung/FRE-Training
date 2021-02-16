//OBJ DESTRUCTURE

//THIS: call vs apply 

//BINDING PROBLEM | ARROW FUNCTION

// LIMITED FUNC | SET TIMEOUT

// CALL STACK | ASYNC API | WEB API

// MESSAGE QUEUE | TASK QUEUE

// VAR vs LET (visual respresentation of event loop)

// CALLBACK HELD (PROMISE)

//XHR:

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "filename", true);
xhttp.send();