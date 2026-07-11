import React from 'react'

//CSS
import styles from './Modal.module.css'

type Props = {
  children: React.ReactNode;
}

const Modal = ({ children }: Props) => {

  //Funcao para fechar o modal
  const closeModal = (e: React.MouseEvent) : void => {
    const modal = document.querySelector("#modal");
    modal!.remove();
    //Para remover o modal tbm poderia ser assim
    //modal!.classList.add("hidden");
    //chamando o hidden do css
  }

  return (
    <div id="modal" className="hide">
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>
        <h2>Texto Modal</h2>
        {children}
      </div>
    </div>
  )
}

export default Modal