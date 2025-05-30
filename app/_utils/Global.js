
import axios from "axios";



const GetCategory = async()  =>{

    try{
        const res = await axios.get("http://localhost:1234/category/AllCategory");
    console.log(res.data);
    return res.data;
    }
    catch(err){
        console.log(err);
        return [];
    }

}

export default GetCategory;


export const GetItemBy = async(id) =>{
    try{
        const res = await axios.get(`http://localhost:1234/product/category/${id}`);
    console.log(res.data);
    return res.data;
    }
    catch(err){
        console.log(err);
        return [];
    }

}
