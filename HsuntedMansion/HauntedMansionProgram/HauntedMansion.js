/*
Programmer: Spencer Kohler
Team Member: Johana
Date: 1-26-2022
Program: We will make a program to navigate a maze with particular challanges at particular points
with a sphero bolt.
*/

async function startProgram() {
	await goBlueLight();
}

async function goBlueLight(){
	await scrollMatrixText('Start' {r:255, g:0, b:0}, 30, true)
	await roll(0, 100, 1.45);
	await setMainLed({r:0, g:0, b:255});
}
