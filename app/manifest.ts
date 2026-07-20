import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Approaches to IAS",
    short_name: "Approaches IAS",
    description:
      "Services and learning products for IAS coaching academies.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0047CC",
    icons: [
      {
        src: "/icon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
