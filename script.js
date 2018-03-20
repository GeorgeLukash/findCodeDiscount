let arr1 = [1, 2, 34, 45, 56, 89];
let arr2 = [1, 3, 34, 45, 56, 89];
let arr3 = [1, 4, 34, 45, 56, 89];
let arr4 = [1, 4, 34, 45, 56, 89];

let i_am_set_from_array = new Set();
let combine_array = [...arr1, ...arr2, ...arr3, ...arr4];

combine_array.forEach((item) => {
    i_am_set_from_array.add(item);
});

let i_am_array_from_set = [...i_am_set_from_array];

document.write('<h1>Few arrays</h1>' + combine_array);
console.log('i am array', combine_array);

document.write('<h1>SET from arrays above</h1>' + Array.from(i_am_set_from_array));
console.log('i am set', i_am_set_from_array);

document.write('<h1>Array from SET above</h1>' + i_am_array_from_set);
console.log('i am array from set', i_am_array_from_set);
