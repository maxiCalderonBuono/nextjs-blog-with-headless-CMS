// import { NextRequest, NextResponse } from "next/Server";
// import { createHash } from "crypto";
// import { z } from "zod";
// import { supabase } from "../../../../lib/supabaseClient";

// export async function GET(
//   req: NextRequest,
//   { params }: { params: { slug: string } }
// ) {
//   const slug = params.slug;

//   if (!slug) {
//     return new NextResponse("Invalid request", {
//       status: 400,
//     });
//   }

//   try {
//     const checkedSlug = z.string().parse(slug);
//     const ipAddress = req.headers.get("x-forwarded-for") || "0.0.0.0";
//     const currentUserId = createHash("md5")
//       .update(ipAddress + process.env.IP_ADDRESS_SALT!, "utf8")
//       .digest("hex");
//     const sessionId = checkedSlug + "___" + currentUserId;

//     const { data: userLikesData } = await supabase
//       .from("session")
//       .select("userLikes")
//       .eq("id", sessionId);

//     const { data: postLikesData } = await supabase
//       .from("views")
//       .select("postLikes")
//       .eq("slug", checkedSlug);

//     const postLikes = postLikesData?.[0]?.postLikes || 0;
//     const userLikes = userLikesData?.[0]?.userLikes || 0;

//     return NextResponse.json({
//       postLikes: postLikes,
//       userLikes: userLikes,
//     });
//   } catch (err: any) {
//     console.error(err.message);
//     return new NextResponse("Something went wrong", {
//       status: 500,
//     });
//   }
// }

// export async function POST(
//   req: NextRequest,
//   { params }: { params: { slug: string } }
// ) {
//   const slug = params.slug;
//   const { count } = await req.json();

//   if (!slug) {
//     return new NextResponse("Invalid request", {
//       status: 400,
//     });
//   }

//   try {
//     const checkedSlug = z.string().parse(slug);
//     const ipAddress = req.headers.get("x-forwarded-for") || "0.0.0.0";
//     const currentUserId = createHash("md5")
//       .update(ipAddress + process.env.IP_ADDRESS_SALT!, "utf8")
//       .digest("hex");
//     const sessionId = checkedSlug + "___" + currentUserId;

//     const { data: userLikesData } = await supabase
//       .from("session")
//       .select()
//       .eq("id", sessionId);

//     if (userLikesData) {
//       await supabase
//         .from("session")
//         .update({ userLikes: userLikesData[0].userLikes + count })
//         .eq("id", sessionId)
//         .select();
//     } else {
//       await supabase
//         .from("session")
//         .insert({ id: sessionId, userLikes: count })
//         .select();
//     }

//     const { data: postLikesData } = await supabase
//       .from("views")
//       .select()
//       .eq("slug", checkedSlug);

//     if (postLikesData) {
//       await supabase
//         .from("views")
//         .update({ postLikes: postLikesData[0].postLikes + count })
//         .eq("slug", checkedSlug)
//         .select();
//     } else {
//       await supabase
//         .from("views")
//         .insert({ slug: checkedSlug, postLikes: count })
//         .select();
//     }

//     const postLikes = postLikesData?.[0]?.postLikes || 0;
//     const userLikes = userLikesData?.[0]?.userLikes || 0;

//     return NextResponse.json({
//       postLikes: postLikes,
//       userLikes: userLikes,
//     });
//   } catch (err: any) {
//     console.error(err.message);
//     return new NextResponse("Something went wrong", {
//       status: 500,
//     });
//   }
// }
