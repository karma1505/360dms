"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function ScrollLogic() {
    const searchParams = useSearchParams();

    useEffect(() => {
        const target = searchParams.get("target");
        if (target) {
            const scrollToElement = () => {
                const element = document.getElementById(target);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    // Remove the query param from URL without refreshing
                    window.history.replaceState(null, "", window.location.pathname);
                    return true;
                }
                return false;
            };

            // Attempt immediately
            if (!scrollToElement()) {
                // Retry every 100ms for up to 2 seconds to allow for page transitions/mounting
                const intervalId = setInterval(() => {
                    if (scrollToElement()) {
                        clearInterval(intervalId);
                    }
                }, 100);

                // Safety timeout to clear interval
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

export function ScrollManager() {
    return (
        <Suspense fallback={null}>
            <ScrollLogic />
        </Suspense>
    );
}
