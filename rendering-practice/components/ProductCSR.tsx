"use client";

import { useEffect, useState } from "react";

interface Product {
    id: number;
    title: string;
    price: number;
}

export default function ProductCSR() {

    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {

        fetch("http://fakestoreapi.com/products/1")
            .then((response) => response.json())
            .then((data: Product) => {
                setProduct(data);
                setLoading(false);
            })
    }, []);

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center">

                <p className="text-xl font-semibold">
                    Loading Product...
                </p>
            </div>
        );
    }

    return (

        <div className=" flex min-h-screen items-center justify-center bg-grey-100">

            {/* Product Card */}
            <div className="w-80 rounded-xl bg-blue-800  p-6 shadow-lg">

                <h1 className="mb-4 text-xl font-bold text-black">
                    Product Details
                </h1>

                <p className="mb-2">
                    <span className="font-semibold text-black ">Product ID:</span>{" "}
                    {product?.id}
                </p>

                <p className="mb-2">
                    <span className="font-semibold text-black ">Name:</span>{" "}
                    {product?.title}
                </p>

                <p>
                    <span className="font-semibold text-black">Price:</span>{" "}
                    ${product?.price}
                </p>

            </div>
        </div>
    )


}
