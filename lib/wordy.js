'use strict';

function WordProblem(question){
	this.question = question
};

function ArgumentError(){
	Error.captureStackTrace(this);
	this.name = "ArgumentError";
};

ArgumentError.prototype = Object.create(Error.prototype);

WordProblem.prototype.answer = function(){
	var questionArray = this.question.split(" "),
			verbs = ["multiplied", "plus", "minus", "divided"],
			result = parseInt(questionArray[2]);
	if(include(questionArray[3]) === false ){
			throw new ArgumentError()
	}else if(questionArray[0] != "What"){
			throw new ArgumentError()
	};
	for(var i = 0; i <= questionArray.length; i++){
		if (questionArray[i] === "plus") {
			result += parseInt(questionArray[i+1])
		}else if (questionArray[i] === "minus") {
			result -= parseInt(questionArray[i+1])
		}else if (questionArray[i] === "multiplied") {
			result *= parseInt(questionArray[i+2])
		}else if (questionArray[i] === "divided") {
			result /= parseInt(questionArray[i+2])
		}
	};
	return result
};

function include(word){
	var verbs = ["multiplied", "plus", "minus", "divided"],
		include = false;
	for(var i = 0; i <= verbs.length; i++){
		if (verbs[i] === word){ include = true}
	}
	return include
};
