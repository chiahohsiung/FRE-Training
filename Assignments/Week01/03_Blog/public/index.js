$(document).ready(doSomething);

function doSomething(){
    // Load more articles button 
    $("#more_articles").on("click", ()=>{
        loadMoreArticles()
    })
}

async function loadMoreArticles (){
    let pageNo = $("#more_articles").attr("pageNo")
    console.log(pageNo)
    let posts = await fetch(`/page/${pageNo}`)
    posts = await posts.json()
    
    posts.posts.map((post)=>{
        createPost(post)
    })

    // Update the pageNo
    $("#more_articles").attr("pageNo", parseInt(pageNo)+1)
}

function createPost(post){
    console.log(post)
    let postsFrame = document.querySelector(".posts")

    let thisPost = document.createElement("div")
    thisPost.className="blog_post_card"
    let link = document.createElement("a")
    link.href = `/${post.fields.slug}`
    let postTitle = document.createElement("h2")
    postTitle.innerText = post.fields.title
    let postImage = document.createElement('img')
    postImage.src = post.fields.feature_image.fields.file.url
    
    let date = document.createElement('p')
    let dateElement = document.createElement('small')
    dateElement.innerText = post.fields.date
    date.appendChild(dateElement)

    link.appendChild(postTitle)
    link.appendChild(date)
    link.appendChild(postImage)
    thisPost.appendChild(link)
    let tags = document.createElement('p')

    // Append the tags of the post
    post.fields.tags.map((tag)=>{
        let newTag = document.createElement('span')
        newTag.innerText = `#${tag}`
        tags.appendChild(newTag)
    })
    thisPost.appendChild(tags)

    // append the post to the posts frame
    postsFrame.appendChild(thisPost)
}