"use client";
import ScrollAnimation from "@/Animation/ScrollAnimation";
import { FilterButton } from "@/Components/Atoms/FilterButton";
import ListSelect from "@/Components/Atoms/ListSelect";

export const FilteringOptions: React.FC<{
  generes: string[];
  filterOptions: string[];
  selectedGenre: string;
  sortOption?: string;
  setSortOption?: (sort: string) => void;
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
    <div className="flex flex-wrap items-center justify-between gap-4 mb-10 mt-8 px-3">
      <ScrollAnimation type="fade-left" delay={0.6} animationTime={0.4}>
        <div className="flex flex-wrap gap-2 sm:gap-1 md:gap-1  ">
          {generes.map((b, index: number) => (
            <FilterButton
              text={b}
              key={index}
              selected={selectedGenre === b}
              onClick={() => setSelectedGenre(b)}
            />
          ))}
        </div>
      </ScrollAnimation>

      <ScrollAnimation type="fade-right" delay={0.6} animationTime={0.4}>
        <ListSelect
          list={filterOptions}
          value={sortOption}
          onChange={setSortOption}
        />
      </ScrollAnimation>
    </div>
  );
};
