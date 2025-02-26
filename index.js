document.addEventListener("DOMContentLoaded", function () {
    const allPhotos = document.querySelectorAll(".photo-gallery .pic");
    const checkboxes = document.querySelectorAll("input[name='Photos']");
    const lightbox = document.createElement("div");
    const lightboxImg = document.createElement("img");
    const closeButton = document.createElement("span");

    lightbox.classList.add("lightbox");
    closeButton.classList.add("close-button");
    closeButton.innerHTML = "&times;";

    lightbox.appendChild(lightboxImg);
    lightbox.appendChild(closeButton);
    document.body.appendChild(lightbox);

    function filterImages(category) {
        allPhotos.forEach((pic) => {
            if (category === "check1") {
                pic.style.display = "block"; // Show all images
            } else {
                const categoryClass = category === "check2" ? "family" :
                                      category === "check3" ? "friends" :
                                      category === "check4" ? "place" : "";
                pic.style.display = pic.classList.contains(categoryClass) ? "block" : "none";
            }
        });
    }

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
            filterImages(this.id);
        });
    });

    allPhotos.forEach((pic) => {
        pic.addEventListener("click", function () {
            lightboxImg.src = this.querySelector("img").src;
            lightbox.style.display = "flex";
        });
    });

    closeButton.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function (e) {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    });

    // Initially show all images
    filterImages("check1");
});
