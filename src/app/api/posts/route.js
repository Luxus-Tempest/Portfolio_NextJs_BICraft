import Post from "@/models/Post"
import connect from "@/utils/db"
import { NextResponse } from "next/server"


export const GET = async (request) => {

    const url = new URL(request.url);
    
    const username = url.searchParams.get("username")

    //fetch data from MongoDB
    try{
        await connect()

        const posts = await Post.find( username && {username})
        return new NextResponse(JSON.stringify(posts), {status: 200})


    }catch(err){
        return new NextResponse("Database error", {status: 500})
    }

    //return new NextResponse("It works !", {status: 200})
}


export const POST = async (request) => {

    const body = await request.json()
    const newPost = new Post(body);

    //fetch data from MongoDB
    try{
        await connect()

        await newPost.save(); //Pour enregister dans la BD

        const posts = await Post.find( username && {username})
        return new NextResponse("Post crée avec succès !", {status: 201})


    }catch(err){
        return new NextResponse("Database error", {status: 500})
    }

    //return new NextResponse("It works !", {status: 200})
}