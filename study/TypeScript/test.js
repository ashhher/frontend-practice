// var button = document.querySelector("button") as HTMLInputElement;
// var num1 = document.getElementById("num1") as HTMLInputElement;
// var num2 = document.getElementById("num2") as HTMLInputElement;
// function add(num1: number, num2: number) {
//     return num1 + num2;
// }
// button.addEventListener("click", () => {
//     console.log(add(+num1.value, +num2.value));
// })
// console.log('hello');
// let num1: number = 1;
// let num2: number = 2;
// function add(num1: number, num2: number, resultType: 'as-string' | 'as-number') {
//     return num1 + num2;
// }
// console.log(add(num1, num2, 'as-string'));
//数组
// let lis1: number[] = [1, 2];
// let list2: Array<number> = [1, 2, 3];
// let list3 = [1, 'dss']
// let list4: any[] = [1, 'dss'];
//tuple
// let person1: [number, string] = [1, 'alex'];
// person1[0] = 2;
//解构赋值
// const [, , a, b] = [1, 2, 3, 4];
// union
// let union: number[] | string[];
//union = [1,'2']; //不能将类型“(string | number)[]”分配给类型“number[] | string[]”
//literal
// let union2: 0 | 1 | 2;
//enum
// enum color {
//     red = 3,
//     blue,//4
//     green//5
// }
// any - unknown
// let value: unknown = 666;
// value = true;
// value = 'as';
// value.toUpperCase(); 报错
// if (typeof value === "string") {
//     value.toUpperCase();
// }
// void undefined never
// function printResult(): void {
//     console.log('111');
// }
// console.log(printResult()); // undefined
// function printResult1(): undefined {
//     console.log('111');
//     return;
// }
// console.log(printResult()); // undefined
// function throwError(message: string, errorCode: number): never { //即永远不会执行完
//     throw {
//         message,
//         errorCode
//     }
// }
// throwError("not found", 404);
// 类型适配
// let message: any;
// message = 'abc';
// let str = (<string>message).toUpperCase();
// let str2 = (message as string).endsWith('c');
// 函数
// let log1 = (message: string = 'error', code?: number) => { // 可选和默认参数必须放在后面
//     console.log(message, code);
// }
// log1(); // code参数因为加了?所以可以省略, message因为加了默认值所以也可以省略
// 对象
// const person: {
//     firstName: string,
//     lastName: string,
//     age: number
// } = {
//     firstName: 'Alex',
//     lastName: 'P',
//     age: 18
// }
// console.log(person.age);
// interface
// let drawPoint = (point: Point) => {
//     console.log({ x: point.x, y: point.y });
// }
// interface Point {
//     x: number;
//     y: number;
// }
// class
// import {Point} from "./point";
// const point1 = new Point(3, 4),
//     point2 = new Point(5, 7);
// point1.getDistance(point2);
// 泛型
var lastInArray = function (arr) {
    return arr[arr.length - 1];
};
var l1 = lastInArray([1, 2, 3, 4]);
var l2 = lastInArray(['a', 'b', 'c']);
console.log(l1, l2);
