let array1 = [];
let result = [];

let arr1 = ['text', 'one', 'presentation', 'beard', 'plugin'];
let arr2 = ['one', 'two', 'presentation', 'presentation', 'presentation', 'three', 'four', 'five'];

let first_div = document.getElementById('first');
let second_div = document.getElementById('second');
let third_div = document.getElementById('third');

let btn = document.getElementById('add_btn');
let btn_show = document.getElementById('show_all');
let combine_btn = document.getElementById('combine_btn');
let filter_btn = document.getElementById('filter_btn');
let remove_btn = document.getElementById('remove_btn');
let prefix_add_btn = document.getElementById('prefix_add_btn');

btn.addEventListener('click', () => {
    let inp = document.getElementsByTagName('input')[0];
    array1.push(inp.value);
    inp.value = '';
});

btn_show.addEventListener('click', () => {
    addNewChildren(array1, first_div, 'Array');
});

combine_btn.addEventListener('click', () => {
    addNewChildren(arr1, second_div, 'First array ');
    addNewChildren(arr2, second_div, 'Second array ');
    result = [...arr1, ...arr2].sort();
    addNewChildren(result, second_div, 'Combined array(Sorted) ');
});

remove_btn.addEventListener('click', () => {
    if (result.length != 0) {
        let unique_array = result.filter((elem, index, self) => {
            return index == self.indexOf(elem);
        });
        addNewChildren(unique_array, second_div, 'Array without dublicates ');
    } else {
        alert('First click on button Combine');
    }
});

prefix_add_btn.addEventListener('click', () => {
    if (result.length != 0) {
        let array_with_prefix = result.map((item) => {
            return 'CODE' + item;
        });
        addNewChildren(array_with_prefix, second_div, 'Array with prefix(CODE) ');
    } else {
        alert('First click on button Combine');
    }
});

filter_btn.addEventListener('click', () => {
    if (result.length != 0) {
        let filter_array = result.filter((elem) => {
            return elem.length >= 5;
        });
        addNewChildren(filter_array, third_div, 'Result array(elements with 5+ chars) ');
    } else {
        alert('First click on button Combine');
    }

});

let addNewChildren = (array, parrent, title) => {
    let h3 = document.createElement('H3');
    h3.textContent = title;
    let ul = document.createElement('UL');
    if (array.length != 0) {
        for (let i = 0; i < array.length; i++) {
            let li = document.createElement('LI');
            li.textContent = array[i];
            ul.appendChild(li);
        }
        parrent.appendChild(h3);
        parrent.appendChild(ul);
    } else {
        alert('ERROR: your array is empty');
    }
};