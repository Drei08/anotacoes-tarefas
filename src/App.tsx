import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

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
          <TaskForm btnText="Criar Tarefa" />
        </div>
        <div>
          <h2>Suas Tarefas:</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
