import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts =(API)=>{
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data);
  }, []);

  return products;
}

export default useGetProducts;
