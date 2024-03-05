import mockData from './mock-data.js';
import {
  getRandomInt,
  getRandomArrayElement,
  createRandomUniсIntGenerator
} from './utils.js';

const CommentId = { MIN: 1, MAX: 2000 };
const AvatarId = { MIN: 1, MAX: 6 };
const Likes = { MIN: 15, MAX: 200 };

const PHOTO_DESCRIPTIONS = mockData.getPhotoDescriptions();
const PHOTO_COMMENTS = mockData.getPhotoComments();
const USER_NAMES = mockData.getUserNames();

const generateCommentId = createRandomUniсIntGenerator(CommentId.MIN, CommentId.MAX);

const generatePhotoComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInt(AvatarId.MIN, AvatarId.MAX)}.svg`,
  message: getRandomArrayElement(PHOTO_COMMENTS),
  name: getRandomArrayElement(USER_NAMES),
});

const generatePhotoDescriptionId = createRandomUniсIntGenerator(1, PHOTO_DESCRIPTIONS.length - 1);

const generatePhoto = (_, index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  descriptionId: PHOTO_DESCRIPTIONS[generatePhotoDescriptionId()],
  likes: getRandomInt(Likes.MIN, Likes.MAX),
  comments: Array.from({ length: getRandomInt(0, 30) }, generatePhotoComment),
});

Array.from({ length: 25 }, generatePhoto);
