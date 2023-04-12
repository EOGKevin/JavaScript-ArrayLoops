/*-- Opg 1 --*/
const countries = ["Danmark", "Sverige", "Norge", "Finland"]
console.log(countries)


/*-- Opg 2 --*/
const stuff = ["Christian", 45, [1,2,3], "Dorte"]
const ministuff = stuff[2][1]
console.log(ministuff)
console.log("\n")


/*-- Intermissions --*/
let a = 2;
let b = 3;
console.log(a += b)  //ny værdig for a bliver 5 da man plusser a med b

console.log(a)
console.log(b)
console.log(b += a - 3) //ny værdig for b bliver 5 da man plusser b med a og minusser med 3
console.log("\n")
/*-- Intermissions --*/


/*-- Opg 3 --*/
const spis = ["Apples", "Oranges", "Bananas"]

/*-- Del 1 --*/
spis.push("Kiwi")
console.log(spis)
console.log("\n")

/*-- Del 2 --*/
spis.unshift("Strawberry")
console.log(spis)
console.log("\n")

/*-- Del 3 --*/
let slet = spis.pop()
console.log(spis)
console.log(slet)
console.log("\n")

/*-- Del 4 --*/
spis.splice(1, 2)
console.log(spis)


/*-- Opg 4 --*/
//lefsldasd