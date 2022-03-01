const getComponents = require.context("/", false, /[\w-].vue$/);
const result = getComponents.keys().reduce((obj, name) => {
  const comp = getComponents(name);
  name = name.replace("./", "").split(".")[0];
  obj[name] = comp.default;
  return obj;
}, {});

export default result;
