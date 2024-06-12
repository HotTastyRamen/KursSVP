import { authUserEntity } from "./authUserEntity";

export class Post{
  id: number;
  text: String;
  img64: String;
  authUserEntity: authUserEntity;
}
