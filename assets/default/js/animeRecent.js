const animeRecent = document.getElementById('animeRecent');

let animeRecents = new XMLHttpRequest();
animeRecents.onreadystatechange = () => {
    if (animeRecents.readyState == 4 && animeRecents.status == 200) {
        let data = JSON.parse(animeRecents.responseText);

        // Shuffle the data array
        // data = data.sort(() => 0.5 - Math.random());

        animeRecent.innerHTML = `${data.slice(0, 5).map((curElem) => {

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
        animeRecent.innerHTML = `
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
animeRecents.open("GET", "/json/allAnime.json", true);
animeRecents.send();