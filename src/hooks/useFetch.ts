import axios from "axios";
import { useState, useEffect } from "react";

function useFetch(url: string): [any, boolean, any] {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setError(null);
      } catch (error: any) {
        setError(error.response.data.error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return [data, loading, error];
}

export default useFetch;
