import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';

function MoreInfo() {
    const {products} = useGlobalContext()
    const {id} = useParams()
    const singleProd = products.find((item)=>item.id === id)
    return (
       <>
           <div className=' container d-flex justify-content-center flex-column align-items-center py-3'>
           <img className='img  img-thumbnail ' src={singleProd.img} alt="" />
            <h2 className=' text-success '>
                {singleProd.name}
            </h2>
            <h3 className='text text-danger '>
                {singleProd.price}$
            </h3>
           </div>
        </>          
    );
}

export default MoreInfo;