type Foo = {
  name: string
  value: number
}

type FooReadonly = Readonly<Foo>

const foo: Foo = { name: 'Tom', value: 123 }
const fooReadonly: FooReadonly = { name: 'Bob', value: 12333 }

foo.name = 'Jery'
console.log(foo)
console.log(fooReadonly)
