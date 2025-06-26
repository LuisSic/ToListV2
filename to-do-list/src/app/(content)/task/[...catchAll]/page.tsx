import Link from "next/link";
export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1>404 - Page Not Found Content</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/task">Return Home You Invoice</Link>
    </div>
  );
}
