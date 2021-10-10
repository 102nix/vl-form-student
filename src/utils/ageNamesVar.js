export function ageNameVar(age) {
	let text;
	let count = age % 100;
	if (count >= 5 && count <= 20) {
		text = 'лет';
	} else {
		count = count % 10;
		if (count == 1) {
			text = 'год';
		} else if (count >= 2 && count <= 4) {
			text = 'года';
		} else {
			text = 'лет';
		}
	}
	return age+" "+text;
}