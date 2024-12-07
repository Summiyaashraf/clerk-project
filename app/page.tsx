// page.tsx
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';

export default function HomePage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold text-center text-gray-900">Welcome to My Simple Project</h1>
    

      {/* Show content if user is signed in */}
      <SignedIn>
        <p>You are signed in! Enjoy your stay.</p>
      </SignedIn>

      {/* Redirect to SignIn page if user is signed out */}
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}
