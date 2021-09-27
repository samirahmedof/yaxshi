const kebabToPascal = (text) => {
  return text.replace(/(^\w|-\w)/g, clearAndUpper);
};

function clearAndUpper(text) {
  return text.replace(/-/, "").toUpperCase();
}

module.exports = {
  kebabToPascal,
};
