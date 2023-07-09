import { NextResponse, NextRequest } from "next/server";
import { z } from "zod" 
import { supabase } from "../../../../lib/supabaseClient";

type Slug = { slug?: string}


export async function POST(req: NextRequest) {

  

  const {slug}:Slug = await req.json()

  await supabase.rpc("update_views", { page_slug: slug});
  
return NextResponse.json({ message: "Success"})
 
}
