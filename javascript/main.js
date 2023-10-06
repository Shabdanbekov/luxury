let btn = document.querySelector(".b24-form-btn");
let inputName = document.querySelector("#inputName");
let inputPhone = document.querySelector("#inputPhone");

let typingEffect = new Typed(".multiText", {
  strings: ["будущее", "больше", "качественно"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  startDelay: 1000,
  backDelay: 1500,
});

let map;

DG.then(function () {
  map = DG.map("map", {
    center: [42.83, 74.6],
    zoom: 14,
  });

  DG.marker([42.83, 74.6]).addTo(map);
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
});
