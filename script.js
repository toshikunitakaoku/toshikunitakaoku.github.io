'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// 完成
const customButton = document.getElementById("custom-btn");
const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const navButton = document.getElementsByClassName("nav-button")[0];
const navButton2 = document.getElementsByClassName("nav-button")[1];
const rowHome = document.getElementsByClassName("row-home")[0];
const customElements = document.forms.customElements;
const category = customElements[2].value;


let count = 0;
customButton.addEventListener("click", function () {
  const shortcutName = customElements[0].value;
  const urlLink = customElements[1].value;
  const category = customElements[2].value;

  const divTag = document.createElement("div");
  divTag.classList.add("col-6", "col-md-4", "col-lg-3", category);
  divTag.innerHTML = `<a id = number${count} href="${urlLink}">${shortcutName}</a>`;
  rowHome.appendChild(divTag);
  document.getElementById(`number${count}`).style.backgroundColor = colorObj[category];
  localStorage[`number${count}`] = divTag.innerHTML;
  count++;

  customElements[0].value = "";
  customElements[1].value = "";

  containerShow(tab2, tab1, 0);
})

const colorObj = {
  安全: "darkgreen",
  健康: "darkgoldenrod",
  品質: "darkblue",
  工数: "darkred",
  業務関係: "darkslateblue",
  その他: "darkgray"
}

function containerShow(notshow, show, navButtonNumber) {
  notshow.classList.remove('is-show');
  show.classList.add('is-show');
  document.getElementsByClassName('active')[0].classList.remove('active');
  document.getElementsByClassName('nav-button')[navButtonNumber].classList.add('active');
}

navButton.addEventListener("click", function () {
  containerShow(tab2, tab1, 0);
})

navButton2.addEventListener("click", function () {
  containerShow(tab1, tab2, 1);
})


// トライ中



const Range = customElements[3].value;
const registrant = customElements[4].value;


const row = document.getElementsByClassName("row-home")[0];
const childRows = row.children;
// console.log(childRows);
// console.log(seachElements[0].value);

window.addEventListener("load", () => {
  for (let i = 0; i < localStorage.length; i++) {
    const divTag = document.createElement("div");
    divTag.classList.add("col-6", "col-md-4", "col-lg-3", category);
    divTag.innerHTML = localStorage[`number${i}`];
    rowHome.appendChild(divTag);
  }
})

const array = ["hoge", "home", "http"];
const array2 = "http";

// 検索機能 
seachElements[1].addEventListener("click", function () {
  const seachElements = document.forms.seachElements;
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage[`number${i}`].includes(seachElements[0].value)) {
      console.log("OK");
      // aタグの親要素にis-showをついかして非表示にする
    } else {
      console.log("no");
    }
  }
})
