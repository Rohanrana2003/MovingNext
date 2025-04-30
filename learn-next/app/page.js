import Link from "next/link";

export default function Home() {
  console.log("Running Next");
  return (
    <>
      <h1>Welcome</h1>
      <ul>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
      </ul>
    </>
  );
}
