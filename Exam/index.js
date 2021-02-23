// MVC, MVVM
const postAPI = (() => {
    const baseurl = 'https://itunes.apple.com/search?term=';

    const getAllPosts = (artist, limit) => {
        let keyword = '';
        keyword += artist;
        keyword += '&media=music&entity=album';

        if (limit) {
            keyword += '&limit=' + +limit;            
        }
        return fetch([baseurl, keyword].join(''))
            .then((response) => response.json());

    }
    const deletePost = (id) =>
        fetch([baseurl, keyword, id].join('='), {
            method: 'DELETE',
        });

    const addPost = (artist, limit) => {
        let keyword = '';
        keyword += artist;
        if (limit) {
            keyword += '&limit=' + +limit;            
        }


    return fetch([baseurl, keyword].join('='), {
            method: 'POST',
            body: JSON.stringify(artist),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json());
    }

    return {
        getAllPosts,
        deletePost,
        addPost
    }
})();



const View = (() => { 
    const domString = {  // used to select HTML element by ID
        postlist: 'postlist-content',
        removebtn: 'btn-remove',
        postinput: 'postlist_input'
    }
    const render = (element, htmlTemplate) => {  // element : <ul> , htmlTemplate : <li>
        element.innerHTML = htmlTemplate;     // renders all the list inside ul on HTML
    }
    const initpostlistTmp = (postArray) => { // creates new complete <li> elements (in string) to be displayed
        let template = '';
        postArray.results.forEach(ele => {  // elements inside <li> below will be displayed
            template += `
                <li>
                    <span>${ele.collectionName}</span>
                    <button class="btn-remove" id="${ele.id}">V</button>
                </li>
            `;
        });


        return template; // returns the complete <li> elements (in string)
    }

    return {
        domString,
        render,
        initpostlistTmp
    }
})();

const Model = ((api, view) => {
    class Post {
        constructor(artist, limit) {
            this.artist = artist;
            this.limit = limit;
        }
    }

    class State {
        #postlist = []; // an array to store all the objects of data
        #postinput = ''; // variable to grab and store the current input from the user;  it will reset to empty everytime input is used

        get postinput() {
            return this.#postinput;
        }
        set postinput(inputvalue) {
            this.#postinput = inputvalue;

            const postInputEle = document.querySelector('#' + view.domString.postinput); // postInputEle -> selected input element like <input type="text" class="aa" ....>
            
            postInputEle.value = this.#postinput; // postInputEle grabs the input element from HTML and set it's input value to the user's input value
        }

        get postlist() { // returns array of all the list stored in the database
            return this.#postlist;
        }
        set postlist(newlist) { // newlist -> new array of data objects
            this.#postlist = newlist; // update all the data objects

            const postElement = document.querySelector('#' + view.domString.postlist); // postElement ->  <ul>...</ul>
            const htmltmp = view.initpostlistTmp(this.#postlist);           // htmltmp -> all the <li> element (in string) that are displayed
            view.render(postElement, htmltmp);                              // this does postElement.innerHTML = htmltmp, and will allow viwers to see
        }
    }

    const getAllPosts = api.getAllPosts;
    const deletePost = api.deletePost;
    const addPost = api.addPost;

    return {
        Post,
        State,
        getAllPosts,
        deletePost,
        addPost
    }
})(postAPI, View);

const AppController = ((view, model) => {
    const state = new model.State();  // 'state' controls the status of stored data 

    const addListenerOnInput = () => {
        const postInputEle = document.querySelector('#' + view.domString.postinput); // select <input> element
        postInputEle.addEventListener('keyup', (event) => { // create an event on the <input> element
            
            if (event.key === 'Enter') {
                state.postinput = event.target.value;
                
                const newpost = new model.Post(1, state.postinput, "Some Body");

                model.addPost(newpost).then(data => { // data -> new post as object , {userId: 1, title: "good", aaa: "bbb" ...}
                    // console.log(data); // pirnts the new single post (object) in the list
                    
                    state.postlist = [data, state.postlist.results]; // add new list (data) to the array of all the stroed objects
                });
                state.postinput = ''; // reset the input value
            }
        });
    }

    const addListenerOnRemove = () => {
        const postElement = document.querySelector('#' + view.domString.postlist); // postElement -> <ul></ul> to select for event
        postElement.addEventListener('click', (event) => {      // due to the bubbling, we select ul instead of li(??) is it correct?
            state.postlist = state.postlist.filter(post => +post.id !== +event.target.id); //  removes the element from the array of objects
            model.deletePost(+event.target.id); // delete off the backend data
        });
    }

    const init = (artist, limit) => {
        model.getAllPosts(artist, limit).then(data => {
            state.postlist = data;   // initilize the array of all objects from the data
            addListenerOnRemove();
            addListenerOnInput();
        });
    }
    return {
        init
    }
})(View, Model);


AppController.init('john jackson', 50);
AppController.init('john jackson', 10);
AppController.init();


// I couldn't get inputs to work