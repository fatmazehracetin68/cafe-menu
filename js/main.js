import { buttonsData, menu } from "./db.js";
import { elements, calculatePrice } from "./helpers.js";

document.addEventListener("DOMContentLoaded", () => {
  renderButtons("all");
  renderMenuItems(menu);
});

elements.buttonsArea.addEventListener("click", searchCategory);

function searchCategory(e) {
  const category = e.target.dataset.category;
  console.log(category);
  const filtredMenu = menu.filter((item) => item.category === category);
  if (category === "all") {
    renderMenuItems(menu);
  } else {
    renderMenuItems(filtredMenu);
  }
  renderButtons(category);
}

function renderButtons(active) {
  elements.buttonsArea.innerHTML = "";
  buttonsData.forEach((btn) => {
    const buttonEle = document.createElement("button");
    buttonEle.className = "btn bg-success-subtle filter-btn";
    buttonEle.textContent = btn.text;
    buttonEle.dataset.category = btn.value;

    if (btn.value === active) {
      buttonEle.classList.remove("bg-success-subtle");
      buttonEle.classList.add("bg-primary-subtle", "text-dark");
    }

    elements.buttonsArea.appendChild(buttonEle);
  });
}

function renderMenuItems(menuItems) {
  let menuHTML = menuItems.map(
    (item) => `
    <a id="card" href="/productDetail.html?id=${item.id}" class="text-decoration-none text-black d-flex flex-column flex-md-row gap-2">
    <img class="rounded shadow" src=" ${item.img} " alt="" />
    <div>
      <div class="d-flex justify-content-between align-items-center id=text">
        <h5>${item.title}</h5>
        <p class="text-success">${item.price}₺</p>
      </div>
      <p class="lead">
      ${item.desc}
      </p>
    </div>
    </a>
    `
  );
  menuHTML = menuHTML.join("");
  elements.menuArea.innerHTML = menuHTML;
}
