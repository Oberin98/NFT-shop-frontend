import { useCallback, useState } from "react";
import NftController from "../NftController";

export default function useDeleteNft() {
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const deleteOne = useCallback((id: string | number) => {
    setLoading(true);

    return NftController.delete(id)
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    deleteOne,
    loading,
    error,
  };
}
