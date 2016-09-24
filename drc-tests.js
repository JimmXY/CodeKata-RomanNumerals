var romanLetterArray = {
	1 : "I",
	2 : "II",
	4: "IV",
	5: "V",
	6: "VI",	
	9: "IX",
	10: "X",
	11: "XI",
	14: "XIV",
	1066: "MLXVI",
	1989: "MCMLXXXIX"
};
var rnc = new RomanNumeralConverter();
QUnit.test("Number to Roman", function(assert) {
	for(var n in romanLetterArray){
		assert.equal(rnc.ConvertToRoman(n), romanLetterArray[n]);
	}
});

QUnit.test("Roman to Number", function(assert) {
	for(var n in romanLetterArray){
		assert.equal(rnc.ConvertFromRoman(romanLetterArray[n]), n);
	}
});