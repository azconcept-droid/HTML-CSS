/**
 * @param {string} age
 */
function getNextAge(age) {
  if (age === "") {
    return 0;
  }
  return 1 + Number.parseInt(age, 10)
}
