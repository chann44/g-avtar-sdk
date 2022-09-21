"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomAvtar = void 0;
const db_json_1 = __importDefault(require("./db.json"));
let dbimg = JSON.stringify(db_json_1.default);
const parsedImages = JSON.parse(dbimg);
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const getRandomAvtar = () => {
    let img = parsedImages[getRandomInt(0, 1000)];
    return img.url;
};
exports.getRandomAvtar = getRandomAvtar;
console.log((0, exports.getRandomAvtar)());
//# sourceMappingURL=index.js.map