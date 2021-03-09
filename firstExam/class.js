const baseurl = 'https://jsonplaceholder.typicode.com';
const todoPath = 'todos';

const GetData = (async () => {
    const res = await fetch([baseurl, todoPath].join('/'))
    const data = await res.json();
    const inittodolsitTmp = ((todoArray) => {
        let template = '';
        todoArray.forEach(ele => {
            template += `
            <li>
                <span>${ele.title}</span>
                <button class="btn-remove" id="${ele.id}">X</button>
            </li>
        `;
        });
        return template;
    })(data);
    const uladd = document.querySelector("#todolist-content");
    uladd.innerHTML = inittodolsitTmp;
})();
