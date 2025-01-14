import styles from "./styles.module.css"



type props = {
    name: string
}

export function Button({ name }: props) {

    return <button className={styles.container}>
        <span>
            {name}
        </span>
    </button>
}