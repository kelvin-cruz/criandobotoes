import styles from "./styles.module.css"

type props = React.ComponentProps<"button"> & {
    name: string;
}


export function Button({ name, ...rest }: props) {
    return <div>
        <button className={styles.container} {...rest}>
            <span>
                {name}
            </span>
        </button>
    </div>
}