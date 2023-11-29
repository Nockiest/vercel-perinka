type Vector2 = {
    x:number
    y:number
}

type Vector3 = Vector2 & {
    z: Number
}


type Prettify<T> = {
    [K in keyof T]: T[K]
}
type prettier = Prettify<Vector3>