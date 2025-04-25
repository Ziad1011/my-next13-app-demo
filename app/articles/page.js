import Link from "next/link";

function ArticalPage() {
  return (
    <div>
      <h1>Article Title</h1>

      <Link rel="stylesheet" href="./posts">
        <button>This is the content of the article.</button>
      </Link>
    </div>
  );
}

export default ArticalPage;
