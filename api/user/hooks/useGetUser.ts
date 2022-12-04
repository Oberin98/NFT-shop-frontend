import { useCallback, useEffect, useState } from "react";
import User from "../types/User";
import UserController from "../UserController";

export default function useGetUser(id: string | number) {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetch = useCallback(() => {
    setLoading(true);

    UserController.get(id)
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (id && (!user || user.id !== id)) {
      fetch();
    }
  }, [fetch, id, user]);

  return {
    user,
    error,
    loading,
    refetch: fetch,
  };
}
