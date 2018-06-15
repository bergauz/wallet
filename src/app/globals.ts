import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  network: string = 'mainnet';

  public rpcHost(): string {
    if (this.network == "testnet") {
      return "https://testnet-rpc.gochain.io";
    }
    return "https://rpc.gochain.io";
  }

  public explorerHost(): string {
    if (this.network == "testnet") {
      return "https://testnet-explorer.gochain.io";
    }
    return "https://explorer.gochain.io";
  }
}