import { useEffect, useState } from 'react';
import {axiosInstance} from '../api/axios';

export default function useGet(url, dependencies = []) {
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    axiosInstance.get(url)
      .then(res => {
        if (isMounted) setRes(res);
      })
      .catch(err => {
        if (isMounted) setError(err);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => { isMounted = false; };
  }, dependencies); // add dependencies like search params if needed

  return { res, loading, error };
}
