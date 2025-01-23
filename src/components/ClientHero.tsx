"use client";

import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./Hero"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export default function ClientHero() {
  return <Hero />;
}
