
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  
  const [qab, jonat] = useState(0)
  return (
    <div className="App">
      <Header set={jonat} count={qab} />
      <Footer set={jonat} count={qab}/>
    </div>
  );
}

export default App;
