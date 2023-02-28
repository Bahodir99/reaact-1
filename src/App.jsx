
import { useState } from 'react';
import './App.css';

function App() {

  const [qab, jonat] = useState(true)

  const meva = ['behi', 'olma', 'uzum', 'sabzi', 'kivi']

  let set = setTimeout(() => {
    jonat(false)
  }, 5000);


  return (
    <div className="App">

      <ul>
        {
          qab ? <li>Loading...</li> :
            meva.map((e) => {
              return <li>{e}</li>
            })
        }
      </ul>

    </div>
  );
}

export default App;
