import { Layout } from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function ProductDetail({ product }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    try{   await axios.delete("/api/products/" + id);
    router.push("/");}catch(error){ toast.error(error.response.data.message)}
 
  };

  return (
    <Layout>
      <div className="border-gray-200 shadow-md p-6 mb-6 text-center max-w-[50%]">
        <h1 className="text-3xl text-bold">{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <div className="space-x-2 py-2">
          <button
            className="bg-red-500 p-2 text-white hover:bg-red-700 rounded"
            onClick={() => handleDelete(product.id)}
          >
            delete
          </button>

          <button className="bg-blue-500 p-2 px-4 text-white hover:bg-blue-700 rounded" onClick={()=>router.push("/products/edit/" + product.id)}   >
            edit
          </button>

        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  // esto seria res: {data} y a esa data la llamo product
  const { data: product } = await axios.get(
    `http://localhost:3000/api/products/` + context.query.id
  );

  return {
    props: {
      product,
    },
  };
};
