import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <SignIn signUpUrl="/sign-up" />
    </div>
  );
}
