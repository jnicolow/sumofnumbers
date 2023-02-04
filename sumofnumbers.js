function sumFor(list) {
  let retu = 0;
  for (let i = 0; i < list.length; i++) {
    retu += list[i];
  }
  return retu;
}

function sumWhile(list) {
  let retu = 0;
  let i = 0;
  while (i < list.length) {
    retu += list[i];
    i += 1;
  }
  return retu;
}

function sumRecursion(list) {
  if (list.length !== 0) {
    return list[0] + sumRecursion(list.slice(1, list.length));
  }
  return 0;
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; });
}

const list = [1, 2, 3, 4, 87]; // sum = 97
console.log(sumFor(list));
console.log(sumWhile(list));
console.log(sumRecursion(list));
console.log(sumTheSimpleWay(list));
