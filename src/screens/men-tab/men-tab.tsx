import React, { useEffect, useState } from "react";
import api from "../../services/api";
import CatalogoPageScreen from "../catalogo-page/catalogo-page-screen";

export function MenTab() {
  const [menProducts, setMenProducts] = useState([]);

  useEffect(() => {
    async function fetchMen() {
      try {
        const categories = 
        ['mens-shirts',
            'mens-shoes',
            'mens-watches'
        ];
        
        const responses = await Promise.all(
          categories.map((cat) => api.get(`/products/category/${cat}`))
        );
        const products = responses.flatMap(r => r.data.products);
        setMenProducts(products);
      } catch (e) {
        console.error("Erro ao buscar produtos masculinos", e);
      }
    }
    fetchMen();
  }, []);

  return <CatalogoPageScreen products={menProducts} />;
}
