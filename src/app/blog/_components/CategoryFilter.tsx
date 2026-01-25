import { Card, CardContent } from "@/components/ui/card";

type CategoryFilterProps = {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

const CategoryFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <Card className="border-none hover:shadow-lg shadow-primary/10 shadow-xs">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>

        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`block w-full text-left p-2 transition-colors ${
                selectedCategory === category
                  ? "bg-[#ef3d23] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryFilter;
