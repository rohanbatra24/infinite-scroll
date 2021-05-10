const imageContainer = document.getElementById("image-container");

const loader = document.getElementById("loader");

let photosArray = [];

// check if all images have loaded
const imageLoaded = () => {
  console.log("image loaded");
};

// helper function to set attributes on DOM elements
const setAttribute = (element, attributes) => {
  for (const key in attributes) {
    element[key] = attributes[key];
  }
};

// create image elements and add to DOM
const displayImages = () => {
  photosArray.forEach((photo) => {
    // create <a> to link to unsplash
    const link = document.createElement("a");

    setAttribute(link, { href: photo.links.html, target: "_blank" });

    // create image element
    const image = document.createElement("img");

    setAttribute(image, {
      src: photo.urls.raw,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    image.addEventListener("load", imageLoaded);

    // put <img> inside <a>, then put both inside imageContainer element
    link.appendChild(image);
    imageContainer.appendChild(link);
  });
};

// Get new images from Unsplash
const getNewImages = async () => {
  const response = await fetch(
    "https://api.unsplash.com/photos/random/?client_id=XjeEk0WpC6b4l0Y91Z4fR4Sw7QN2aiRAraitJVOZqOA&count=10"
  );

  photosArray = await response.json();

  displayImages();
};

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 1000
  ) {
    getNewImages();
    console.log("load more");
  }
});

//on load
getNewImages();
