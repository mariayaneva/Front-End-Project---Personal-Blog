function login()
{
    var existingUsers = JSON.parse(localStorage.getItem('users'));
    var emlInput = document.getElementById('eml').value;
    var pswInput = document.getElementById('psw').value;

    var successful = 0;
    var currentUser;

    for (var i = 0; i < existingUsers.length; i++)
     {
      if (emlInput == existingUsers[i]['email'] && pswInput == existingUsers[i]['password']) 
        {
            successful = 1;
            break;
        }
        
        else
            successful = 0;
     }

     if (successful == 1)
        {
            alert('You have logged in successfully!');

            currentUser = emlInput;
            localStorage.setItem('currentUser', currentUser); // for comments

            window.open('blogPosts.html', 'Blog Posts'); 
        }
     else
        alert('Invalid login!');

}