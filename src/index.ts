import dbimages from "./db.json";

let dbimg = JSON.stringify(dbimages);

const parsedImages = JSON.parse(dbimg);

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getRandomAvtar = () => {
  let img = parsedImages[getRandomInt(0, 1000)];
  return img.url;
};
