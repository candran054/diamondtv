import React from "react";
import UserAuthForm from "./UserAuthForm";

export default function SignIn() {
  return (
    // <div className="flex h-screen justify-center items-center">
    <div className="flex flex-col justify-center py-6 px-4 space-y-6 text-center w-[360px] rounded-md bg-[#fed7aa]/20">
      <p className="text-lg font-semibold">Welcome</p>
      <p className="mt-6 text-sm max-w-xs mx-auto">
        By continuing, you agree to our User Agreement and Privacy
        Policy.
      </p>

      <UserAuthForm />
    </div>
    // </div>
  );
}
