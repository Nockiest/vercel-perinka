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



export type InfoPostProps = {
    title?: string;
    textContent: string;
    image?: {
      imgSource: string;
      position: 'left' | 'right';
      alt: string;
      size: Vector2
    };
    author?: string;
    imageUrlOrId: string | File;
  }
  export type FirebaseInfoPostContent = Omit<InfoPostProps, 'imageSource' > ;
