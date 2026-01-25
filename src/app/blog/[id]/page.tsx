const Page = ({ params }: { params: { blog: string } }) => {
  const { blog: blog } = params;

  return <div>My Post: {blog}</div>;
};

export default Page;
