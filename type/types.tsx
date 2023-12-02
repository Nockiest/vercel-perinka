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

type Class = string
type FormattedDate = `${string}-${string}-${string}`;

type User = {
    email: string
    name?: string
    class?: Class
}
type Author = User

export type ArticleImage = {
    src: string|File
    alt: string
    position: 'left'|'right'
    size?: Vector2
}

export type Oppinion = {
    user: User
    textContent: string
    date: FormattedDate
}

export type Article =   {
    title: string;
    textContent: string;
    image?: ArticleImage;
    author: Author;
    oppinions:  Array<Oppinion>
} ;


export type Magazine =   {
    date: FormattedDate
    articles:  Array<Article>
    komiksSrc: string
    title: string
}


export type InfoPostProps = {
    title?: string;
    textContent: string;
    image?:ArticleImage
    author?: string;
    imageUrlOrId: string | File;
  }
  export type FirebaseInfoPostContent = Omit<InfoPostProps, 'imageSource' > ;
// {
    //   src: string;
    //   position: 'left' | 'right';
    //   alt: string;
    //   size: Vector2
    // };