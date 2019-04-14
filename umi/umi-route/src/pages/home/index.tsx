import * as React from 'react'
import Link from 'umi/link'

export default () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/one">Page one</Link>
      <Link to="/two">Page two</Link>
      <Link to="/three">Page three</Link>
    </div>
  )
}