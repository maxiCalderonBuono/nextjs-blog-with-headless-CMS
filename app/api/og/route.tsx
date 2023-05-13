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

    const fontSize = heading.length > 100 ? "70px" : "100px";

    const currentDate = new Date();
    const currentYear = getYear(currentDate);

    return new ImageResponse(
      (
        <div
          tw="flex relative flex-col p-12 w-full h-full items-start"
          style={{
            color: "#000",
            backgroundImage: "linear-gradient(to bottom, #7F9CF5, #b2cfd5)",
          }}
        >
          <p
            tw="text-2xl font-bold uppercase"
            style={{
              fontFamily: "Cal Sans",
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          >
            Mindenkié
          </p>

          <div tw="flex flex-col flex-1 py-10">
            <div
              tw="flex text-xl uppercase font-bold tracking-tight"
              style={{ fontFamily: "Inter", fontWeight: "normal" }}
            >
              {values.type}
            </div>
            <div
              tw="flex leading-[1.1] text-[80px] font-bold"
              style={{
                fontFamily: "Cal Sans",
                fontWeight: "bold",
                marginLeft: "-3px",
                // fontSize,
              }}
            >
              {heading}
            </div>
          </div>
          <div tw="flex items-center w-full justify-between">
            <div
              tw="flex text-xl bg-[#35a1f4] text-white px-4 py-2 rounded-xl font-extrabold"
              style={{ fontFamily: "Inter", fontWeight: "normal" }}
            >
              mindenkie.vercel.app
            </div>
            <div
              tw="flex items-center text-xl"
              style={{
                fontFamily: "Inter",
                fontWeight: "normal",
                display: "flex",
              }}
            >
              <span>Para tod@s- </span>
              <Baseline />
              <p className="text-center">{`${currentYear} © `}</p>
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
