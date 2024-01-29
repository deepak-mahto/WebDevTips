const obj = {
  name: "deepak",
  age: 23,
  add: {
    city: "Ramgarh",
    state: "Jharkhand",
  },
};

let key = "pinCode";
obj[key] = 12345;

function getCopiedObject(source) {
  const targetObj = {};
  let keys = Object.keys(source);
  for (let key of keys) {
    if (typeof source[key] === "object") {
      targetObj[key] = getCopiedObject(source[key]);
    } else {
      targetObj[key] = source[key];
    }
  }
  return targetObj;
}

const copiedObject = getCopiedObject(obj);
copiedObject.name = "ram";
copiedObject.add.city = "hz";
copiedObject.pinCode = 825326;
console.log(obj);
console.log(copiedObject);
