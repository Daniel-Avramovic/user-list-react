function hideAdress(adress) {
  let hide =
    adress.slice(0, 5) +
    "..." +
    adress.substring(adress.lastIndexOf("@"), adress.length);
  return hide;
}
export default hideAdress;
