import Searchbar from "../components/Searchbar";

export default function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup
          <br />
          Connect with Entrepreneurs
        </h1>

        <p className="sub-heading max-w-3xl!">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions</p>

        <Searchbar placeholder="Search Startups..."/>
      </section>
    </>
  );
}
