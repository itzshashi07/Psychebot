import { ref, onValue } from 'firebase/database';
import { database } from '../../Firebase/Firebase';
import { useState, useEffect, useCallback, useMemo, useContext } from 'react';
import { AuthContext } from '../../AuthContext/AuthContext';
export const useFinalData = () => {
           const [dataArray, setDataArray] = useState([]);

           const { id } = useContext(AuthContext)

           const dataRef = ref(database, 'todo/' );

           const fetchData = useCallback(() => {
                      const fetchDataPromise = new Promise((resolve) => {
                                 onValue(
                                            dataRef,
                                            (snapshot) => {
                                                       const data = snapshot.val();

                                                       if (data) {
                                                                  const dataArrayFromObject = Object.keys(data).map((key) => ({
                                                                             id: key,
                                                                             ...data[key],
                                                                  }));
                                                                  setDataArray(dataArrayFromObject);
                                                                  resolve(dataArrayFromObject);
                                                       }
                                            },
                                            {
                                                       onlyOnce: true,
                                            }
                                 );
                      });

                      return fetchDataPromise;
           }, [dataRef]);

           useEffect(() => {
                      const fetchDataAsync = async () => {
                                 await fetchData();
                      };

                      fetchDataAsync();
           }, [fetchData]);
           const memoizedDataArray = useMemo(() => dataArray, [dataArray]);

           return { memoizedDataArray, fetchData };
};
