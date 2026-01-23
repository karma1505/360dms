"use client";

import { Hero } from "@/app/home/hero"
import { Services } from "@/app/home/services"
import { About } from "@/app/home/about"
import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function ScrollHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const target = searchParams.get("target");
    if (target) {
      const scrollToElement = () => {
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.replaceState(null, "", window.location.pathname);
          return true;
        }
        return false;
      };

      if (!scrollToElement()) {
        const intervalId = setInterval(() => {
          if (scrollToElement()) {
            clearInterval(intervalId);
          }
        }, 100);

        const timeoutId = setTimeout(() => {
          clearInterval(intervalId);
        }, 2000);

        return () => {
          clearInterval(intervalId);
          clearTimeout(timeoutId);
        };
      }
    }
  }, [searchParams]);

  return null;
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-x-hidden">
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>
      <Hero />
      <Services />
      <About />
    </main>
  )
}
