const popularDiv = document.getElementById('popularAnime');

let popular = new XMLHttpRequest();
popular.onreadystatechange = () => {
    if (popular.readyState == 4 && popular.status == 200) {
        let data = JSON.parse(popular.responseText);

        popularDiv.innerHTML = `${data.slice(0, 5).map((curElem) => { // 0, 5

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
        popularDiv.innerHTML = `
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
popular.open("GET", "/json/popularAnime.json", true);
popular.send();