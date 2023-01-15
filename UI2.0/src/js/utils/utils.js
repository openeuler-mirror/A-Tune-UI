import CryptoJS from "crypto-js";

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export default function base64Encode(pwd) {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(pwd));
}