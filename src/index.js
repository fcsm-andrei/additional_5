module.exports = function check(str, bracketsConfig) {
   // your solution
	let lenBrackets = bracketsConfig.length,
		arrStr = str.split(""),
		lenStr = str.length,
		firstBrackets = [],
		secondBrackets = [],
		aqualBrackets = [],
		bool;
		
	for( let i = 0; i < lenBrackets; i++){
		firstBrackets.push(bracketsConfig[i][0]);
		secondBrackets.push(bracketsConfig[i][1]);
	}
	if(lenStr % 2 > 0) return false;
	// str without brakets "|"
	let pos = str.indexOf('|'),
		count = 0,
		newStr = [];

	while (pos !== -1) {
	  count++;
	  pos = str.indexOf('|', pos + 1);
	}
	if(count%2 !== 0) bool = false;

	for(let j = 0; j < lenStr; j++)	{
		if(arrStr[j] !== '|') {
			newStr.push(arrStr[j]);
		}
	}


	let tmp = [],
		el;
	for(i = 0, lenNewStr = lenBrackets; i < lenNewStr; i++) {
		for(j = 0; j < newStr.length; j++) {
			if(firstBrackets[i] === newStr[j] ) {
				tmp.push(newStr[j]);
			} else if(el !=="undefined"){
				el = tmp.shift();							
			} else {bool = false};
			bool = true;					
		}
	}
	if(tmp.length%2 > 0) {
		bool = false;
	} else {
		bool = true;
	}
	return bool;
		   
}

/**console.log(check('()', [['(', ')']])); // -> true
console.log(check('((()))()', [['(', ')']])); // -> true
console.log(check('())(', [['(', ')']])); // -> false
console.log(check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']])); // -> true
console.log(check('[(])', [['(', ')'], ['[', ']']])); // -> false
console.log(check('[]()', [['(', ')'], ['[', ']']])); // -> true
console.log(check('[]()(', [['(', ')'], ['[', ']']])); // -> false

// special case: opening and closing bracket can be the same :)

console.log(check('||', [['|', '|']])); // -> true
console.log(check('|()|', [['(', ')'], ['|', '|']])); // -> true
console.log(check('|(|)', [['(', ')'], ['|', '|']])); // -> false
console.log(check('|()|()||||', [['(', ')'], ['|', '|']])); // -> true**/