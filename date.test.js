let indhu = require('./node_modules/indhu-test/indhu');
let date = require('./date');

let result = date();
let expected = "2020-5-26";
//Pass case
indhu.test(result).toBeEqualTo(expected);

//Fail case
indhu.test(result).toBeEqualTo("2020-05-26");

