'use strict'

function renderHomePage(){
    const renderBox=(topic,id,title,date,summary)=>{
        return `
            <div class='box'>
                <p class='topic'>${topic}</p>
                <p class='title'>${title}</p>
                <p class='date'>${date}</p>
                <p class='summary'>${summary}</p>
                <a class='link' href='/${topic}/${id}' id='${topic+id}'>Continue reading</a>
            </div>
        `
    }
    const list1= world.items.map(i=>renderBox(world.topic,i.id,i.title,i.date,i.summary))
    const list2= design.items.map(i=>renderBox(design.topic,i.id,i.title,i.date,i.summary))
    const html1= `
        <div class='worldList'>${list1}</div>
        <div  class='designList'>${list2}</div>
    `
    const html2= renderBlog()
    $('.home').html(html1)
    $('.blog').html(html2)
}
function renderBlog(){
    let item= design.items[0]
    const {title,date,author,authorProfile,introduction,body}= item
    const html1= introduction.map(s=>`<p class='list'>${s}</p>`).join('')
    const html2= body.content.map(s=>{
        return `
            <div class='list'>
                <h3>${s.header}</h3>
                <p>${s.body}</p>
            </div>
        `
    }).join('')
    const list=array=>array.map((obj,index)=> `
    <li key=${index}><a href='${obj.url}'>${obj.name}</a></>`).join('')
    const html3= list(months)
    const html4= list(accounts)
    return (
        `<section class='left'>
            <header>
                <h1>${title}</h1>
                <p>${date} by <a href='${authorProfile}'>${author}</a></p>
            </header>
            <div>
                ${html1}
                <h2>Heading</h2>
                ${body.introduction}
                ${html2}
            </div>
        </section>
        <section class='right'>
            <div class='list about'>
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptate delectus, ex adipisci odio non eaque ipsam tempora quae numquam?</p>
            
            </div>
            <div class='list'>
                <h2>Arichives</h2>
                <ul>${html3}</ul>
            </div>
            <div class='list'>
                <h2>Elsewhere</h2>
                <ul>${html4}</ul>
            </div>
        
        </section>
        
        `
    )
}

function main(){
    renderHomePage();
    renderBlog();

}

$(main)