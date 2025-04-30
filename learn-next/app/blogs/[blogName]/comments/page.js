export default async function page({ params }) {
  console.log(params);
  const { blogName } = await params;
  return (
    <div>
      <h2>Showing comments of {blogName} Blog</h2>
    </div>
  );
}
