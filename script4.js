//=== Find the Vowels ==//

function findVowels(word){
	let vowels = 'aeiou';
	let counter = 0;
	for (let i = 0; i < word.length; i++){
		for (let j = 0; j < vowels.length; j++){
			if (word[i] === vowels[j]){
				counter += 1;
			}
		}
	}
	return counter;
}


console.log(findVowels(';sadlfkjsl;fkjdfl;askdjf'));