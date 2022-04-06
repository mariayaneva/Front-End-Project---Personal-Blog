// for posts from Local storage

  var id = localStorage.getItem('id');

  var number = id;

  var existingPosts = JSON.parse(localStorage.getItem('post'));

  const h1 = document.createElement("h1");
  h1.innerText = existingPosts[number]['title'];
  document.getElementById('header').appendChild(h1);

  const time = document.createElement("div");
  time.innerText = existingPosts[number]['time'];
  document.getElementById('header').appendChild(time);

  const img = document.createElement("img");
  img.setAttribute('src', existingPosts[number]['photo']);
  img.setAttribute('width', 400);
  img.setAttribute('heigth', 500);
  document.getElementById('content').appendChild(img);

  const article = document.createElement("article");
  article.innerText = existingPosts[number]['text'];
  document.getElementById('content').appendChild(article);


// Load comments from Local Storage
var  existingComm = JSON.parse(localStorage.getItem('commentsLS' + id));

if(existingComm) // not null
var size = existingComm.length;

for(var i = 0; i < size; i++)
{
  const allComments = document.createElement("li");
  document.getElementById('comments').appendChild(allComments);

  allComments.innerHTML = 
  `<div><b>${existingComm[i]['author']}</b></div>
  <div>${existingComm[i]['time']}</div>
  <div style="margin-bottom: 15px">${existingComm[i]['text']}</div>`;

}

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
    window.localStorage.setItem('commentsLS' + id, JSON.stringify(existingComm));

    // Show new comment in page
    const allComments = document.createElement("li");
    document.getElementById('comments').appendChild(allComments);
    
      allComments.innerHTML = 
      `<div><b>${existingComm[size]['author']}</b></div>
       <div>${existingComm[size]['time']}</div>
       <div>${existingComm[size]['text']}</div>`;
  }
}
