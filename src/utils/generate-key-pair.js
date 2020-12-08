import tweetnacl from "tweetnacl";
import * as bf from "buffer";

const { Buffer } = bf;

export function generateKeyPair() {
  const keyPair = tweetnacl.sign.keyPair();
  return {
    public: Buffer.from(keyPair.publicKey).toString("hex"),
    secret: Buffer.from(keyPair.secretKey).toString("hex").slice(0, 64),
  };
}
