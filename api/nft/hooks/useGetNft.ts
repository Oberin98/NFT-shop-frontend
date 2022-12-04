import { useCallback, useEffect, useState } from "react";
import NftController from "../NftController";
import NFT from "../types/NFT";

export default function useGetNft(id: string | number) {
  const [nft, setNft] = useState<NFT | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetch = useCallback(() => {
    if (id) {
      setLoading(true);

      NftController.get(id)
        .then((nft) => {
          setNft(nft);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  useEffect(() => {
    if (id && !nft && !loading) {
      fetch();
    }
  }, [fetch, id, loading, nft]);

  return {
    nft,
    error,
    loading,
    setNft,
    refetch: fetch,
  };
}
