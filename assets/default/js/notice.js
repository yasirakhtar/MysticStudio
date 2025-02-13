let isTelegramBoxShown = false;

function joinTg() {
    if (isTelegramBoxShown) return;

    const notificationDiv = document.createElement('div');
    notificationDiv.id = 'notification';
    notificationDiv.style.display = 'none';
    
    const messageText = document.createElement('p');
    messageText.innerText = 'Please Join This Channel For Updates...';

    const messageLink = document.createElement('a');
    let channelLink = messageLink.href = "https://t.me/MYSTIC_WATCH_OFFICIAL";
    messageLink.target = '_blank';
    messageLink.href = channelLink;

    const notificationImage = document.createElement('img');
    notificationImage.src = '/assets/advertisement/img/channel-logo.jpg';

    const closeButton = document.createElement('button');
    closeButton.classList.add('close-btn');
    closeButton.innerHTML = '<i class="fas fa-times"></i>';

    messageLink.appendChild(notificationImage);
    messageLink.appendChild(messageText);

    notificationDiv.appendChild(messageLink);
    notificationDiv.appendChild(closeButton);

    document.body.appendChild(notificationDiv);

    notificationDiv.style.display = 'block';

    closeButton.addEventListener('click', () => {
        notificationDiv.style.display = 'none';
    });

    setTimeout(() => {
        notificationDiv.style.display = 'none';
    }, 15000);

    isTelegramBoxShown = true;
}

// Function to create and display the showcase box

// showCase Links
let topBtnLink = "/blog";
let topBtnIcon = `<i class="fa-solid fa-blog"></i>`;
let topBtnText = "blogs"
// let adsImgAlt = "Advertisement";


let adsLink = "/blog/solo-leveling-season-2";
let adsImgSrc = "/blog/assets/poster/solo-leveling-season-2.jpg";
let adsTitle = "Solo Leveling Season 2: Everything You Need to Know...";

// -------------------------------------------

function createShowcaseBox() {
    const showcaseBox = document.createElement('div');
    showcaseBox.className = 'showcase-box-main';
    showcaseBox.id = 'showCaseBox';
    
    showcaseBox.innerHTML = `
        <div class="show-box-top">
            <p><a href="${topBtnLink}"> ${topBtnIcon} ${topBtnText}</a></p>
            <i class="fa-solid fa-xmark" id="showCaseCloseBtn"></i>
        </div>
        <a href="${adsLink}" target="_blank" title="${adsTitle}" class="show-box-content">
            <img src="${adsImgSrc}" alt="${adsTitle}">
            <p>${adsTitle}</p>
        </a>
    `;

    document.body.appendChild(showcaseBox);

    const showcaseMobileBtn = document.createElement('div');
    showcaseMobileBtn.className = 'showcase-mobile';
    showcaseMobileBtn.id = 'showCaseMobileBtn';
    showcaseMobileBtn.innerHTML = topBtnIcon;

    document.body.appendChild(showcaseMobileBtn);

    document.getElementById('showCaseCloseBtn').addEventListener('click', function() {
        showcaseBox.style.display = 'none'; 
        joinTg(); 
    });

    showcaseMobileBtn.addEventListener('click', function() {
        showcaseBox.style.display = 'block'; 
    });

    if (window.innerWidth <= 768) {
        joinTg(); 
    }
}

createShowcaseBox();



// --------------------------------------

var notificationBox = document.getElementById("notificationBox");
var openNotificationBoxBtn = document.getElementById("openNotificationBoxBtn");

openNotificationBoxBtn.addEventListener('click', () => {
    if(notificationBox.style.display == "block"){
        notificationBox.style.display = "none";
    }
    else{
        notificationBox.style.display = "block";
    }
});