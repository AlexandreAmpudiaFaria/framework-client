export interface Status {
  id: number;
  statusPost: string;
}

export interface User {
  id : number;
  username: string;
  password: string;
  enabled: boolean;
}

export class Post {
  id: number;
  name: string;
  text: string;
  date: Date;
  status: Status;
  user: User;

  constructor(post: Post) {
    this.id = post.id;
    this.name = post.name;
    this.text = post.text;
    this.date = post.date;
    this.status = post.status;
    this.user = post.user;
  }
}
