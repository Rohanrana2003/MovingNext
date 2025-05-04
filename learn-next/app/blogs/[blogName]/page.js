export default async function page({ params, searchParams }) {
  // console.log(await params);
  // console.log(await searchParams);
  var { blogName } = await params;

  return (
    <div>
      <h1>Blog on {blogName}</h1>
    </div>
  );
}
