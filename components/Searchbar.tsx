"use client";

import { useTransition } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Search, X } from "lucide-react";

const Searchbar = ({ placeholder }: { placeholder: string }) => {
  const currentPath = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    startTransition(() => replace(`${currentPath}?${params.toString()}`));
  }, 300);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("query") as string;
    handleSearch.flush();
    handleSearch(query || "");
  };

  function resetSearch() {
    startTransition(() => replace(currentPath));
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        name="query"
        type="text"
        placeholder={placeholder}
        defaultValue={searchParams.get("query") || ""}
        className={`search-input ${isPending ? "opacity-50" : ""}`}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <div className="flex gap-2">
        {searchParams.has("query") && (
          <>
            <button type="button" onClick={resetSearch} className="search-btn text-white">
              <X className="size-5" />
            </button>
            <button type="submit" className="search-btn text-white">
              <Search className="size-5" />
            </button>
          </>
        )}
      </div>
    </form>
  );
};

export default Searchbar;
