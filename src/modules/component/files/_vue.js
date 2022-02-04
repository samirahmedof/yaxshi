const vueText = (name) => {
  let result = `<style src="./${name}.component.scss" lang="scss"> </style>

<template>
  <div class="${name}">
        
  </div>
</template>

<script src="./${name}.component.js"></script>`;
  return result;
};

module.exports = {
  vueText,
};
