async function PostDetails({ postId }) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: { revalidate: 120 },
    }
  );
  const post = await response.json();

  return (
    <div>
      <div
        style={{
          width: "80%",
          background: "black",
          padding: "10px",
          borderRadius: "10px",
          color: "white",
          display: "flex",
          flexDirection: "column",
          marginBottom: "15px",
        }}
      >
        <h2>{post.title}</h2>
        <hr />
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export default PostDetails;
