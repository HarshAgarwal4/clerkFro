import { SignedIn, SignedOut, SignInButton, UserButton, useAuth } from '@clerk/clerk-react'

export default function App() {

  const checkUser = async () => {
    try {
      console.log("requestr done")
      const res = await fetch("http://localhost:3000/protected", {
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include'
      });
      console.log("requestr done")
      const data = await res.json();
      console.log("Protected route response:", data);
    } catch (err) {
      console.error("Error checking user:", err);
    }
  };

  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <UserButton />
        <button onClick={checkUser}>Check Sign In</button>
      </SignedIn>
    </header>
  );
}
