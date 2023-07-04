import { supabase } from "../../../../lib/supabaseClient";
import { NextResponse, NextRequest } from "next/server";


type Slug = { slug?: string}


export async function POST(req: NextRequest) {

  const {slug}:Slug = await req.json()

  await supabase.rpc("update_views", { page_slug: slug});
  
return NextResponse.json({ message: "Success"})
 
}

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {

const { data } = await supabase.from("views").select("view_count").eq("slug", params.slug)


if (data) {return NextResponse.json({total: data[0]?.view_count || 0})}

return NextResponse.json({ message: "Invalid request",})

}
  


    

      


