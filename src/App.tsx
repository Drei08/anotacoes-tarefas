import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

//CSS
import styles from './App.module.css';


function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1>Bem-vindo ao Anotações Tarefas!</h1>
        <div>
          <h2>O que você vai fazer hoje?</h2>
          <p>Formulário</p>
        </div>
        <div>
          <h2>Suas Tarefas:</h2>
          <p>Lista</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
