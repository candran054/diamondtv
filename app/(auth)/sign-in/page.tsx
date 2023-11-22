import SignIn from "@/app/components/SignIn";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="absolute inset-0">
      <SignIn />
    </div>
  );
}
