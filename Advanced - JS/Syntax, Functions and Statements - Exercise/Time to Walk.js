function timeToWalk(steps, footprint, speed) {
    //every 500 meters student takes 1 min break;

    let distanceInM = steps * footprint;
    let speedMeterSecond = speed / 3.6;

    let time = distanceInM / speedMeterSecond;
    let timeBreak = Math.floor(distanceInM / 500);

    let timeInM = Math.floor(time / 60);
    timeInM += timeBreak;
    let timeInSec = time % 60;
    let timeInHours = Math.floor(timeInM / 60);

    if (timeInHours < 10) timeInHours = '0' + timeInHours;
    if (timeInM < 10) timeInM = '0' + timeInM;
    if (timeInSec < 10) timeInSec = '0' + timeInSec;

    console.log(`${timeInHours}:${timeInM}:${Math.round(timeInSec)}`);
}
timeToWalk(4000, 0.60, 5)