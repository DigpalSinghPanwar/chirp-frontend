import { useEffect, useState, useCallback } from 'react';
import {axiosInstance} from '../api/axios';

export default function useGet(url, dependencies = []) {
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(() => {
    setLoading(true);
    return axiosInstance.get(url) 
      .then(res => {
        setRes(res);
        setError(null);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  useEffect(() => {
    let isMounted = true;
    
    fetchData()
      .then(() => {
        if (!isMounted) {
          setRes(null);
          setError(null);
        }
      });

    return () => { isMounted = false; };
  }, [...dependencies, url]); // add dependencies like search params if needed

  return { res, loading, error, refetch: fetchData };
}
