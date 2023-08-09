import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex center flex-col items-center">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source platform to create, share and discover
        creative AI prompts
      </p>

      <Feed />
    </section>
  );
};

export default Home;
