fetch("./file.json")
    .then(file => file.json())
    .then(result => 
        {
            var arr = []; 
           
            Object.keys(result).map(key => 
            {
                arr.push(result[key]);
            });

           arr.sort(sortFunction);

           function sortFunction(a, b) 
           {
               if (a[2] === b[2]) // [2] is date in file
                   return 0;
               else 
                   return (a[2] < b[2]) ? -1 : 1; // ascending order
                   //returned value: < 0 => a before b, > 0 => b before a, equal - same order (documentation)
           }

           var commentsCount = localStorage.getItem('counter');

            arr.forEach(function(item, i)
            {
                localStorage.setItem('arrFromFile', JSON.stringify(arr)); // for redirect, load page
                
            var comment = localStorage.getItem('commentsFile'+(i+1));
            let countComments; 
            
            if(comment == null)
                countComments = 0;
            else
                countComments = JSON.parse(comment).length;

            var li = document.createElement("li");

            li.setAttribute('id', 'post' + (i+1));

            var ahref = 'filePost.html';

            li.innerHTML = `<div class="container">
            <div class="postPic">
            <div><img src="${item[1]}" alt="Photo" width="250" height="200""></div>
            </div>

            <div class="info">
            <div id='title${i+1}'> <h3> <a href=${ahref}>  ${item[0]} </a> </h3> </div>
            <div id='time${i+1}'> ${item[2]} </div>
            <div id='comment${i+1}'> ${countComments} comments</div>
            </div>

            </div>`

            if(document.getElementById('list'))
            document.getElementById('list').appendChild(li);

            let elem = document.getElementById('title' + (i+1));
            let postID;

            if(elem) // not null check
            postID = elem.id; // title1

            if(postID)
            var index = postID[postID.length-1] - 1; // 1

            if(elem)
            {      
                elem.addEventListener("click", event =>
                {
                    localStorage.setItem('idFile',(index+1));
                });
            }
    
            }); 

          // Load posts from Local Storage

           var newPosts = JSON.parse(localStorage.getItem('post'));
           
           for(var i=0; i<newPosts.length; i++)
           {
                var commentls = localStorage.getItem('commentsLS'+i);
                var counterComments; 
                
                if(commentls == null)
                counterComments = 0;
                else
                counterComments = JSON.parse(commentls).length;

                const addPost = document.createElement("li");

                if(document.getElementById('list'))
                document.getElementById('list').appendChild(addPost);

                addPost.setAttribute('id', 'storagePost' + (i+1));

                var href = 'storagePost2.html';

                addPost.innerHTML = `<div class="container">
                <div class="postPic">
                                    <div class="sPhoto"> <img src="${newPosts[i]['photo']}" alt="Photo" width="250" height="200""> </div>
                </div>
                <div class="info">
                <div id="sTitle"><h3> <a href=${href} id="sTitle${i+1}"> ${newPosts[i]['title']} </a> </h3> </div>
                                    <div id="sTime">Created: ${newPosts[i]['time']}</div>
                                    <div id="sComment">${counterComments} comments</div>
                </div>

                </div>`;

                        
                if(document.getElementById('list'))
                document.getElementById('list').appendChild(addPost);
            }

           for(var i=0; i<newPosts.length; i++)
           {
            var el = document.getElementById('sTitle' + (i+1));

            let stringID;
            if(el)
            stringID = el.id; // sTitle1

            let idx;
            if(stringID)
            idx = stringID[stringID.length-1] - 1; // 1

            if(el)
            {      
                el.addEventListener("click", event =>
                {
                    localStorage.setItem('id',idx);
                });
            }

           }
    });
