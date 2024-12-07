import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <>
      <SignedIn>
        <h1>Welcome to the Dashboard!</h1>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
