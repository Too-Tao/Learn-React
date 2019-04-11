import * as React from 'react'
import './Hello.css'

export interface Props {
  name: string
  enthusiasmLevel?: number
}

function Hello({ name, enthusiasmLevel = 1 }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D')
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamtionMarks(enthusiasmLevel)}
      </div>
    </div>
  )
}

export default Hello

function getExclamtionMarks(numChars: number) {
  return Array(numChars + 1).join('!')
}