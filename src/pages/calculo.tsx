import { useState } from 'react'
//import Modal from '../components/Modal'
import dynamic from 'next/dynamic'

const Modal = dynamic(() => import('../components/Modal'), {
  loading: () => <p>Loading ...</p>,
  ssr: false,
})

const Calculo = () => {
  const [modalVidible, setModalVisible] = useState<boolean>()

  async function handleSum() {
    const calc = (await import('../libs/calc')).default
    alert(calc.sum(5, 6))
  }

  function handleModalVisible() {
    setModalVisible(true)
  }
  return (
    <div>
      <h1>Calculo</h1>
      <button onClick={handleModalVisible}>Somar</button>
      {modalVidible && <Modal />}
    </div>
  )
}

export default Calculo

/**
 * The calc library only loads when the button is clicked
 */
