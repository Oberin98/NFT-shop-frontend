import { useCallback, useState } from "react";
import NftController from "../NftController";
import CreateNftInput from "../types/CreateNftInput";
import NFT from "../types/NFT";

export default function useCreateNft() {
  const [nft, setNft] = useState<NFT | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const create = useCallback((input: CreateNftInput) => {
    setLoading(true);

    return NftController.post(input)
      .then((nft) => {
        setNft(nft);
        return nft;
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    create,
    setNft,
    nft,
    loading,
    error,
  };
}
