const dataDiv = document.getElementById('allAnime');

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        let data = JSON.parse(xhttp.responseText);

        dataDiv.innerHTML = `${data.map((curElem) => {

            return (
                `<div class="anime">
                            <a href="${curElem.link}" title="${curElem.title}" class="anime-link">
                                <div class="anime-link-box">
                                    <div class="anime-img-box">
                                        <div class="ep-added" id="epAdded"> Episode&nbsp;<b>${curElem.episodes.length}</b>&nbsp;Added !</div>
                                        <img src="${curElem.poster}" onerror="src='/assets/default/img/poster.jpg'" alt="${curElem.searchtag}" loading="lazy">
                                    </div>
                                    <div class="anime-title-box">
                                        <p>${curElem.title}</p>
                                    </div>
                                </div>
                            </a>
                        </div>`
            )
        }).join("")}`
        searchMovie();
    } else {
        dataDiv.innerHTML = `
                <div class="anime loading">
                        <div class="anime-link-box">
                            <div class="anime-img-box">
                            </div>
                            <div class="anime-title-box">
                            </div>
                        </div>
                </div>
                <div class="anime loading">
                        <div class="anime-link-box">
                            <div class="anime-img-box">
                            </div>
                            <div class="anime-title-box">
                            </div>
                        </div>
                </div>
                <div class="anime loading">
                        <div class="anime-link-box">
                            <div class="anime-img-box">
                            </div>
                            <div class="anime-title-box">
                            </div>
                        </div>
                </div>
                <div class="anime loading">
                        <div class="anime-link-box">
                            <div class="anime-img-box">
                            </div>
                            <div class="anime-title-box">
                            </div>
                        </div>
                </div>
                <div class="anime loading">
                        <div class="anime-link-box">
                            <div class="anime-img-box">
                            </div>
                            <div class="anime-title-box">
                            </div>
                        </div>
                </div>
                <div class="anime loading">
                        <div class="anime-link-box">
                            <div class="anime-img-box">
                            </div>
                            <div class="anime-title-box">
                            </div>
                        </div>
                </div>
                <div class="anime loading">
                        <div class="anime-link-box">
                            <div class="anime-img-box">
                            </div>
                            <div class="anime-title-box">
                            </div>
                        </div>
                </div>
                <div class="anime loading">
                        <div class="anime-link-box">
                            <div class="anime-img-box">
                            </div>
                            <div class="anime-title-box">
                            </div>
                        </div>
                </div>
                <div class="anime loading">
                        <div class="anime-link-box">
                            <div class="anime-img-box">
                            </div>
                            <div class="anime-title-box">
                            </div>
                        </div>
                </div>
                <div class="anime loading">
                        <div class="anime-link-box">
                            <div class="anime-img-box">
                            </div>
                            <div class="anime-title-box">
                            </div>
                        </div>
                </div>`
    }
}
xhttp.open("GET", "/json/allAnime.json", true);
xhttp.send();