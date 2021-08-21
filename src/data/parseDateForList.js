export const parseDateList = (date) => {
    let date1 = new Date(date);
    return `${date1.getDay()}.${date1.getMonth()+1}.${date1.getFullYear()}`
}