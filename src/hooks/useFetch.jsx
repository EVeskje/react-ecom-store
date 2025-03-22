import { useState, useEffect } from "react";

export function useFetch(apiUrl) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      setHasError(false);
      const response = await fetch(url);
      const result = await response.json();
      setData(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (apiUrl) fetchData(apiUrl);
  }, [apiUrl]);

  return { data, isLoading, hasError };
}