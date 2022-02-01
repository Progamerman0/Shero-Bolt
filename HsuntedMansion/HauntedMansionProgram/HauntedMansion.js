/*
Programmer: Spencer Kohler
Team Member: Johana
Date: 1-26-2022
Program: We will make a program to navigate a maze with particular challanges at particular points
with a sphero bolt.
*/

async function startProgram(){ //This makes it do the other functions.
	await goBlueLight();
	await goSound1();
}

async function goBlueLight(){ //This function makes the bolt say start and makes it go to the blue circle and turn blue.
	await scrollMatrixText('Start' {r:255, g:0, b:0}, 30, true)
	await roll(0, 100, 1.45);
	await setMainLed({r:0, g:0, b:255});
}

async function goSound1(){ //This makes it go to the first sound and play an ambulence sound.
	await delay(0.5);
	await roll(90, 100, 1.1);
	await Sound.Mechanical.Ambulance.play(true);
}

async function goRedLight(){ //This makes the bolt go to the red spot and turn the lights red.
	await delay(0.5);
	await roll(180, 50, 1.5);
	await roll(220, 50, 1.3);
	await delay(0.5);
	await roll(130, 50, 0.9);
	await setMainLed({ r: 255, g: 0, b: 0 });
}
