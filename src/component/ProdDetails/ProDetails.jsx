import { useLoaderData } from "react-router-dom";

import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";

const ProDetails = () => {
  const loadProd = useLoaderData();
  const { name, image, price, short_description, rating, type, brand_name } =
    loadProd;

  const cart = {
    name,
    image,
    price,
    short_description,
    rating,
    type,
    brand_name,
  };
  console.log(loadProd);
  const handleCart = () => {
    fetch(
      " https://brand-shop-server-9twbnvq2p-nohan550s-projects.vercel.app/cart",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cart),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Yappy",
            text: "Added To Cart",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="text-xl font-medium py-6">{short_description}</p>
            <p className="text-2xl font-semibold py-5">Price: {price}</p>
            <button onClick={handleCart} className="btn btn-success text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProDetails;
