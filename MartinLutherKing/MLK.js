/*
Programer: Spencer Kohler
Team Member: 
Date: 1-17-2022
Program: Martin Luther King
*/
async function startProgram() {
	// Write code here
	//await speak("I am happy to join with you today in what will go down in history as the greatest demonstration for freedom in the history of our nation.");
	await scrollMatrixText('I am happy to join with', {r: 256, g: 256, b:256}, 10, true);
	await scrollMatrixText(' you today in what will', {r: 256, g: 256, b:256}, 10, true);
	await scrollMatrixText('go down in history as the', {r: 256, g: 256, b:256}, 10, true);
	await scrollMatrixText('greatest demonstration for freedom in the history of our nation.', {r: 256, g: 256, b:256}, 10, true);
}


