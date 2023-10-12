export const getServerSideProps = async() => {
  const posts = await api.getContentList({
    referenceName: 'posts',
    languageCode: 'en-us',
    sort: 'properties.date',
  });
  return {
    props: {
      posts: posts.items,
    },
  };
};
const Home = () => {
  return (
    <main className={`pb-14 mt-28 max-w-[800px] mx-auto`}>
      <h1 className="font-bold text-3xl mb-4">Welcome to my blog</h1>
      <p>There are no posts yet</p>
    </main>
  );
};
export default Home;
