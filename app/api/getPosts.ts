type Post = {
  id: number;
  title: string;
  body: string;
};

export async function getPosts(): Promise<Post[]> {
  const res = await fetch("http://localhost:3001/posts", {
    next: {
      tags: ['posts']
    }
  });

  return res.json();
}
