// ES2022

export const top = () => {
  class Human1 {
    age = 18;
    static category = "animal";
  }

  // 従来
  class Human {
    constructor() {
      this.age = 18;
    }
  }

  const human = new Human();
  console.log(human.age); // 18
  const human1 = new Human1();
  console.log(human1.age);
};

// 一度「田中」の文字列を渡したら、クラスの外から書き換えたくない場合、上記のようなパブリックなフィールドでは不適切になります。
//新機能では、プライベートなフィールドとメソッドのため、クラス外からはアクセスできなくなる
class MyClass {
  // プライベートなフィールド
  #name;

  constructor(name) {
    this.#name = name;
  }

  hello() {
    console.log(`こんにちは${this.#name}さん！`);
  }
}

const foo = new MyClass("田中");
foo.hello(); // 「こんにちは田中さん！」と出力される
console.log(foo.#name); // エラー

await new Promise((resolve) => {
  setTimeout(() => {
    alert("1秒経ちました");
    resolve();
  }, 1000);
});

//instanceofよりも安全にインスタンスかどうかの確認ができる、プライベートフィールドのin演算子
class MyClass2 {
  #brand
  static isMyClass(object) {
    return #brand in object;
  }
}

console.log(MyClass2.isMyClass(new MyClass())); // true
console.log(MyClass2.isMyClass(new Date())); // false

//inを使えば、わざわざ try・catchを使わず、シンプルにインスタンスかどうかのチェックができます。
const myInstance = new MyClass2();
console.log(MyClass.isMyClass(myInstance)); // true

const foo = {
  name: "名探偵コナン"
};
console.log(MyClass.isMyClass(foo)); // false

//syncなしでもawaitが使えるようになる、トップレベルでのawait
await new Promise((resolve) => {
  setTimeout(() => {
    alert("1秒経ちました");
    resolve();
  }, 1000);
});

//配列の「最後の要素」が簡単に取得できるようになるat()
const myArray = ["りんご", "バナナ", "ぶどう"];
console.log(myArray.at(-1)); // ぶどう

//オブジェクトが指定のプロパティを持っているかを簡単にチェックできる Object.hasOwn()
const myObject = {
  name: "鈴木",
}

console.log(Object.hasOwn(myObject, "name"));
// true

//JavaScriptで「staticイニシャライザー」ができるように
class MyClass3 {
  static x;
  
  static {
    this.x = "こんにちは"
  }
}

console.log(MyClass3.x); // こんにちは

//複数のエラーをチェインし、原因を追跡しやすくできるError.cause

try {
  // なにかしらのエラーが発生する
} catch(error) {
  throw new Error("エラーの内容", { cause: error })
}

//正規表現で、マッチ部分の開始・終了インデックスを取得できるdフラグ
const result = /正規表現/d.exec(文字列);
console.log(result.indices);

const regrex = /私の姓は(?<family>.*)、名前は(?<name>.*)です/du;

const result = '私の姓は山田、名前は太郎です'.match(regrex);
console.log(result);

// ☆ indicesプロパティでマッチ部分の開始・終了インデックスを取得する
const indicesGroups = result.indices.groups;
console.log(indicesGroups.family);  // [4, 6]
console.log(indicesGroups.name);  // [10, 12]


//非同期

new Promise((resolve, reject) => {
  console.log("Promise");
  resolve();
}).then(() => console.log("then"));

console.log("global end");