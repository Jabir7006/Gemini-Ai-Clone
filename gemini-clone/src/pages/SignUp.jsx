import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <SignUp signInUrl="/sign-in" />
    </div>
  );
}
