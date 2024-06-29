"use client";
import { useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

export function VerifyCode({ children }: { children: ReactNode }) {
  const code = typeof window !== "undefined" && localStorage.getItem("code");
  const router = useRouter();
  useEffect(() => {
    if (!code) {
      router.push("/secret/verify");
    }
  }, [code, router]);
  return <>{children}</>;
}
