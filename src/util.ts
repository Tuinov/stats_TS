export const dateStringToDate = (dateString: string) => {
    let dateArr = dateString.split('/').map(num => parseInt(num));
    return new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);

} 