//=== Palindrome is built into the html page ==//



// function isPal(str) {
// 	var s = str.split('');
// 	var x = s.length - 1;

// 	if (s.length === 1 || s.length === 0){
// 		return true;
// 	} else if (s[0] === s[x]){
// 		s.splice(x, 1);
// 		s.splice(0, 1);
// 		return isPal(s.join(''));
// 	} else {
// 		return false;
// 	}
// }