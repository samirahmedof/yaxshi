const indexText = () => {
  let result = `import state from './state';
import actions from './actions';
import mutations from './mutations';

export default {
    namespaced: true,
    state,
    actions,
    mutations,
};`;

  return result;
};

module.exports = {
  indexText,
};
