// Get search query from URL
let searchUrl = window.location.search.slice(3);
let searchText = searchUrl.split("+").join(" ").toLowerCase().trim();

if (searchText === "") {
    document.getElementById("title").innerHTML = `All Anime`;
} else {
    document.getElementById("title").innerHTML = `Search Results for ➤ <b>${searchText}</b>`;
}

function searchMovie() {
    let allAnime = document.getElementById("allAnime");
    let x = document.getElementsByClassName("anime");
    let found = false;

    for (let i = 0; i < x.length; i++) {
        let animeText = x[i].innerText.toLowerCase(); // Get full text of anime block
        
        // Check condition: Single word OR full phrase
        let matchFound = searchText.includes(" ") 
            ? animeText.includes(searchText) // Multi-word phrase search
            : searchText.split(" ").some(word => animeText.includes(word) && word.trim() !== ""); // Single word search

        if (matchFound) {
            x[i].style.display = "block";
            found = true;
        } else {
            x[i].style.display = "none";
        }
    }

    if (!found) {
        document.getElementById("notFound").style.display = "block";
    } else {
        document.getElementById("notFound").style.display = "none";
    }
}

searchMovie();
