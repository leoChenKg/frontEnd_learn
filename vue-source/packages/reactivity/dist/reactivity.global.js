var VueReactivity = (() => {
  // packages/shared/src/index.ts
  var isObject = (value) => {
    return !!(Object.prototype.toString.call(value) === "[object Object]");
  };

  // packages/reactivity/src/index.ts
  console.log(isObject({}));
})();
//# sourceMappingURL=reactivity.global.js.map
