const obj = {
  a: 5,
  b: "a+c",
  c: "d",
  d: "a+e",
  e: 7,
};

/*
output = { a: 5, b: 17, c: 12, d: 12, e: 7 }
*/

const getValueByStr = val => {
  const splitValues = val.split("+");
  let result = 0;
  for (let i = 0; i < splitValues.length; i++) {
    if (typeof obj[splitValues[i]] === "string") {
      result = result + getValueByStr(obj[splitValues[i]]);
    } else {
      result = result + obj[splitValues[i]];
    }
  }
  return result;
};

const getValue = (obj) => {
  const result = Object.keys(obj).reduce((acc, cv) => {
    if (typeof obj[cv] === "string") {
      const result = getValueByStr(obj[cv]);
      acc = { ...acc, [cv]: result };
      return acc;
    }
    acc = { ...acc, [cv]: obj[cv] };
    return acc;
  }, {});
  return result;
};

console.log(getValue(obj));
