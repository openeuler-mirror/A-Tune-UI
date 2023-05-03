import CryptoJS from "crypto-js";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function base64Encode(pwd) {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(pwd));
}

function getAvgFromArray(array) {
  var total = 0;
  var count = 0;
  for (var el in array) {
    total += parseFloat(array[el]);
    count++;
  }
  total /= count;
  return total;
}

export {
  getRandomInt,
  base64Encode,
  getAvgFromArray
}