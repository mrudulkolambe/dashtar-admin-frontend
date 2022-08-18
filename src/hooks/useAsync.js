import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { SidebarContext } from '../context/SidebarContext';

const useAsync = (asyncFunction) => {
  const [data, setData] = useState([] || {});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const { isUpdate, setIsUpdate } = useContext(SidebarContext);

  useEffect(() => {
    let unmounted = false;
    let source = axios.CancelToken.source();

    asyncFunction({ cancelToken: source.token })
      .then((res) => {
        if (!unmounted) {
          setData(res);
          setError('');
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!unmounted) {
          setError(err.message);
          if (axios.isCancel(err)) {
            setError(err.message);
            setLoading(false);
            setData([]);
          } else {
            setError(err.message);
            setLoading(false);
            setData([]);
          }
        }
      });

    setIsUpdate(false);

    return () => {
      unmounted = true;
      source.cancel('Cancelled in cleanup');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdate]);

  return {
    data,
    error,
    loading,
  };
};

export default useAsync;
