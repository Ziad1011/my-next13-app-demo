import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";

async function PostDetailsPage({ params }) {
  const postId = params.postId;

  const loadingJsx = <h1>wait...</h1>;

  return (
    <div style={{ padding: "50px" }}>
      <h1>Post Details</h1>

      <Suspense fallback={loadingJsx}>
        <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
}

export default PostDetailsPage;
