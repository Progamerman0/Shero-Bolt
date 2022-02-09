/*
Programmer: Spencer Kohler
Team Member: Josiah Fuller
Date: 1.26.2022
Program: We will be making a program to go through a haunted mansion
 filled with haunted sounds, spooky color changes, and other obstacles
*/

async function startProgram(){ //This makes the other functions happen
	await goToBlueLight();
	await goSound1();
	await goRedLight();
	await goGreenLight();
	await goSound3();
	await finish();
}

async function goToBlueLight(){ //This gets to the blue spot and makes the lights blue
	await scrollMatrixText('Start', {r: 255, g: 0, b: 0}, 30, true);
	await roll(0, 50, 3.1);
	await setMainLed({ r: 0, g: 0, b: 255 });
}

async function goSound1(){ //This gets to the first sound and plays a sound
	await delay(0.5);
	await roll(90, 50, 2.1);
	await Sound.Mechanical.Ambulance.play(false);
}

async function goRedLight(){ //This gets to the red spot and makes the lights red
	await delay(0.5);
	await roll(180, 50, 1.5);
	await roll(220, 50, 1.3);
	await delay(.5);
	await roll(130, 50, .9);
	await setMainLed({ r: 255, g: 0, b: 0 });
	await delay(0.5)
	
}

async function goGreenLight(){ //This gets to the second light and makes a sound, them gets to the green spot and makes the lights green
	await roll(40, 50, 1.7);
	await Sound.Mechanical.Alarm.play(false);
	await delay(0.5);
	await roll(130, 50, 1.15);
	await delay(0.5);
	await roll(185, 50, .6);
	await delay(0.5);
	await roll(95, 50, 1.3);
	await delay(0.5);
	await setMainLed({ r: 0, g: 255, b: 0 });
}

async function goSound3(){ //This gets to the third sound and plays a sound
	await roll(0, 50, 1.4);
	await delay(0.5);
	await roll(-45, 50, 1.1);
	await Sound.Mechanical.Chainsaw.play(false);
	await delay(.5);
}

async function finish(){ //This gets to the end and makes the light purple, then say that it survived.
	await roll(0, 100, .75);
	await setMainLed({ r: 255, g: 0, b: 255});
	await scrollMatrixText('Survived', {r: 0, g: 255, b: 0}, 30, true);
}
