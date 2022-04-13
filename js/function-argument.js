function max(x, y) {
  if (+x > +y) {
    return x;
  } else {
    return y;
  }
}
console.log(
  max((x = prompt(`Enter some number`)), (y = prompt(`Enter some number`)))
);
