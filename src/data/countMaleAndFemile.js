export const count = (users) => {
    let female = 0;
  users.forEach((user) => {
    if (user.gender === "female") {
      female++;
    }
  });
  let male = users.length - female;

  return `Male: ${male} Femile: ${female}`
}