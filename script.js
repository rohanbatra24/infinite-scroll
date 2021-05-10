const imageContainer = document.getElementById("image-container");

const loader = document.getElementById("loader");

let photosArray = [];

// create image elements and add to DOM
const displayImages = () => {
  photos.forEach((photo) => {
    const image = document.createElement("img");
    image.src = photo.urls.raw;
    imageContainer.appendChild(image);
  });
};

// Get new images from Unsplash
const getNewImages = async () => {
  const response = await fetch(
    "https://api.unsplash.com/photos/random/?client_id=XjeEk0WpC6b4l0Y91Z4fR4Sw7QN2aiRAraitJVOZqOA&count=10"
  );

  photos = await response.json();

  displayImages();
};

getNewImages();
