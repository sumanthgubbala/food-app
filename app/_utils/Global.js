
import axios from "axios";



const GetCategory = async()  =>{

    try{
        const res = await axios.get("http://localhost:1234/category/AllCategory");
    console.log(res.data);
    return res.data;
    }
    catch(err){
        console.log(err);
        return ["empty"];
    }

}

export default GetCategory;