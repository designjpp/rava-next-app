import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
//import dynamic from 'next/dynamic'
import { useDispatch } from 'react-redux'
import { fetchProducts } from 'actions'
import { useProductSelector } from 'selectors'

import Layout from 'components/Layout'

import { LandingPageProps } from 'types/api'

const Products: NextPage<LandingPageProps> = () => {
  const [setProducts] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const dispatch = useDispatch()
  const { products } = useProductSelector()

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    const response = await dispatch(fetchProducts());
    setLoading(false);

    if (!response) return setError(true);

    setError(false);
    setProducts(products);
  };
  
  return (
    <Layout>

      <h1>Produtos</h1>
      {/*console.log(products) */}
      <div>
      <h1>Produtos</h1>
      </div>
    </Layout>
  )
}

export default Products