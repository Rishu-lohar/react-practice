// CSR 

"use client";

import {useEffect , useState} from "react";

export default function Products(){

    const [products, setProduct] = useState<any>(null);

    useEffect( ()=> { 
        fetch("https://fakestoreapi.com/product/1")
        .then ((res)=> res.json())
        .then((data)=> {setProduct(data);

        });
    },[]);

    if(!product){
        return <p>Loading...</p>;
    }

    return(
        <div>
            <h1>{products.title}</h1>
            <p>Price: ${products.price}</p>
        </div>
    )
}

SSR = Server prepar the data and page at the request time . 

export default async function Posts(){

    const response = await fetch ('')

    const post = await respomnse.json();

    return (
        <main>
            <h1>Posts</h1>

            {Posts.slice(0.5).map(
                (post: {id:number; title: string})=>(
                    <div
                )
            )}
        </main>
    )
}