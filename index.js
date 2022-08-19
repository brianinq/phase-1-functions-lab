// Code your solution in this file!
const BLOCK_LENGTH_IN_FEET = 264;
function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - 42);
}
function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * BLOCK_LENGTH_IN_FEET;
}
function distanceTravelledInFeet(start, destination) {
  return Math.abs((start - destination) * BLOCK_LENGTH_IN_FEET);
}
function calculatesFarePrice(start, destination) {
  const distance = Math.abs(distanceTravelledInFeet(start, destination));

  if (distance <= 400) {
    return 0;
  } else if (distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
