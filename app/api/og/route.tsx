import { ImageResponse } from "@vercel/og";
import { Baseline } from "lucide-react";
import { ogImageSchema } from "~/lib/og";
import { getYear } from "date-fns";

export const runtime = "edge";

const interRegular = fetch(
  new URL("../../../assets/fonts/Inter-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const interBold = fetch(
  new URL("../../../assets/fonts/CalSans-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: Request) {
  try {
    const fontRegular = await interRegular;
    const fontBold = await interBold;

    const url = new URL(req.url);
    const values = ogImageSchema.parse(Object.fromEntries(url.searchParams));
    const heading =
      values.heading.length > 140
        ? `${values.heading.substring(0, 140)}...`
        : values.heading;

    const { mode } = values;

    const postImage = values.postImage

    const fontSize = heading.length > 100 ? "70px" : "100px";

    const currentDate = new Date();
    const currentYear = getYear(currentDate);


    return new ImageResponse(
      (
        <div
          tw="flex h-full w-full  "
          style={{
            color: "#000",
            backgroundImage: `url(https:${postImage})`,
            backgroundSize: "cover",
            backgroundPosition: "right"
          }}
        >
          <div tw="flex flex-col items-start w-full h-full py-12 px-16"    style={{
            color: "#000",
            backgroundImage: "linear-gradient(to right, rgba(31,32,40,1) 40%, rgba(31,32,40,0.9) 60%, rgba(31,32,40,0.8) 70%, rgba(31,32,40,0.7) 80%, rgba(31,32,40,0.6))",
          }}>
          <div tw="flex items-center w-full">
            <p
              tw="text-3xl font-extrabold uppercase text-white"
              style={{
                fontFamily: "Cal Sans",
                fontStyle: "italic",
              }}
            >
              Mindenkié
            </p>
            <div tw="flex-grow ml-12 h-[2px] bg-gray-400"></div>
          </div>
          <div tw="flex flex-col flex-1 py-10">
            <div
              tw="flex text-xl font-bold tracking-tight text-white"
              style={{ fontFamily: "Inter", fontWeight: "normal" }}
            >
              <span tw="uppercase">{values.type}</span>
              <span>{`- Publicado el ${values.published}`}</span>
            </div>

            <div
              tw="flex flex-grow items-center leading-[1.1] text-[80px] font-bold text-white"
              style={{
                fontFamily: "Cal Sans",
                fontWeight: "bold",
                marginLeft: "-3px",
                fontSize,
              }}
            >
        
              {heading}
            </div>
          </div>
          <div tw="flex items-center w-full justify-between">
            <div
              tw="flex text-xl bg-[#35a1f4] text-gray-900 px-4 py-2 rounded-xl"
              style={{ fontFamily: "Cal Sans", fontWeight: "normal" }}
            >
              mindenkie.vercel.app
            </div>
            <div
              tw="flex items-center text-xl text-white font-bold"
              style={{
                fontFamily: "Cal Sans",
                fontWeight: "bold",
                display: "flex",
              }}
            >
              <span>Para tod@s- </span>
              <Baseline />
              <p>{`${currentYear} © `}</p>
            </div>
          </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: fontRegular,
            weight: 400,
            style: "normal",
          },
          {
            name: "Cal Sans",
            data: fontBold,
            weight: 700,
            style: "normal",
          },
        ],
      }
    );
  } catch (error) {
    return new Response("Failed to generate image", {
      status: 500,
    });
  }
}
