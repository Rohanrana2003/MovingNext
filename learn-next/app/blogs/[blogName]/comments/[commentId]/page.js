export default async function comment({ params }) {
  console.log(await params);
  const { blogName, commentId } = await params;
  return (
    <div>
      <h2>
        {commentId} comment from {blogName} Blog
      </h2>
    </div>
  );
}
