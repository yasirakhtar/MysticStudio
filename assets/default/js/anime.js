const dataDiv = document.getElementById('animeSection');

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        let data = JSON.parse(xhttp.responseText);
        let hasdata = window.location.search.slice(2);
        let data_filter = data.filter(element => element.hastag == hasdata);

        let defaultSsImg = '/assets/default/img/screenshot.jpg';

        dataDiv.innerHTML = `${data_filter.map((curElem) => {
            document.title = `${curElem.title}`;
            let metaTitle, metaDescription, metaUrl, metaImage, metaTags = [];

            if (curElem.isAnime) {
                metaTitle = `${curElem.name} Hindi Episodes Download - Mystic Watch`;
                metaDescription = `Download ${curElem.name} Hindi Episodes.`;
                metaUrl = `https://www.mxfly.in/anime/?=${curElem.hastag}`;
                metaImage = curElem.poster || '../assets/default/img/poster.jpg';

                metaTags = [
                    `Anime ${curElem.name}`,
                    `Download ${curElem.name} Hindi`,
                    `Season ${curElem.season}`,
                    `Episodes ${curElem.episodes.length}`
                ];
            } else {
                metaTitle = `${curElem.name} Anime Download - Mystic Watch`;
                metaDescription = `Download ${curElem.name} Anime in various qualities.`;
                metaUrl = `https://www.mxfly.in/anime/?=${curElem.hastag}.html`;
                metaImage = curElem.poster || '../assets/default/img/poster.jpg';

                metaTags = [
                    `${curElem.name} Anime`,
                    `Download ${curElem.name}`,
                    `${curElem.name} HD Download`
                ];
            }

            // Update meta tags dynamically
            document.querySelector('meta[name="description"]').setAttribute("content", metaDescription);
            document.querySelector('link[rel="canonical"]').setAttribute("href", metaUrl);
            document.querySelector('meta[property="og:title"]').setAttribute("content", metaTitle);
            document.querySelector('meta[property="og:description"]').setAttribute("content", metaDescription);
            document.querySelector('meta[property="og:url"]').setAttribute("content", metaUrl);
            document.querySelector('meta[property="og:image"]').setAttribute("content", metaImage);
            document.querySelector('meta[property="og:image:alt"]').setAttribute("content", metaTitle);
            document.querySelector('meta[name="twitter:title"]').setAttribute("content", metaTitle);
            document.querySelector('meta[name="twitter:description"]').setAttribute("content", metaDescription);
            document.querySelector('meta[name="twitter:image"]').setAttribute("content", metaImage);
            return (
                `<div class="anime-left">
                <div class="anime-left-content">
                    <h2 id="animeTitle">${curElem.title}</h2>
                    <p id="animeDescription">✅<b> ${curElem.name}</b> Download This Anime In Multi Audio [Hindi-Tamil-Telugu-English] With Multi Quality 480P | 720P | 1080P BluRay WEB-DL Get Free Anime on <b><a href="/" class="web-link"> Mystic Watch</a></b>.</p>
                    <div class="anime-info-box">
                        <h3>Anime Info:</h3>
                        <p><b>Anime Name -</b> <span id="seriesName">${curElem.name}</span></p>
                        <p><b>Season -</b> <span id="season">${curElem.season}</span></p>
                        <p><b>Total Episodes -</b> <span id="imdbRating">${curElem.episodes.length}</span></p>
                        <p><b>Released Year -</b> <span id="releaseYear">${curElem.date}</span></p>
                        <p><b>Subtitle -</b> <span id="subtitle">YES / English</span></p>
                        <p><b>Language -</b> <span id="language">${curElem.language}</span></p>
                        <p><b>Quality -</b> <span id="quality">${curElem.quality}</span></p>
                        <p><b>Size -</b> <span id="Animeize">${curElem.size}</span></p>
                        <p><b>IMDb Rating -</b> <span id="imdbRating">${curElem.rating}</span></p>
                    </div>
                    <div class="screenshot-box-main">
                        <h3>Screenshots: (Must See Before Downloading)…</h3>
                        <div class="screenshot-box">
                            <div class="ss-boxes"><img src="${curElem.ss || defaultSsImg}" alt="${curElem.name} screenshot - 1" id="ss1"></div>
                            <div class="ss-boxes"><img src="${curElem.ss2 || defaultSsImg}" alt="${curElem.name} screenshot - 2" id="ss2"></div>
                            <div class="ss-boxes"><img src="${curElem.ss3 || defaultSsImg}" alt="${curElem.name} screenshot - 3" id="ss3"></div>
                            <div class="ss-boxes"><img src="${curElem.ss4 || defaultSsImg}" alt="${curElem.name} screenshot - 4" id="ss4"></div>
                        </div>
                    </div>
                    ${curElem.isAnime ? `
                    <div class="download-links-box-main">
                        <div class="episode-links">
                            <h3>|| Download Links ||</h3>
                            ${curElem.episodes.map((episode, index) => 
                                `<div class="dl-box">
                                    <div class="dl-text-box">
                                        <p>Episode ${index + 1} - </p>
                                    </div>
                                    <div class="dl-btn-box">
                                        <a href="${episode}" target="_blank"><i class="fa fa-download"></i>Download</a>
                                    </div>
                                </div>`
                            ).join('')}
                        </div>
                        <div class="dl-box">
                                <div class="dl-text-box how-to">
                                    <p>How To Download - </p>
                                </div>
                                <div class="dl-btn-box how-to-btn-box">
                                    <a href="/blog/how-to-download" target="_blank" class="how-to-link" id="howToLink">Click Here</a>
                                </div>
                            </div>
                            <div class="dl-box">
                                <div class="dl-text-box how-to">
                                    <p>Join Our Telegram Channel - </p>
                                </div>
                                <div class="dl-btn-box how-to-btn-box">
                                    <a href="https://t.me/MxFly" target="_blank" class="telegram-link" id="telegramLink">Click Here</a>
                                </div>
                            </div>
                            </div>` : `
                        <div class="download-links-box-main">
                            <h3>|| Download Links ||</h3>
                            <div class="download-link-box">
                                <div class="dl-box">
                                    <div class="dl-text-box">
                                        <p>Download In 480p - </p>
                                    </div>
                                    <div class="dl-btn-box">
                                        <a href="${curElem.down480p}" target="_blank" id="link480"><i class="fa fa-download"></i>Download</a>
                                    </div>
                                </div>
                                <div class="dl-box">
                                    <div class="dl-text-box">
                                        <p>Download In 720p - </p>
                                    </div>
                                    <div class="dl-btn-box">
                                        <a href="${curElem.down720p}" target="_blank" id="link720"><i class="fa fa-download"></i>Download</a>
                                    </div>
                                </div>
                                <div class="dl-box">
                                    <div class="dl-text-box">
                                        <p>Download In 1080p - </p>
                                    </div>
                                    <div class="dl-btn-box">
                                        <a href="${curElem.down1080p}" target="_blank" id="link1080"><i class="fa fa-download"></i>Download</a>
                                    </div>
                                </div>
                                <div class="dl-box">
                                <div class="dl-text-box how-to">
                                    <p>How To Download - </p>
                                </div>
                                <div class="dl-btn-box how-to-btn-box">
                                    <a href="/blog/how-to-download" target="_blank" class="how-to-link" id="howToLink">Click Here</a>
                                </div>
                            </div>
                            <div class="dl-box">
                                <div class="dl-text-box how-to">
                                    <p>Join Our Telegram Channel - </p>
                                </div>
                                <div class="dl-btn-box how-to-btn-box">
                                    <a href="https://t.me/MxFly" target="_blank" class="telegram-link" id="telegramLink">Click Here</a>
                                </div>
                            </div>
                            </div>
                        </div>`
                    }
                </div>
            </div>
            <div class="anime-right">
                <div class="anime-right-content">
                    <div class="anime-poster">
                        <img src="${curElem.poster}" onerror="src='/assets/default/img/poster.jpg'" alt="${curElem.name}" id="animePoster">
                    </div>
                </div>
            </div>`
            );
        }).join("")}`;
        checkadult();

    } else {
        dataDiv.innerHTML = `<p>Loading...</p>`;
    }
}
xhttp.open("GET", "/json/allAnime.json", true);
xhttp.send();

function runrechake() {
    let hasdata = window.location.search.slice(2);
    if (hasdata === "") {
        window.location.href = "/";
    } else {
        console.log("Anime Download");
    }
}
// runrechake()

function checkadult(){
    var adulttitle = document.title;

    var adtext1 = adulttitle[0];
    var adtext2 = adulttitle[1];
    var adtext3 = adulttitle[2];
    var adtext4 = adulttitle[3];
    var adtext5 = adulttitle[4];

    var mainal = adtext1+adtext2+adtext3+adtext4+adtext5

    // alert(mainal);

    if (mainal == "[18+]"){

        document.body.style.overflow = 'hidden';

        const adultMainBox = document.createElement('div');
        adultMainBox.id = 'adultMain';
        const adultConfirm = document.createElement('div');
        adultConfirm.id = 'adult';

        const adultMessageText = document.createElement('p');
        adultMessageText.innerText = 'Are You Sure You Are 18+ ?';

        const adultBtnBox = document.createElement('div');
        adultBtnBox.id = 'adultBtnBox';

        const adultBtnTrue = document.createElement('button');
        adultBtnTrue.id = "adultBtnTrue";
        adultBtnTrue.innerText = "Yes";

        const adultBtnFalse = document.createElement('button');
        adultBtnFalse.id = "adultBtnFalse";
        adultBtnFalse.innerText = "No";

        adultBtnBox.appendChild(adultBtnTrue);
        adultBtnBox.appendChild(adultBtnFalse);

        adultConfirm.appendChild(adultMessageText);
        adultConfirm.appendChild(adultBtnBox);
        adultMainBox.appendChild(adultConfirm);

        document.body.appendChild(adultMainBox);

        document.getElementById('adultBtnTrue').addEventListener('click', function() {
            adultMainBox.style.display = 'none'; 
            document.body.style.overflow = 'auto';
        });

        document.getElementById('adultBtnFalse').addEventListener('click', function() {
            alert("You Are Not Allowed. This Anime Contains 18+ Stuffs.. ");
            window.location.href = "/"; 
            // document.body.style.overflow = 'auto';
        });
    }
    else{
}

}


