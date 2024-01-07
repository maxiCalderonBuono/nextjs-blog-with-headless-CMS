import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";
import { z } from "zod";
import { supabase } from "../../../../lib/supabaseClient";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  if (!slug) {
    return new NextResponse("Invalid request", {
      status: 400,
    });
  }

  try {
    const checkedSlug = z.string().parse(slug);

    if (!checkedSlug) {
      return new NextResponse("Invalid post", {
        status: 400,
      });
    }

    const ipAddress = req.headers.get("x-forwarded-for") || "0.0.0.0";

    const currentUserId = createHash("md5")
      .update(ipAddress + process.env.IP_ADDRESS_SALT!, "utf8")
      .digest("hex");


    const sessionId = checkedSlug + "___" + currentUserId;

    const { data: userLikesData } = await supabase
      .from("session")
      .select("userLikes")
      .eq("id", sessionId);

    const { data: postLikesData } = await supabase
      .from("views")
      .select("postLikes")
      .eq("slug", checkedSlug);

    const postLikes = postLikesData?.[0]?.postLikes || 0;
    const userLikes = userLikesData?.[0]?.userLikes || 0;

    return NextResponse.json({
      postLikes: postLikes,
      userLikes: userLikes,
    });
  } catch (err) {
    return new NextResponse("Something went wrong", {
      status: 500,
    });
  }
}




export async function POST(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  const newCount = await req.json();

  const checkedCount = z.object({
    postLikes: z.number(),
    userLikes: z.number()
  }).parse(newCount);

  if (!slug) {
    return new NextResponse("Invalid request", {
      status: 400,
    });
  }

  if (!checkedCount) {
    return new NextResponse("Invalid request", {
      status: 400,
    });
  }


  try {
    const checkedSlug = z.string().parse(slug);

    if (!checkedSlug) {
      return new NextResponse("Invalid post", {
        status: 400,
      });
    }


    const ipAddress = req.headers.get("x-forwarded-for") || "0.0.0.0";


    const currentUserId = createHash("md5")
      .update(ipAddress + process.env.IP_ADDRESS_SALT!, "utf8")
      .digest("hex");

    const sessionId = checkedSlug + "___" + currentUserId;





    const { data: userLikesData } = await supabase
      .from("session")
      .select("userLikes")
      .eq("id", sessionId)
      .single();


    let updatedUserLikes;

    if (userLikesData) {

      updatedUserLikes = userLikesData.userLikes + 1;
      const res = await supabase
        .from("session")
        .update({ userLikes: updatedUserLikes })
        .eq("id", sessionId)



    } else {
      updatedUserLikes = newCount.userLikes
      await supabase
        .from("session")
        .insert({ id: sessionId, userLikes: updatedUserLikes })
    }


    const { data: postLikesData } = await supabase
      .from("views")
      .select("postLikes")
      .eq("slug", checkedSlug)
      .single();


    let updatedPostLikes;

    if (postLikesData) {

      updatedPostLikes = postLikesData.postLikes + 1;
      await supabase
        .from("views")
        .update({ postLikes: updatedPostLikes })
        .eq("slug", checkedSlug)
    } else {
      updatedPostLikes = newCount.postLikes
      await supabase
        .from("views")
        .insert({ slug: checkedSlug, postLikes: updatedPostLikes })
    }


    return NextResponse.json({
      postLikes: updatedPostLikes,
      userLikes: updatedUserLikes
    })
  } catch (err: any) {

    return new NextResponse("Something went wrong", {
      status: 500,
    });
  }
}
