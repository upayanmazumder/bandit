import { NextResponse } from "next/server";

export default async function GET() {
  const manifest = {
    name: "Bandit",
    short_name: "Bandit",
    description:
      "Ever wanted to form a music band but found it too hard to find fellow band members? Bandit is here to help!",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#e35a33",
    orientation: "portrait",
    scope: "/",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
    lang: "en-US",
    dir: "ltr",
  };
  return NextResponse.json(manifest);
}
