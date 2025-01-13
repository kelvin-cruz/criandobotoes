type prosps={
    name: string
}

export function Button (props:prosps){

    return <button> {props.name}</button>
}