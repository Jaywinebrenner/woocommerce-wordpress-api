

const Products = ({props}) => {
    console.log("props", props);

    return (
        <div className="products">
            {
                props.products.map((p) => {
                    return (
                        <div className="product">
                            <h3>{p.name}</h3>
                            <img src={p.images[0].src}/>

                        </div>
                    )
                })
            }

        </div>
    )
}

export default Products;