/** テンプレート文字列　*/

const name = "TSB";
const age = 28;

const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

//テンプレート文字列

const message2 = `私は${name}です。年齢は${age}です。`;
console.log(message2);

//アロー関数

//今まで

function func1(str) {
  return str;
}

console.log(func1("従来の"));

const func2 = (str) => {
  return `アロー関数とはこう使う！：${str}`;
};

console.log(func2("テスト"));

const func3 = (num1, num2) => num1 + num2;
console.log(func3(11, 13));
