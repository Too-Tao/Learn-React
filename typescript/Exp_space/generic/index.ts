class Queue<T> {
  data: T[] = []
  push = (item:T) => this.data.push(item)
  pop = () => this.data.shift()
}

const queue = new Queue<number>()

queue.push(0)
// queue.push('131') //不能将String类型传入
console.log(queue.data)
