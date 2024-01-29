import React, { useContext } from 'react'
import { Language, ThemeContext } from './ThemeProvider';

const Theme = () => {
const value=useContext(ThemeContext)
const language=useContext(Language)
const {theme,toggleTheme}=value
console.log(language);

  return (
    <div style={{backgroundColor:theme=='light'?'white':'black',color:theme=='light'?'black':'white'}}>
      Theme
      <button onClick={toggleTheme}>toggle theme</button>
      </div>
  )
}

export default Theme