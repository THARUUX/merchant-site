import Center from "@/components/Center";
import Header from "@/components/Header";
import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";
import ProductImages from "@/components/ProductImages";
import {useContext} from "react";
import {CartContext} from "@/components/CartContext";
import Loading from "@/components/Loading";
import BackButton from "@/components/BackButton";
import CartButton from "@/components/CartButton";
import React from "react";
import { useState } from "react";

export default function ProductPage({product}) {
  const {addProduct} = useContext(CartContext);
  console.log(product.description);

  const [desc, setDesc] = useState(product.description);

  const formattedDesc = desc.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  
  return (
    <>
      <CartButton/>
      <BackButton />
      <Header />
      <div className="w-full flex justify-center">
      <Center>
        <div className="sm:p-10 p-5 mb-24 w-full single-product-div-1 flex justify-center">
          <div className="flex w-full justify-center single-product-div-1-1">
            <div className="bg-white rounded md:w-1/2 p-10 h-max single-product-div-1-1-1">
              <ProductImages images={product.images} />
            </div>
            <div className="sm:p-10 p-5 md:w-1/2 h-full flex flex-col single-product-div-1-1-2">
              <div className="">
                <div className="text-3xl mb-5 text-main-dark">{product.title}</div>
                <p className="text-sm rounded product-description overflow-scroll mb-5 text-main-dark">{formattedDesc} </p>
              </div>
              <div className="flex gap-5 items-center justify-between">
                <div>
                  <div className="text-xl">Rs.{product.price}</div>
                </div>
                <div>
                  <button 
                    className=" items-center flex gap-2 rounded-sm py-1 px-3 shadow-lg add-to-cart-btn" 
                    block onClick={() => addProduct(product._id)} primary outline>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-5 h-5">
                          <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                      </svg>
                      Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Center>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const {id} = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    }
  }
}
