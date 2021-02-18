const search = document.getElementById("search-icon");

const showSearch = () => {
  console.log(document.getElementsByClassName("search")[0].style.display)
  let display_val = document.getElementsByClassName("search")[0].style.display == '' || document.getElementsByClassName("search")[0].style.display == 'none' ? 'inline-block': 'none';
  document.getElementsByClassName("search")[0].style.display = display_val;
  document.getElementsByClassName("search")[1].style.display = display_val;
  if (display_val == 'inline-block') {
    document.getElementById("search-icon").style.backgroundColor = 'transparent';
  }
  else {document.getElementById("search-icon").style.backgroundColor = 'rgb(125, 176, 241)'}
}
search.addEventListener("click", showSearch)