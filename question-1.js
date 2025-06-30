/**
 * 1. Custom Debounce Function: Write a function that mimics the behavior of the debounce method from lodash. Your function should delay the execution of a provided function until after a given number of milliseconds have elapsed since the last time the delayed function was invoked. 
 */

function debounce (func, delayTime) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delayTime);
  };
}

// example
const testExample = debounce(() => {
  console.log('test delay')
}, 5000);

testExample();