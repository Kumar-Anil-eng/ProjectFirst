import { user } from "@/app/util/db";
import { NextResponse } from "next/server";


export function GET(request,content){
 const userData = user.filter((item)=>item.id==content.params.id)
  return NextResponse.json(userData.length==0?{result:"no data found",success:false}:{result:userData[0],success:true},
    {status:200})
}

export async function PUT(request,content){
  let payload = await request.json()
  payload.id = content.params.id;
  if(!payload.id || !payload.name ||!payload.age || !payload.email){
    return NextResponse.json({result:"data is not found" ,success:false},{status:400})
  }
  
  return NextResponse.json({result: payload,success:true},{status:200})
}
