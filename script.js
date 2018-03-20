const currency_array = ['$1.99', '$222000.00', '$ 1,000,000.99', '555.44 USD'];

const ul_code_target = document.getElementsByTagName('UL')[0];

const ul_currency = document.createElement('UL');
const ul_code = document.createElement('UL');


const currency_container = document.getElementById('currency_container');
const code_container = document.getElementById('code_container');

const regex_currency = /(\d+(,\d{3})*(\.\d+)?)/g;
const regex_code = /^.+?\s/g;

const result_array = [];

for (let i = 0; i < currency_array.length; i++) {
    const li = document.createElement('LI');
    li.textContent = currency_array[i] + '---parsed to---' + currency_array[i].match(regex_currency)[0].replace(/,/g, '');
    ul_currency.appendChild(li);
    currency_container.appendChild(ul_currency);
}

for (let i = 0; i < ul_code_target.children.length; i++) {
    const tmp_text_holder = ul_code_target.children[i].textContent;
    result_array.push(tmp_text_holder.match(regex_code)[0]);
}

result_array.sort();

for (let i = 0; i < result_array.length; i++) {
    const li = document.createElement('LI');
    li.textContent = result_array[i];
    ul_code.appendChild(li);
    code_container.appendChild(ul_code);
}