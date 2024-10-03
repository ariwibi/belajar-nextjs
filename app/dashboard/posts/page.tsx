import { getPosts } from "../api/getPosts";
import { revalidatePath } from "next/cache";

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <>
      <section>
        {posts.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
      </section>
    </>
  );
}
