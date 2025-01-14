import "./components/global.css"
import "./components/styles.css"
import { Button } from "./components/buttons"





export function App() {
    return (
        <div className="container">
            <Button name="Adicionar" />
            <Button name="editar" />
            <Button name="Remover" />
        </div>

    )
}