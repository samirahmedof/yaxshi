const vueText = (name) => {
  let result = `<style src="./${name}.cmp.scss" lang="scss"> </style>

<template>
  <div class="${name}">
        
  </div>
</template>

<script src="./${name}.cmp.js"></script>`;
  return result;
};

module.exports = {
  vueText,
};
