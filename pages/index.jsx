import Header from "@/components/Header";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import ProductBox from "@/components/ProductBox";
import Link from "next/link";
import { CartContext } from "@/components/CartContext";
import { useContext } from "react";
import { useState } from "react";
import CartButton from "@/components/CartButton";


export default function HomePage({ newProducts, productLoading }) {
  const {cartProducts} = useContext(CartContext);
  const [loading, setLoading] = useState(false);


  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <CartButton/>
      {productLoading && <Loading/>}
      <div className="flex justify-center flex-col w-screen items-center relative">
        <Header homeActive="open" />
        <NewProducts products={newProducts} />
        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  let newProducts = [];
  let loading = true;

  try {
    await mongooseConnect();
    newProducts = await Product.find({}, null, { sort: { '_id': -1 }, limit: 8 });
  } catch (error) {
    console.error("Error fetching data:", error.message);
  } finally {
    loading = false;
  }

  return {
    props: {
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      loading,
    },
  };
}
