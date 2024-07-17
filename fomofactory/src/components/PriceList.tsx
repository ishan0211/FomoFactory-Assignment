"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PriceList = (props: any) => {
    console.log(props)
    type Data = {
        id: number;
        name: string;
        symbol: string;
        market_cap_rank: any; 
        current_price: any; 
        created_at: any;
      };

    const [data, setData] = useState<Data[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const API_URL = `http://127.0.0.1:8001/service/users/?name=${props.coin}&page=1&page_limit=20`;

    const fetchData = async () => {
        console.log(API_URL)
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }

    useEffect(() => {
        const getData = async () => {
          try {
            const result = await fetchData();
            setData(result);
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
  <table>
     <tbody>
            <tr>
                <th>Price</th>
                <th>Time</th>
            </tr>
            {data.map((item)=>{
                return <tr key={item.id}>
                    <td>{item.current_price}</td>
                    <td>{item.created_at}</td>
                </tr>
            })}
        </tbody>
    </table>
  )
}

export default PriceList