var nameVar = "Cris-aian";
var nameVar = "Mike";
console.log("nameVar", nameVar);

let nameLet = "Jen";
nameLet = "Julie";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

function getPetName() {
  const petName = "Hal";
  return petName;
}

console.log(getPetName());

// Block scoping

const fullName = "Antonio Vergara";
let firsName;
if (fullName) {
  firsName = fullName.split(" ")[0];
  console.log(firsName);
}
console.log(firsName);
