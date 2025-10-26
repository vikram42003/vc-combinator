import Form from "next/form";
import SearchFormReset from "./SearchFormReset";

const SearchForm = () => {
  const query = "Something";

  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        placeholder="Search Startups"
        className="search-input"
      />

      <div className="flex gap-2">
        {query && (
          <SearchFormReset />
        )}
      </div>
    </Form>
  )
}

export default SearchForm