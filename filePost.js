var idFile = localStorage.getItem('idFile');
var arr = JSON.parse(localStorage.getItem("arrFromFile"));

const h1file = document.createElement("h1");
h1file.innerText = arr[idFile-1][0]; // [postNumber][0] - 0 is title
document.getElementById('header').appendChild(h1file);

const imgFile = document.createElement("img");
imgFile.setAttribute('src', arr[idFile-1][1]);
imgFile.setAttribute('width', 400);
imgFile.setAttribute('heigth', 500);
document.getElementById('content').appendChild(imgFile);

const dateFile = document.createElement("div");
dateFile.innerText = arr[idFile-1][2];
document.getElementById('header').appendChild(dateFile);

const textFile = document.createElement("article");
textFile.innerText = arr[idFile-1][3];
document.getElementById('content').appendChild(textFile);

// Load comments from Local Storage
var  existingComm = JSON.parse(localStorage.getItem('commentsFile' + idFile));

for(var i = 0; i < existingComm.length; i++)
{
  const allComments = document.createElement("li");
  document.getElementById('comments').appendChild(allComments);

  allComments.innerHTML = 
  `<div><b>${existingComm[i]['author']}</b></div>
  <div>${existingComm[i]['time']}</div>
  <div>${existingComm[i]['text']}</div>`;

}

var size = existingComm.length;

function addComment()
{
  var crrUser = localStorage.getItem('currentUser');

  var maxLength = document.getElementById("text").maxLength;
  var txtAreaLength = document.getElementById("text").value.length;

  if (txtAreaLength <= maxLength)
  {
  // Save new comment in Local Storage
  var text = document.getElementById('text').value;

    if(existingComm == null) 
    existingComm = [];

    var record = 
    {
        "author": crrUser,
        "time": new Date(),
        "text": text
    };

    existingComm[existingComm.length] = record;
    window.localStorage.setItem('commentsFile' + idFile, JSON.stringify(existingComm));
    
    // Show new comment in page
    const allComments = document.createElement("li");
    document.getElementById('comments').appendChild(allComments);
    
      allComments.innerHTML = 
      `<div><b>${existingComm[size]['author']}</b></div>
       <div>${existingComm[size]['time']}</div>
       <div>${existingComm[size]['text']}</div>`;
  }
}
