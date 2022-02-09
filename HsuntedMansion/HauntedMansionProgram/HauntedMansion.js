/*
Programmer: Spencer Kohler
Team Member: Josiah Fuller
Date: 1.26.2022
Program: We will be making a program to go through a haunted mansion
 filled with haunted sounds, spooky color changes, and other obstacles
*/

async function startProgram(){
	await goToBlueLight();
	await goSound1();
	await goRedLight();
	await greenLight();
}

async function goToBlueLight(){
	await scrollMatrixText('Start', {r: 255, g: 0, b: 0}, 30, true);
	await roll(0, 50, 3.1);
	await setMainLed({ r: 0, g: 0, b: 255 });
}

async function goSound1(){
	await delay(0.5);
	await roll(90, 50, 2.1);
	await Sound.Mechanical.Ambulance.play(false);
}

async function goRedLight(){
	await delay(0.5);
	await roll(180, 50, 1.5);
	await roll(220, 50, 1.3);
	await delay(.5);
	await roll(130, 50, .9);
	await setMainLed({ r: 255, g: 0, b: 0 });
	await delay(0.5)
	
}

async function greenLight(){
	await roll(40, 50, 1.5);
	await Sound.Mechanical.Alarm.play(false);
	await delay(0.5);
	await roll(130, 50, 1.15);
	await delay(0.5);
	await roll(185, 50, .7);
	await delay(0.5);
	await roll(95, 50, 1.4);
	await delay(0.5);
	await setMainLed({ r: 0, g: 255, b: 0 });
}
