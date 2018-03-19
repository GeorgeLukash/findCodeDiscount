let ul = document.getElementsByTagName('UL')[0];
let h1 = document.getElementsByTagName('H1')[0];

let result_array = [];

let code_pattern = /'.+'/i;
let price_pattern = /(\d+)\$/;

let code_description = {};
let original = {};

const findBestCodeDiscount = (obj) => {
    let min = 0;
    let code = '';
    for (let key in obj) {
        min = obj[key];
        code = key;
        if (min > obj[key]) {
            min = obj[key];
            code = key;
        };
    }
    return {
        bestCode: code,
        bestCodeDiscount: min
    }
};


for (let i = 0; i < ul.children.length; i++) {
    let child_node_code = ul.children[i].textContent;
    code_description[child_node_code
        .match(code_pattern)[0]
        .replace(/'/g, '')] = child_node_code
            .match(price_pattern)[0]
            .replace(/\$/, '');
}

original.originalPrice = h1.textContent.match(price_pattern)[0].replace(/\$/, '');

result_array.push(code_description);
result_array.push(findBestCodeDiscount(result_array[0]));
result_array.push(original);

console.log(result_array);

