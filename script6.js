//=== Same Letter Patterns ==//

function doWork(first, second){
	var firstNum = sameLetterPattern(first);
	var secondNum = sameLetterPatternTwo(second);
	
	console.log(firstNum + ' ?= ' + secondNum)

	if(firstNum == secondNum) {
		console.log("They are the same!");
	} else {
		console.log("Don't match!")
	}
}

function sameLetterPattern(first){
	let firstDict = new Object();
	let firstNum = "";
	var counter = 0;
	var trigger = false;

	for (var i = 0; i < first.length; i++){
		if (i == 0){
			firstDict[first[i]] = counter.toString();
			console.log(firstDict);
			firstNum += counter.toString();
			console.log(firstNum);
			counter += 1;
			console.log(counter);
		} else {
			for (var item in firstDict){
				if (first[i] == item){
					firstNum += firstDict[item];
					trigger = true;
				}
			}
			if (trigger == false){
				firstDict[first[i]] = counter.toString();
				firstNum += counter.toString();
				counter += 1;
			}
			trigger = false;
		}
	}
	console.log(firstNum);
	return firstNum;
}

doWork('a a ca', 'x x kx');


// Finish finish finish finish

function sameLetterPatternTwo(second){
	let secondDict = new Object();
	let secondNum = "";
	var counter = 0;
	var trigger = false;

	for (var i = 0; i < second.length; i++){
		if (i == 0){
			secondDict[second[i]] = counter.toString();
			secondNum += counter.toString();
			counter += 1;
		} else {
			for (var item in secondDict){
				if (second[i] == item){
					secondNum += secondDict[item];
					trigger = true;
				}
			}
			if (trigger == false){
				secondDict[second[i]] = counter.toString();
				secondNum += counter.toString();
				counter += 1;
			}
			trigger = false;
		}
	}
	console.log(secondNum);
	return secondNum;
}