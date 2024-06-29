"use client";
import { SafeMode } from "~/app/components/screens/verify/safe-mode";
export default function Page() {
  return (
    <div className="h-screen bg-neutral-900 overflow-hidden">
      <SafeMode />
    </div>
  );
}
