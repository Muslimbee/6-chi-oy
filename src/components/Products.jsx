import { useGlobalContext } from "../context";

function Products() {
    const {editProd,pname,setPname,price,setPrice,products,deleteProd,addProduct} = useGlobalContext();
    return (
        <div className="prodCont container d-flex justify-content-center ">
            <form className="prodSide d-flex flex-column gap-3 py-3" onSubmit={addProduct} >
                <input type="text" className="input input-group-text " value={pname} onChange={(e)=>setPname(e.target.value)} placeholder="Name" />
                <input type="text" className="input input-group-text " value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Price"/>
                <button className="btn btn-success ">
                    Add product
                </button>
                
            </form>
            <ul className="prodList  d-flex py-3 justify-content-center align-items-center text-center ">
                {products.map((data)=>{
                    return <li className='items' key={data.id} >
                        <img className='img  img-thumbnail ' src={data.img} alt="" />
                        <h2 className="prodName">
                            {data.name}
                        </h2>
                        <div className="item-con">
                        <h3 className="prodPrice">
                            {data.price}$
                        </h3>
                        <a className=" text-decoration-none text-success " href={data.id}>
                            info
                        </a>
                        </div>
                        <div className=" d-flex gap-3 align-items-center justify-content-center py-2">
                            <button className="btn btn-danger " onClick={()=>deleteProd(data.id)} >
                                delete
                            </button>
                            <button className="btn btn-success " onClick={()=>editProd(data.id)}>
                                Edit
                            </button>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default Products;