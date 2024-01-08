import Post from "@/models/Post"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async (request, {params}) => {
    const {id} = params;
    //fetch data from MongoDB
    try{
        await connect()

        const post = await Post.findById(id)
        return new NextResponse(JSON.stringify(post), {status: 200})


    }catch(err){
        return new NextResponse("Database error", {status: 500})
    }

    //return new NextResponse("It works !", {status: 200})
}

export const DELETE = async (request, {params}) => {
    const {id} = params;
    //fetch data from MongoDB
    try{
        await connect()

        await Post.findByIdAndDelete(id)
        return new NextResponse("Post supprimé ! ", {status: 200})


    }catch(err){
        return new NextResponse("Database error", {status: 500})
    }

    //return new NextResponse("It works !", {status: 200})
}