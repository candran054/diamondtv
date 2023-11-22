import React from "react";

export default function SignIn() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col justify-center py-3 text-center w-[360px] rounded-md bg-zinc-400">
        <p className="text-lg font-semibold">Welcome</p>
        <p className="mt-6">
          By continuing, you agree to our User Agreement and Privacy
          Policy.
        </p>
      </div>
    </div>
  );
}
