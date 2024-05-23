import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {

    const dispatch = useDispatch();
    const handleAddItem = (item) =>{
        //Dispatch An Action
        dispatch(addItem(item))
    }

    // console.log(items)
  return (
    <div>
            {
                items.map((item)=>(
                    <div key={item?.card?.info?.Id} className='p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between'>
                        
                        <div className="w-9/12">
                        <div className='py-2'>
                            <span className='text-xl'>{item?.card?.info?.name}</span>
                            <span> - ₹ {""}{(item?.card?.info?.price ? item?.card?.info?.price : item?.card?.info?.defaultPrice)/100}</span>
                        </div>
                        <p className='text-xs'>{item?.card?.info?.description}</p>
                        </div>
                        <div className="w-3/12 min-w-40 ml-32 mh-36">
                            <div className="absolute">
                            <button className="p-2 mx-[100px] my-28 rounded-lg bg-black text-white shadow-lg" onClick={()=>handleAddItem(item)}>Add +</button>
                            </div>
                        <img src={CDN_URL + item?.card?.info?.imageId} className="w-56 h-36"/>
                        
                        </div>
                    </div>

                ))
            }
    </div>
  )
}

export default ItemList;