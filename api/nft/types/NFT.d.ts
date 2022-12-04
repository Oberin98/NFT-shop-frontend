import User from "../../user/types/User";

export default interface NFT {
  id: string | number;
  title: string;
  price: number;
  src: string;
  author: User;
}
