import { useCallback, useState } from "react";
import NftController from "../NftController";
import UpdateNftInput from "../types/UpdateNftInput";

export default function useUpdateNft() {
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const update = useCallback((id: string | number, input: UpdateNftInput) => {
    setLoading(true);

    return NftController.put(id, input)
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    update,
    loading,
    error,
  };
}
