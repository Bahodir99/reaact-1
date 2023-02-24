import React from 'react'
import './Header.css'


function Header({set,count}) {
  console.log(count);
  return (
    <div>
      <header className='header'>
        <nav>
          <div className="container header__nav">
            <button onClick={()=> set(count < 0 ? 0 : count + 1)}>Qoshsh</button>
            <button onClick={()=> set(count > 0 ? count -1 : 0)}>Ayrish</button>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header