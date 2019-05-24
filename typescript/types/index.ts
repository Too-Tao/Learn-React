let num: number = -1
let str: string = '123'
let bool: boolean = true
let arr: string[] = ['1', '123', '123']
let u: undefined = undefined
let n: null = null
//元组
let x: [number, string] = [123, 'TJ']
x[0] = 991.231231
x[1] = 'hh131'
x[0].toFixed(2)
x[1].slice(1)
//枚举
enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat }
console.log(Days[0] === 'Sun')  //true
console.log(Days['Sun'] === 0)  //true

//any 表示没有任何类型

//never 永不存在值的类型

//void 返回值为空

//Object 非原始类型
// console.log(x[0].toFixed(2))