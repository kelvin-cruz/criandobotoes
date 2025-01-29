import "./global.css"

import { useEffect, useState } from "react"
import { Button } from "./components/button"
import styles from "./app.module.css"

//import {useMessage} from "./hooks/useMessage"




export function App() {
    //const {show} = useMessage()

    const [count, setcont] = useState(0)

    function handleAdd() {
        setcont((prevState) => prevState + 1)
    }


    function handleRemove() {
        if (count > 0) {

            setcont((prevState) => prevState - 1)
        }
    }

    useEffect(() => {

        if (count > 0) {
            console.log("O valor mudou para:" + count)
        }
    }, [count])

    return (
        <div className={styles.container}>
            <Button name="Adicionar" onClick={handleAdd} />
            <span>{count} </span>
            <Button name="Remover" onClick={handleRemove} />
        </div>

    )
}