import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "32px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          color: "#facc15",
          fontSize: "18px",
          fontWeight: 800,
          borderRadius: "8px",
        }}
      >
        H
      </div>
    ),
    size
  );
}
