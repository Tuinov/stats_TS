"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    let dateArr = dateString.split('/').map(num => parseInt(num));
    return new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);
};
exports.dateStringToDate = dateStringToDate;
