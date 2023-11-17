const form = document.querySelector("form");

// Definice polí s informacemi o polích a chybových elementech
const fields = [
  {
    input: document.getElementById("first-name"),
    img: document.querySelector(".error-img"),
    text: document.querySelector(".error-text"),
  },
  {
    input: document.getElementById("last-name"),
    img: document.querySelector(".error-img2"),
    text: document.querySelector(".error-text2"),
  },
  {
    input: document.getElementById("email"),
    img: document.querySelector(".error-img3"),
    text: document.querySelector(".error-text3"),
  },
  {
    input: document.getElementById("password"),
    img: document.querySelector(".error-img4"),
    text: document.querySelector(".error-text4"),
  },
];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Iterace přes pole a zobrazení chybových obrázků a textů pro prázdná pole
  fields.forEach((field) => {
    if (field.input.value === "") {
      field.img.style.display = "block";
      field.text.style.display = "block";
      field.input.style.border = "2px solid #ff7a7a";
      field.input.placeholder = "";
    } else {
      field.img.style.display = "none";
      field.text.style.display = "none";
      field.input.style.border = "1px solid #b9b6d3";
    }
  });
});
