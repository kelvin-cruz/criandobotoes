import "./global.css"

import { useState } from "react"
import { Button } from "./components/button"
import styles from "./app.module.css"

//import {useMessage} from "./hooks/useMessage"




export function App() {
    //const {show} = useMessage()

    const [count, setcont] = useState(0)

    return (
        <div className={styles.container}>
            <Button name="Adicionar" onClick={() => setcont(count + 1)} />
            <span>{count} </span>
            <Button name="Remover" onClick={() =>  setcont(count - 1)} />
        </div>

    )




}