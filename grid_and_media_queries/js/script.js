var button = document.querySelector("button")

button.addEventListener("click", function(){
    var posts = document.querySelectorAll(".post");
    for(var i = 0; i < posts.length; i++){
        posts[i].classList.toggle("half")
    }
})
