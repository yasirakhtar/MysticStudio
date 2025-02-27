var navMenu = document.getElementById("navMenu");

function openMenu() {
    navMenu.style.right = "0";
}

function closeMenu() {
    navMenu.style.right = "-500px";
}

var mobileSearch = document.getElementById("mobileSearch");

function openSearchPopUpBox() {
    if(mobileSearch.style.display == "block"){
        mobileSearch.style.display = "none";
    }
    else{
        mobileSearch.style.display = "block";
        document.getElementById("searchInput").focus();
    }
}

function closeSearchPopUpBox() {
    mobileSearch.style.display = "none";
}

openSearchPopUpBox()

// search Js

let searchUrl = window.location.search.slice(3)
        let searchText = searchUrl.split("+").join(" ")
    
        if (searchText == "") {
            document.getElementById("title").innerHTML = `All Anime`
        } else {
            document.getElementById("title").innerHTML = `Search Results for ➤ <b>${searchText}</b>`
        }
    
        function searchMovie() {
            let input = searchText
            input = input.toLowerCase();
            let allAnime = document.getElementById("allAnime");
            let x = document.getElementsByClassName('anime');
    
            for (i = 0; i < x.length; i++) {
                if (!x[i].innerHTML.toLowerCase().includes(input)) {
                    x[i].style.display = "none";
                    allAnime.style.justifyContent = "left";
                    allAnime.style.gap = "15px";
                }
                else {
                    x[i].style.display = "block";
                    document.getElementById('notFound').style.display = "none";
                }
            }
        }

        searchMovie();

// Open Search Box 

// const mobileSearch = document.getElementsById("mobileSearch");

// function ShowSearchInput(){
//     if(mobileSearch.style.display == "none"){
//         mobileSearch.style.display = "block";
//     }
//     else{
//         mobileSearch.style.display = "none";
//     }
// }
