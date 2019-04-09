//=== Anagram ==//

function isAna(won, too) {
	let twoLowerCase = too.toLowerCase();
	let oneLowerCase = won.toLowerCase();

	let two = ensure(twoLowerCase);
	let one = ensure(oneLowerCase);

	if (two.length == one.length) {
		for (let i = 0; i < one.length; i++) {
			for (let j = 0; j < two.length; j++) {
				if (one[i] === two[j]) {
					two.splice(j, 1);
					break
				}
			}
		}
		two = two.join('');
		if ( two === '') {
			return "anagram";
		} else {
			return "not anagram";
		}
	} else {
		return "please submit two strings of equal length";
	}
}

console.log(isAna('aligned', 'lingade'));

function ensure(a){
	let abc = 'abcdefghijklmnopqrstuvwxyz';
	let aNew = [];
	for (let i = 0; i < a.length; i++){
		for (let j = 0; j < abc.length; j++){
			if (a[i] === abc[j]){
				aNew.push(a[i]);
			}
		}
	}
	return aNew;
}