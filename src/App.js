import React from 'react';
import './App.css';

// Components
import Main from './Main/Main.js';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className='App-body'>
        <Main />
      </main>
      <footer className='App-footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
