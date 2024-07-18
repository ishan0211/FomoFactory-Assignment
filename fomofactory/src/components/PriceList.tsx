"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './PriceList.module.css'

const PriceList = (props: any) => {
    type Data = {
        _id: string;
        current_price: any; 
        created_at: any;
      };

    const [data, setData] = useState<Data[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const API_URL = `http://127.0.0.1:8002/service/marketprice/?name=${props.coin}&page=1&page_limit=20`;

    const fetchData = async () => {
        try {
            const response = await axios.get(API_URL);
            console.log(API_URL)
            if(response && response.data)setData(response.data)
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }

    useEffect(() => {
      const id = setInterval(fetchData, 10000);
      return () => {
        clearInterval(id)
      }
    }, [API_URL])

    useEffect(() => {
        const getData = async () => {
          try {
            const result = await fetchData();
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setLoading(false);
          }
        };
    
        getData();
      }, [API_URL]);

      if (loading) {
        return <div>Loading...</div>;
      }

  return (
    <div className={styles.parent}>
      <table className={styles.pricetable}>
        <tbody>
                <tr>
                    <th>Price(USD)</th>
                    <th>Time</th>
                </tr>
                {(data||[]).map((item)=>{
                    return <tr key={item?._id}>
                        <td>{item?.current_price}</td>
                        <td>{item?.created_at}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default PriceList