import React, {useState} from 'react'

_ = React.createElement

a = 1
a.test() # <--- will throw TypeError: a.test is not a function

Home = () ->
  _ 'div', {},
    _ Hello, {name: 'Victor!11'}

export default Home

Hello = ({name}) ->
  [count, setCount] = useState 1

  _ 'div', {},
    _ 'div', {}, "Bonjour for the #{count} th time!"
    _ 'button', {onClick: () -> setCount(count + 1)}, "+"


