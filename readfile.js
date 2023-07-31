const fs = require("fs");
const keywords = ["while", "if", "else", "return", "break", "continue", "int", "float", "void", "for"]
const relOps = ["<", ">", "<=", ">=", "==", "!="]
const logicalOp = ["&&", "||", "!"]
const operators = ["+", "-", "*", "/", "="]
const brackets = ["{", "}", "(", ")", "[", "]"]
const numbers = ["0", "1", "2", "3", "6", "7", ".", "E", "-"]
const identifier = ['a', 'b', 'e', 'g', 'h', 'i', 'k', 'm', 'n', 'o', 'r', "u", 'y', 'A', 'B', 'E', 'G', 'H', 'I', 'K', 'M', 'N', 'O', 'R', 'U', 'Y'];

//My name is minkhayer and home district: Bogura
//My ID is 20103167 and DOB: 31/12/2001
// 012367
// abeghikmnoruy
// ABEGHIKMNORUY

const lexical = () => {
	let data = fs.readFileSync("./inputfile.cpp", { encoding: "utf8" });
	//console.log(data); //load the input file
	let dataArray = data.split("\n");
	//console.log(dataArray)
	dataArray = dataArray.map((each) => {
		return each.replace('\r', '').replace('\t', '').replace('\t', '')
	}, [])
	//console.log(dataArray)
	for (each of dataArray) {
		if (each[0] === "#") {
			continue;
		}
		line = each.split(" ")
		for (word of line) {
			if (word === '') continue;
			else if (keywords.includes(word)) {
				console.log("keyword: " + word);
			}
			else if (relOps.includes(word)) {
				console.log(word + ":Relop, " + word);
			}

			else if (operators.includes(word)) {
				if (word == "+") {
					console.log(word + ": Addop, " + word);
				}
				else if (word == "-") {
					console.log(word + ": Subop, " + word);
				}
				else if (word === "=") {
					console.log("=: Assignop, " + word);
				}
				else if (word == "/") {
					console.log(word + ": Divop, " + word);
				}
				else if (word === "*") {
					console.log("=: Mulop, " + word);
				}
			}
			else if (logicalOp.includes(word)) {
				if (word == "&&") {
					console.log(word + ": And, " + word);
				}
				else if (word == "||") {
					console.log(word + ": Or, " + word);
				}
				else if (word === "!") {
					console.log("=: not, " + word);
				}
			}
			else if (brackets.includes(word)) {
				console.log(word + ":" + word);
			}

			else if (word === ";") {
				console.log(word + ":" + word);
			}
			else if (word[0] == ".") {
				console.log("Error: .num:" + word);
			}
			else if ((+word[0]) >= 0 && (+word[0]) <= 9) {

				let cnt = 0;
				for (let i = 0; i < word.length; i++) {
					if (numbers.includes(word[i])) cnt++;
				}
				//console.log("The count number: " + cnt);
				if (word.length > 0 && word.length == cnt) {
					console.log("num :" + word);
				}
				else {
					console.log('Error number:' + word);
				}
			}
			else {
				//word = word.toLowerCase();
				let cnt = 0;
				for (let i = 0; i < word.length; i++) {
					if (identifier.includes(word[i])) cnt++;
				}
				if (word.length > 0 && word.length == cnt) {
					console.log("identifier: " + word);
				}
				else {
					console.log("Error Idenfifier: " + word);
				}

			}
		}
	}
}
lexical();