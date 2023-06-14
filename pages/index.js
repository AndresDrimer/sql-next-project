
import { Roboto } from 'next/font/google'

import axios from 'axios'
import { Layout } from '@/components/Layout'

import ProductCard from '@/components/ProductCard'
const axios = require('axios');

const inter = Roboto({ subsets: ['latin'], weight:["500"] })

export default function Home({products}) {


  return (
    <Layout>
    {products.length?
      (
<div className='px-4 grid md:grid-cols-2  lg:grid-cols-3 gap-8'>
          {products.map(it=>(
            <ProductCard key={it.id} it={it}/>
            ))}</div>): <div><h1 className='text-center font-bold text-2xl mt-10 italic'>no products to be listed</h1></div>}
    </Layout>

  )
}

// esto es de servidor, se va a ejecutar antes esto que el codigo que esta arriba
export const getServerSideProps = async (context) => {
  const res = await axios.get("http://localhost:3000/api/products")

return {
  props:{
    products: res.data
  }
}
}

//hay otros modos mas pisteros de escribir esto, como : const { data } = await axios etc
//return {
//  props: {
//    products: data
//  },
// } ;
//o const {data: products}
//props:{
//  products}}

///COMO MANDAR ESTO A UN CONTEXTO PARA QUE LO TENGA TODA LA APP? O MEJOR HAY QUE MANDARLO SOLO A DONDE HAGA FALTA?