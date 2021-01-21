import React from "react";
import image from "../forest.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="world"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-5xl text-red-400 italic font-bold cursive">
          Nihao, Welcome To The World
        </h1>
      </section>
    </main>
  );
}
