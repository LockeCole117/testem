describe("A Quiz", function(){
	it("should have a default score of 0", function(){
		var quiz = new Quiz;
		expect(quiz.score).toBe(0);
	});
});