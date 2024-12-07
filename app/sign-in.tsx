import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <SignIn path="/sign-in" signUpUrl="/sign-up" />
    </div>
  );
}
