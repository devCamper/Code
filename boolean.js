
// true, !, &&, ()

const nand = (a, b) => !(a && b)
const or = (a, b)   => !(!a && !b)
const nor = (a, b)  => (!a && !b)
const xor = (a, b)  => !(a && b) && !(!a && !b)
const xnor = (a, b) => !(!(a && b) && !(!a && !b))

const implication = (a, b) => !(a && !b)
const nonimplication = (a, b) => (a && !b)

const mux = (a, b, sel) => !(!(!sel && a) && !(sel && b))

const one = [false, true];
const two = [[false, false], [false, true], [true, false], [true, true]];
const three = [
  [false, false, false], [false, false, true],
  [false, true, false], [false, true, true],
  [true, false, false], [true, false, true],
  [true, true, false], [true, true, true],
]

// one.forEach(_ => console.log(not(_)));
// two.forEach(_ => console.log(nand(..._)))
three.forEach(_ => console.log(mux(..._)))
