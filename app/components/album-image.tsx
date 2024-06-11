"use client";
import React, { useEffect, useState } from "react";
import ColorThief from "colorthief";

interface AlbumImageProps {
  imageUrl: string;
  title: string;
  artist: string;
}

export function AlbumImage({ imageUrl, title, artist }: AlbumImageProps) {
  const [shadowColor, setShadowColor] = useState("rgba(0, 0, 0, 0.3)");

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageUrl;

    img.onload = () => {
      try {
        const colorThief = new ColorThief();
        const result = colorThief.getColor(img);
        const dominantColor = `rgb(${result[0]}, ${result[1]}, ${result[2]})`;
        setShadowColor(dominantColor);
      } catch (err) {
        console.error("Error extracting colors:", err);
      }
    };
  }, [imageUrl]);

  return (
    <div className="flex flex-col justify-end items-end w-full px-6 py-2.5">
      <img
        className="relative w-28 h-28 rounded-md mb-2"
        src={imageUrl}
        style={{ boxShadow: `0 4px 15px ${shadowColor}` }}
        alt={title}
      />
      <p className="font-semibold">{title}</p>
      <p className="text-light">{artist}</p>
    </div>
  );
}
