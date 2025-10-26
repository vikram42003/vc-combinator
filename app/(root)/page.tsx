import Searchbar from "@/components/Searchbar";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const params = await searchParams;
  const query = params.query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Author" },
      _id: 1,
      description: "Some description",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup
          <br />
          Connect with Entrepreneurs
        </h1>

        <p className="sub-heading max-w-3xl!">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions</p>

        <Searchbar placeholder="Search Startups..." />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">{query ? `Search result for ${query}` : "All Startups"}</p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => <StartupCard key={post._id} post={post} />)
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
