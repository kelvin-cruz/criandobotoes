import "./components/global.css"
import"./components/index.css"
import {Button} from "./components/Button"



export function App (){
    return(
        <div className="container">
            <Button name="Adicionar"/>
            <span>0</span>
            <Button name="Remover"/>
        </div>

    )
}