import { generatePhoto } from './generate-photo';

const getPhotos = () => {
  const photos = Array.from({ length: 25 }, generatePhoto);
  const pictures = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  photos.forEach((photo) => {
    const photoElement = pictureTemplate.cloneNode(true);

    photoElement.querySelector('.picture__img').src = photo.url;
    photoElement.querySelector('.picture__img').alt = photo.description;
    photoElement.querySelector('.picture__likes').textContent = photo.likes;
    photoElement.querySelector('.picture__comments').textContent = photo.comments.length;

    pictures.append(photoElement);
  });

};

export { getPhotos };
