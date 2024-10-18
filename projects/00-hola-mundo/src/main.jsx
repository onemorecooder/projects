import {createRoot} from 'react-dom/client'
import {App} from "./App.jsx";
import './index.css'
// ESTE ES EL PUNTO DE ENTRADA DE LA APP

const root = createRoot(document.getElementById('root'))

// AQUÍ NO SE PODRÍA RENDERIZAR MÁS DE UN SOLO ELEMENTO COMO 2 BOTONES
root.render(
<App/>
)
