const kebabToCamel = (text) => {
  return text.replace(/-./g, x=>x.toUpperCase()[1]);
};

module.exports = {
  kebabToCamel,
};
