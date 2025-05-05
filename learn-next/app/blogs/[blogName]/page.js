import { notFound } from "next/navigation";

export default async function page({ params, searchParams }) {
  // console.log(await params);
  // console.log(await searchParams);
  var { blogName } = await params;

  if (!/^\d+$/.test(blogName)) {
    notFound();
  }
  return (
    <div>
      <h1>Blog on {blogName}</h1>
    </div>
  );
}
