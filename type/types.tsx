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
type Author =  Required<User>;

export type MagazineReleaseDate = '2/2023'| '4/2023'|'6/2023'| '9/2023'
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
    test: File
    releaseDate: MagazineReleaseDate
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
    releaseDate:MagazineReleaseDate
  }
  export type FirebaseInfoPostContent = Omit<InfoPostProps, 'imageSource' > ;
// {
    //   src: string;
    //   position: 'left' | 'right';
    //   alt: string;
    //   size: Vector2
    // };