import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "Real World Assets"
  export const SYMBOL: string = "RWA";
  export const MINT_PRICE: u64 = 0;
  export const MINT_FEE: bool = false;
  export const MAX_SUPPLY: u64 = 3000;
  export const URI: string = "https://bafybeigetxw5yx7w5ct7vh3dlujoujtuyybwddkw7ky6hnt3k3x7htns3y.ipfs.nftstorage.link/";
  export const OWNER: Uint8Array = Base58.decode("1DDrWPzWZF92sxvX2FuXyKdy4XHXMFaqht");

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("");
  export const ADDRESS_PAY: Uint8Array = Base58.decode("");
}
