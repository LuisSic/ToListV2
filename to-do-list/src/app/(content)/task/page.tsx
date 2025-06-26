import { auth0 } from "@/lib/auth0";

export default async function Home() {
  const session = await auth0.getSession();

  return (
    <div>
      <h1>Welcome, {session?.user.name}!</h1>
      <a href="/auth/logout">Logout</a>
    </div>
  );
}
