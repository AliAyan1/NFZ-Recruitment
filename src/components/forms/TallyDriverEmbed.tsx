"use client";

import Script from "next/script";
import { siteConfig } from "@/lib/site-config";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

function loadTallyEmbeds() {
  window.Tally?.loadEmbeds();
}

export function TallyDriverEmbed() {
  return (
    <div className="min-w-0 overflow-x-hidden">
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
        onLoad={loadTallyEmbeds}
      />
      <iframe
        data-tally-src={siteConfig.driverFormEmbedUrl}
        src={siteConfig.driverFormEmbedUrl}
        width="100%"
        height="400"
        title="RoadWorthy Recruitment – Van Driver Application"
        loading="lazy"
        className="block min-h-[420px] w-full max-w-full border-0"
      />
    </div>
  );
}
