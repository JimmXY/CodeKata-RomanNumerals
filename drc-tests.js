QUnit.test("1 to Roman", function(assert) {
	assert.equal("I", convertToRoman(1));
});

QUnit.test("2 to Roman", function(assert) {
	assert.equal("II", convertToRoman(1));
});

QUnit.test("4 to Roman", function(assert) {
	assert.equal("IV", convertToRoman(1));
});

QUnit.test("5 to Roman", function(assert) {
	assert.equal("V", convertToRoman(1));
});