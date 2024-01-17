import SignIn from "@/app/components/SignIn";
import { Button } from "@/app/components/ui/Button";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex h-screen items-center justify-center inset-0">
      <div className="flex flex-col gap-1">
        <Link href="/" className="text-black">
          <Button variant="black">Home</Button>
        </Link>
        <SignIn />
      </div>
    </div>
  );
}
