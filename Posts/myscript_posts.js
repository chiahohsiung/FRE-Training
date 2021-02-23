const api = (() => {
    const getallposts = () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
        response.json()
      );
  
    const deletePost = (id) =>
      fetch("https://jsonplaceholder.typicode.com/posts/" + id.toString(), {
        method: "DELETE",
      });
  
    const createPost = (post) =>
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: post.title,
          body: post.body,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((response) => response.json());
  
    return {
      createPost,
      getallposts,
      deletePost,
    };
  })();
  const View = (() => {
    const render = (model) => {
      let domEle = document.querySelector(".content-post");
      allposts = "";
      console.log(model);
      model.forEach((element) => {
        allposts += `
                <div class="card">
                    <h1 class="title" id="${element.id}">${element.title}</h1>
                    <p class="body" id="body-${element.id}">${element.body}</p>
                    <button id="${element.id}">x</button>
                </div>
                `;
      });
      domEle.innerHTML = allposts;
    };
  
    return {
      render,
    };
  })();
  
  const Model = ((api, view) => {
    class Posts {
      allposts = [];
  
      get posts() {
        return this.allposts;
      }
      set posts(newpost) {
        this.allposts = newpost;
        view.render(this.posts);
      }
    }
  
    const allposts = api.getallposts;
    const deletepost = api.deletePost;
    const createpost = api.createPost;
    return {
      createpost,
      allposts,
      deletepost,
      Posts,
    };
  })(api, View);
  
  const AppController = ((view, model) => {
    const state = new model.Posts();
  
    const deletePost = () => {
      let domELe = document.querySelector(".content-post");
      domELe.addEventListener("click", (event) => {
        state.posts = state.posts.filter((ele) => +ele.id !== +event.target.id);
        model.deletepost(event.target.id);
      });
    };
  
    const addPost = () => {
      let submit = document.querySelector(".content-buttonbox");
      submit.addEventListener("click", (event) => {
        let title = document.querySelector("#title-input").value;
        let post = document.querySelector("#post-input").value;
        let id = (Math.floor(Math.random() * 100) + 200).toString();
        let newpost = {
          title: title,
          body: post,
          id: id,
        };
        model.createpost(newpost).then((data) => {
          state.posts = [newpost, ...state.posts];
        });
      });
    };
  
    const init = () => {
      model.allposts().then((data) => {
        state.posts = data;
        deletePost();
        addPost();
      });
    };
  
    return {
      init,
    };
  })(View, Model);
  
  AppController.init();
  