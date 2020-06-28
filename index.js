var main = document.querySelector(".main");
var previews = document.querySelectorAll(".container img");
var originalImage = document.querySelector(".fullImage");
var originalTitle = document.querySelector(".fullImageTitle");

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    main.classList.add("open");
    originalImage.classList.add("open");

    // dynamic text and image
    var altText = preview.alt;
    originalTitle.textContent = `${altText}`;


    var originalSrc = preview.getAttribute("data-original");
    // change image dynamically
    originalImage.src = `./Images/full/${originalSrc}`;

  });
});

main.addEventListener("click", (e) => {
  if (e.target.classList.contains("main")) {
    main.classList.remove("open");
    originalImage.classList.remove("open");
  }
});
