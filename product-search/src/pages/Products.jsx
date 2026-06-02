import {useState} from "react";
import {useSearchParams} from "react-router-dom";
import {
    Container,
    Form,
    Button,
    Alert,
    Card,
    Row,
    Col
} from "react-bootstrap";
import products from "../data/products";

function Products(){

    // Hancle quesy URL
    const [searchParams,setSearchParams] = useSearchParams();

    // Read current URL values

    const currentCategory = searchParams.get("category") || "";
    const currentSort = searchParams.get("sort") || "";

    // State 
    const [category,setCategory] = useState(currentCategory);
    const [sort,setSort] = useState(currentSort);

    // Form submit function
    function handleSearch(event){

        // Stop Page refresh 
        event.preventDefault();

        // URL update 
        setSearchParams({
            category:category,
            sort:sort
        });
    }

    // copy array
    let filteredProducts = [...products];

    // Category filter
    if(category){
        filteredProducts=filteredProducts.filter(
            (product)=> product.category === category
        );

    }

    // Price sorting

    if(sort === "low"){
        
        filteredProducts.sort(
            (a,b)=> a.price - b.price
        );
    }
    else if (sort === "high"){

        filteredProducts.sort(
            (a,b) => b.price - a.price
        );
    }

    return(

        <Container className="main-container">

            {/* Heading */}
            <h1 className="heading"> Product Dashboard</h1>

            {/* Bootstrap Form */}

            <Form className="form-box" onSubmit={handleSearch}>

                <Form.Group className="mb-3">

                    <Form.Label>Select Category</Form.Label>

                    <Form.Select value={category} onChange={(e)=>setCategory(e.target.value)}>

                        <option value="">ALL</option>
                        <option value="laptop">Laptop</option>
                        <option value="mobile">Mobile</option>
                        
                    </Form.Select>
                </Form.Group>

                {/* Sorting dropdown */}
                <Form.Group className="mb-3">

                    <Form.Label>
                        Sorted By Price
                    </Form.Label>

                    <Form.Select
                        value={sort}
                        onChange={(e)=>setSort(e.target.value)}
                    >
                        <option value="">Default</option>
                        <option value="low">Low to High</option>
                        <option value="high">High to Low</option>

                    </Form.Select>
                </Form.Group>

                {/* Submit button */}
                <Button type="submit" varient="dark">Apply FIlter</Button>

            </Form>

            {/* Alert box */}

            <Alert 
                variant="info"
                className="mt-4"
            >
                <strong>Current Filters</strong>
                <br/>

                Category:{category || "All"}
                <br/>

                Sort:{sort || "Default"}
            </Alert>


            {/* Product cards */}

            <Row>

                {

                    filteredProducts.map((product) => (

                        <Col
                        md={6}
                        lg={4}
                        key={product.id}
                        >

                        <Card className="product-card">

                            <Card.Body>

                            <Card.Title>
                                {product.name}
                            </Card.Title>


                            <Card.Text>
                                Category:
                                {product.category}
                            </Card.Text>


                            <Card.Text>
                                Price:
                                ₹{product.price}
                            </Card.Text>

                            </Card.Body>

                        </Card>

                        </Col>
                    ))
                }


            </Row>


        </Container>
    );
}

export default Products;
