function addPost()
{
    var title = document.getElementById('title').value;
    var photo = document.getElementById('photo').value;
    var text = document.getElementById('text').value;
 
    var existingPosts = JSON.parse(localStorage.getItem('post'));
    if(existingPosts == null) 
        existingPosts = [];

    var record = 
    {
        "title": title,
        "photo": photo,
        "time": new Date(),
        "text": text,
        "comments": '4' // not used
    };

    existingPosts.push(record);
    window.localStorage.setItem('post', JSON.stringify(existingPosts));

    alert("You added new post successfully!");
}