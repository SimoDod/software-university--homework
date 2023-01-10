function validate(a, b, c, d) {
  let x1 = Number(a);
  let y1 = Number(b);
  let x2 = Number(c);
  let y2 = Number(d);

  let firstCoords = Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2));
  if (Number.isInteger(firstCoords)) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }

  let secondCoords = Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2));
  if (Number.isInteger(secondCoords)) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }

  let coords = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  if (Number.isInteger(coords)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}
