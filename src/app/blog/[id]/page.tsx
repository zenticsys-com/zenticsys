import { blogPosts } from "@/data/blogPosts";
import { notFound } from "next/navigation";
import BlogDetailsPage from "../_partials/BlogDetailsPage";
type Props = {
  params: {
    id: string;
  };
};

const DetailsPage = ({ params }: Props) => {
  const id = params.id;

  const post = blogPosts.find((item) => item.id === id);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <BlogDetailsPage key={id} blog={post} />
    </div>
  );
};

export default DetailsPage;
