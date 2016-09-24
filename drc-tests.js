var romanLetterArray = {
	1 : "I",
	2 : "II",
	3 : "III",
	4: "IV",
	5: "V",
	6: "VI",	
	9: "IX",
	10: "X",
	11: "XI",
	14: "XIV"
};
QUnit.test("Number to Roman", function(assert) {
	for(var n in romanLetterArray){
		assert.equal(convertToRoman(n), romanLetterArray[n]);
	}
});

QUnit.test("Roman to Number", function(assert) {
	for(var n in romanLetterArray){
		assert.equal(convertFromRoman(romanLetterArray[n]), n);
	}
});