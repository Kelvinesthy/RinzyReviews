export interface IARTICLE {
  imageUrl: string;
  heading: string;
  date: string;
  message: string;
  comments: IComment[]
}

export interface IComment{
  id: number;
  name: string;
  email?: string;
  abstract: string
}

