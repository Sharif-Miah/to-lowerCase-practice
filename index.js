

let string = 'This is Text Class LowerCase and UperCase';

const toSearch = 'lowerCase and uperCase';
const tolowerCase = string.toLowerCase()
const toExisting = tolowerCase.includes(toSearch.toLowerCase());
// console.log(toExisting);

const myPara = 'This is A Paragraph. I am A boy. I have a dughter.'

const mainiText = "This is A Paragraph."
const choteHaterBorno = myPara.toLowerCase().includes(mainiText.toLowerCase());
console.log(choteHaterBorno);