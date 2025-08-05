import React, { useEffect, useState } from "react";
import api from "../../services/api";
import CatalogoPageScreen from "../catalogo-page/catalogo-page-screen";

export function WomanTab() {
  const [womenProducts, setWomenProducts] = useState([]);

  useEffect(() => {
    async function fetchWoman() {
      try {
        const categories = 
        [
            'womens-bags',
            'womens-dresses',
            'womens-jewellery',
            'womens-shoes',
            'womens-watches'
        ];
        
        const responses = await Promise.all(
          categories.map((cat) => api.get(`/products/category/${cat}`))
        );
        const products = responses.flatMap(r => r.data.products);
        setWomenProducts(products);
      } catch (e) {
        console.error("Erro ao buscar produtos femininos", e);
      }
    }
    fetchWoman();
  }, []);

  return <CatalogoPageScreen products={womenProducts} />;
}
