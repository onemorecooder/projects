//DEPENDENCIAS A INSTALAR SI SE CREA PROYECTO VANILLA
// npm install react react-dom -E
// EN REACT ESTÁN POR EJEMPLO LOS HOOKS
// Y EN REACT-DOM LOS BINDIGNS(?)

import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
    plugins: [react()]
})