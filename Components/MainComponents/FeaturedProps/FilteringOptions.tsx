import ScrollAnimation from "@/Animation/ScrollAnimation";
import { FilterButton } from "@/Components/Atoms/FilterButton";
import ListSelect from "@/Components/Atoms/ListSelect";
import { useEffect } from "react";

export const FilteringOptions: React.FC<{
  generes: string[];
  filterOptions: string[];
  selectedGenre: string;
  sortOption?: string | number;
  setSortOption?: (sort: string | number) => void;
  setSelectedGenre: (genre: string) => void;
}> = ({
  generes,
  filterOptions,
  selectedGenre,
  setSelectedGenre,
  sortOption,
  setSortOption,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-3 mt-2 ">
      <div className="flex flex-wrap gap-2 sm:gap-1 md:gap-1  ">
        {generes.map((b: string, index: number) => (
          <FilterButton
            text={b}
            key={index}
            selected={selectedGenre === b}
            onClick={() => setSelectedGenre(b)}
          />
        ))}
      </div>

      <ListSelect
        list={filterOptions}
        value={sortOption}
        onChange={setSortOption}
      />
    </div>
  );
};
