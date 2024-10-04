import React, { useState } from 'react'

const Toggle = () => {
    const [backgroundColor, setBackgroundColor] = useState('white')
    const [textColor, setTextColor] = useState('#1b1b1b')
    const [buttonStyle, setButtonStyle] = useState("white")
    const handleToggle = () => {
        setBackgroundColor(backgroundColor === '#1b1b1b' ? 'white' : '#1b1b1b')
        setTextColor(textColor === '#1b1b1b' ? '#ffa31a' : '#1b1b1b')
        setButtonStyle(buttonStyle === 'white' ? '#1b1b1b' : 'white')
    }
  return (
    <div className={`toggle-container ${backgroundColor === '#1b1b1b' ? 'dark-mode' : 'light-mode'}`} style={{backgroundColor, color: textColor}}>
        <button 
            className="toggle-button"
            onClick={handleToggle} 
            style={{
                backgroundColor: buttonStyle, 
                color: textColor,
                border: `1px solid ${textColor}`,
            }} 
        >
            {backgroundColor === '#1b1b1b' ? 'Dark Mode' : 'Light Mode'}
        </button>
        <section className='content-container'>
            <h1 className="title">Hello World</h1>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </section>
    </div>
  )
}

export default Toggle