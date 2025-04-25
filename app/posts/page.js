import Todo from "../components/todo";
import Link from "next/link";

async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 120 },
  });
  const posts = await response.json();

  const postsJSX = posts.map((post) => {
    return (
      <Link href={`/posts/${post.id}`} key={post.id}>
        <div
          style={{
            width: "70%",
            margin: "auto",
            background: "black",
            padding: "10px",
            borderRadius: "10px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            marginBottom: "15px",
          }}
          key={post.id}
        >
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </Link>
    );
  });

  return (
    <>
      <div>
        <h1>Posts</h1>
        <div>{postsJSX}</div>
      </div>

      {/* <div>
        <Todo />
      </div> */}
    </>
  );
}
export default PostsPage;
