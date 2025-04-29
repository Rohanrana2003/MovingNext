import Link from "next/link";

export default function page() {
  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        <li>
          <Link href="services/web">Web Development</Link>
        </li>
        <li>
          <Link href="services/seo">SEO</Link>
        </li>
      </ul>
    </div>
  );
}
