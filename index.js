
let string = 'This is Text Class LowerCase and UperCase';

const toSearch = 'lowerCase and uperCase';
const tolowerCase = string.toLowerCase()
const toExisting = tolowerCase.includes(toSearch.toLowerCase());
// console.log(toExisting);

const myPara = 'This is A Paragraph. I am A boy. I have a dughter'

const mainiText = "This is A Paragraph."
const choteHaterBorno = myPara.toLowerCase().includes(mainiText.toLowerCase());
console.log(choteHaterBorno);



//---------------------------
//IndexOf
//-----------  

console.log(myPara.indexOf('Paragraph'));
console.log(myPara.indexOf('have'));

if (myPara.indexOf('this') !== -1) {
    console.log('We find it.');
} else {
    console.log('We con not find it.');
}

// startsWith 

console.log(myPara.startsWith('This'));

// EndsWith 

console.log(myPara.endsWith('dughter'));