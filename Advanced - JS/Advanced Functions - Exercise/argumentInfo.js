function argumentInfo(...arguments) {
  let res = {};

  for (const argument of arguments) {
    let argType = typeof argument;

    if (!res.hasOwnProperty(argType)) {
      res[argType] = 1;
    } else {
      res[argType]++;
    }
    console.log(`${argType}: ${argument}`);
  }

  let sorted = Object.entries(res).sort(([k,v],[k1,v1]) => {
    return v1 - v;
  })
  
  for (const [key,value] of sorted) {
    console.log(`${key} = ${value}`);
  }
}
argumentInfo({ name: 'bob'}, 3.333, 9.999);
