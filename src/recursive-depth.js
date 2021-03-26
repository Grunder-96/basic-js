// ### **Рекурсивный вычислитель глубины**
// ![Идти глубже](https://i.imgur.com/k7lADiM.jpg)

// Ваша задача — реализовать класс `DepthCalculator` с методом `calculateDepth`, который принимает массив и возвращает его **глубину**.

// Метод `calculateDepth` должен проходить полученный массив **рекурсивно**. Глубина **плоского** массива — 1. Метод должен корректно работать с массивами, не содержащими элементов или содержащими пустые массивы.

// Например:

// `const depthCalc = new DepthCalculator();`

// `depthCalc.calculateDepth([1, 2, 3, 4, 5])` => `1`

// `depthCalc.calculateDepth([1, 2, 3, [4, 5]])` => `2`

// `depthCalc.calculateDepth([[[]]])` => `3`

// Напишите ваш код в `src/recursive-depth.js`.

const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let i = 1;
    let answer = 0;
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        i = this.calculateDepth(element);
        if (answer < i) answer = i}
    })
    return answer + 1;
  }
};




