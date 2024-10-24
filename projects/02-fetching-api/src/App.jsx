import { useEffect, useState } from 'react'
import './App.css';

export function App () {
  const CAT_ENDPOINT_RANDOM_IMAGE = 'https://cataas.com/cat'
  const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

  const [fact, setFact] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchCatFact = () => {
    setLoading(true);

    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const imageUrl = `${CAT_ENDPOINT_RANDOM_IMAGE}?${Math.random()}`
        const img = new Image(); // Crear un nuevo objeto de imagen

        img.src = imageUrl; // Establecer la URL de la imagen
        img.onload = () => {
          setImage(imageUrl); // Establecer la imagen cuando haya terminado de cargar
          setLoading(false); // Cambiar el estado de carga a falso
        }
      })
  }

  useEffect(() => {
    fetchCatFact()
  }, [])

  return (
    <main className="app">
      <h1 className="app-title">Cat Fact App</h1>
      {fact && <p className="app-fact">{fact}</p>}
      {loading ? (
        <div className="spinner"></div> // Mostrar el spinner mientras se carga la imagen
      ) : (
        image && <img className="app-image" src={image} alt="Random cat"/>
      )}
      <button className="app-button" onClick={fetchCatFact}>Get New Cat Fact</button>
    </main>
  )
}