import React from 'react'

function toggleButton() {
    const [toggle, setToggle] = useState(true)
    function handleClick () {
        setToggle(!toggle)
    }
  return (
    <button
        onClick={(e) => handleClick()}
    >
        {toggle ? "ON" : "OFF"}
    </button>
  )
}

export default toggleButton
