const galleryImages = [
  "IMG_4485.jpeg",
  "IMG_4527.jpeg",
  "IMG_4560.jpeg",
  "IMG_4561.jpeg",
  "IMG_4528.jpeg",
  "IMG_4562.jpeg",
  "IMG_4559.jpeg"
];

const gallery = document.querySelector(".gallery");

galleryImages.forEach(file => {
  const img = document.createElement("img");
  img.src = `photos/${file}`;
  img.alt = file;
  gallery.appendChild(img);
});
