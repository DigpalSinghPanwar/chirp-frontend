import { useState } from 'react';
import axios from '../api/axios';

export default function usePost() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (url, body) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post(url, body);
      return res.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { postData, loading, error };
}
