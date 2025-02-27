let input = document.getElementById("searchInput");
let autoSuggetionBox = document.querySelector(".auto-suggetion-box"); // Yeh box ka reference
let suggestionList = document.querySelector(".list");

// JSON data load karega
fetch("/json/allAnime.json")
  .then((response) => response.json())
  .then((data) => {
    let animeList = data; // JSON array store kiya

    input.addEventListener("keyup", function () {
      let query = input.value.toLowerCase().trim();
      removeElements();

      if (query === "") {
        autoSuggetionBox.style.display = "none"; // Agar empty hai toh box hide
        return;
      }

      let filteredResults = animeList.filter((anime) =>
        anime.title.toLowerCase().includes(query) // **StartsWith ke jagah includes use kiya**
      );

      if (filteredResults.length > 0) {
        autoSuggetionBox.style.display = "block"; // Matching results ho tab box show ho
      } else {
        autoSuggetionBox.style.display = "none"; // No result toh hide
      }

      filteredResults.forEach((anime) => {
        let listItem = document.createElement("li");
        listItem.classList.add("list-items");
        listItem.style.cursor = "pointer";

        // **Bold sirf matching part**
        let title = anime.title;
        let matchIndex = title.toLowerCase().indexOf(query);
        let beforeMatch = title.substring(0, matchIndex);
        let matchText = `<b>${title.substring(matchIndex, matchIndex + query.length)}</b>`;
        let afterMatch = title.substring(matchIndex + query.length);
        let fullTitle = beforeMatch + matchText + afterMatch;

        // **Link ke saath result dikhana**
        listItem.innerHTML = `<a href="${anime.link}" target="_blank">${fullTitle}</a>`;

        listItem.addEventListener("click", () => {
          input.value = anime.title; // Select karne par input fill ho jaye
          removeElements();
          autoSuggetionBox.style.display = "none"; // Select hone ke baad box hide ho jaye
        });

        suggestionList.appendChild(listItem);
      });
    });

    input.addEventListener("blur", function () {
      setTimeout(() => {
        autoSuggetionBox.style.display = "none"; // Jab user bahar click kare toh hide ho
      }, 200);
    });

    input.addEventListener("focus", function () {
      if (suggestionList.children.length > 0) {
        autoSuggetionBox.style.display = "block"; // Agar pehle se results hain toh show ho jaye
      }
    });
  });

function removeElements() {
  document.querySelectorAll(".list-items").forEach((item) => item.remove());
}
