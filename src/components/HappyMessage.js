import React from 'react'


let messagesArray = ["You know my code: hoes before bros. Uteruses before duderuses. Ovaries before brovaries.", "We have to remember what’s important in life: friends, waffles and work. Or waffles, friends, work. But work has to to come third.", "You rainbow-infused, space unicorn.", "You are the most beautiful, glowing, sun goddess ever.", "Let's break out a map. Not the old out-of-date one that shows where we've been, but a crisp new one that shows where we might go. Let's embark on a new journey together, and see where it takes us."]

function randomMessage(array) {
  let random = Math.floor(Math.random() * array.length)
  return array[random]
}

const HappyMessage = () => {
  return (
    <p className="message">{randomMessage(messagesArray)}</p>
  )
}


export default HappyMessage