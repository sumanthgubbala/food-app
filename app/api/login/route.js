
import axios from "axios";
import { NextResponse } from "next/server";


export const POST = async (req) => {
    try {
        const body = await req.json();
        console.log(JSON.stringify(body));
        const res = await axios.post("http://localhost:1234/user/login",body, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return NextResponse.json({message:"Login Success", user:res.data}, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong", error: error.message },
            { status: 500 }
        );
    }
}