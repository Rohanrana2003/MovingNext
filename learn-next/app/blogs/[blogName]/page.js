export default async function page({ params, searchParams }) {
  console.log(await params);
  console.log(await searchParams);

  return (
    <div>
      <h1>Blog on {params.blogName}</h1>
    </div>
  );
}
