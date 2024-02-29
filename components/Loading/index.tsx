import React from "react";
import { Genre } from "@/types/movie";

function Loading({ genre }: { genre: Genre }) {
  return (
    <div className="w-full h-[328px]">
      <p className="text-lg uppercase font-semibold">{genre}</p>
      <div className="flex justify-center items-center">
        <iframe src="https://lottie.host/embed/d5346a37-e013-48f2-8347-942ebed7acae/bTpBNtSOPI.json"></iframe>
      </div>
    </div>
  );
}

export default Loading;
