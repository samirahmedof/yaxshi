const jsText = (name) => {

  let result = `export default {
name: "${name}",
};`;
  return result;
};

module.exports = {
  jsText,
};
