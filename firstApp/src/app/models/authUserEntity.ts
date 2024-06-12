import { role } from "./role";

export interface authUserEntity{
  id:number;
  username: String;
  roles:role[];
}
