const recentAnime = document.getElementById('recentAnime');

let recentAnimes = new XMLHttpRequest();
recentAnimes.onreadystatechange = () => {
    if (recentAnimes.readyState == 4 && recentAnimes.status == 200) {
        let data = JSON.parse(recentAnimes.responseText);

        recentAnime.innerHTML = `${data.slice(0, 15).map((curElem) => {

            return (
                `<div class="anime">
                            <a href="${curElem.link}" title="${curElem.title}" class="anime-link">
                                <div class="anime-link-box">
                                    <div class="anime-img-box">
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
    } else {
        recentAnime.innerHTML = `
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
recentAnimes.open("GET", "/json/allAnime.json", true);
recentAnimes.send();