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
