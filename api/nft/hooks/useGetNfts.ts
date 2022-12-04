import { useCallback, useEffect, useState } from "react";
import NftController from "../NftController";
import NFT from "../types/NFT";

export default function useGetNfts() {
  const [nfts, setNfts] = useState<NFT[] | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetch = useCallback(() => {
    setLoading(true);

    NftController.getAll()
      .then((nfts) => {
        setNfts(nfts);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!nfts || nfts.length === 0) {
      fetch();
    }
  }, [fetch, nfts]);

  return {
    nfts,
    error,
    loading,
    setNfts,
    refetch: fetch,
  };
}
