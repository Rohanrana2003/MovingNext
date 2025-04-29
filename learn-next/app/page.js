import Image from "next/image";
import Link from "next/link";

export default function Home() {
  console.log("Running Next");
  return (
    <>
      <h1>Welcome</h1>
      <Link href="/services">Services</Link>
    </>
  );
}
