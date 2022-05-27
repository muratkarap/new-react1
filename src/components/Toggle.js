import React, { useState, useEffect } from 'react'

const getStorageTheme=()=>{
    let theme='light-theme';

    if (localStorage.getItem('theme')){
        theme=localStorage.getItem('theme')
    }


}

const Toggle = () => {

const [theme,setTheme]=useState(getStorageTheme());

const toggleTheme=()=>{
    if (theme==='light-theme'){
        setTheme('dark-theme')
    }else{
        setTheme('light-theme')
    }
}

useEffect(() => {
  document.documentElement.className=theme /*HTML tag e theme class verdik*/
  localStorage.setItem('theme', theme);
}, [theme])


  return (
   
    <nav>
        <div className='nav-center'>
            <h1>Code Fraternity <br /> Dark and Light Mode</h1>
            <button  className='btn'  onClick={toggleTheme}>Toggle</button>
        </div>
    </nav>
  )
}

export default Toggle