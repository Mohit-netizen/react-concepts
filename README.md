<Header email="ws@gmail.com" >



Using Children props
<Header email="ws@gmail.com" >
        <h1>welcome to header section2</h1>
      </Header>
      result
      import React from 'react'
import p from 'react'

const Header = ({email,children} ) => {
  console.log(p)
  return (
    <h1>

      Welcome to Header Section {email}{children}
    </h1>
  )
}

export default Header