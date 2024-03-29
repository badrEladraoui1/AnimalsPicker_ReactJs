import { useState, useEffect } from "react";

export function useFetch(fetchingFunction, initialValue) {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [dataFetched, setDataFetched] = useState(initialValue);

  useEffect(() => {
    async function fetchingData() {
      setIsFetching(true);
      try {
        const data = await fetchingFunction();
        setDataFetched(data);
      } catch (error) {
        setError({
          message: error.message || "Failed to fetch data",
        });
      }
      setIsFetching(false);
    }
    fetchingData();
  }, [fetchingFunction]);

  return {
    isFetching,
    error,
    dataFetched,
    setDataFetched,
    setError,
  };
}
