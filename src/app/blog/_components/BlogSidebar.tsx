import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LuSearch as Search } from "react-icons/lu";
import Newsletter from "./Newsletter";
import PopularTags from "./PopularTags";

type BlogSidebarProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
};

const popularTags = [
  "Software Development",
  "AI & ML",
  "Cloud Computing",
  "Cybersecurity",
  "Digital Transformation",
  "Mobile Development",
];

const BlogSidebar = ({
  searchTerm,
  setSearchTerm,
  categories,
  selectedCategory,
  setSelectedCategory,
}: BlogSidebarProps) => {
  return (
    <div className="lg:col-span-1 space-y-8">
      {/* Search */}
      <Card className="border-none shadow-lg">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Search</h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card className="border-none shadow-lg">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Categories
          </h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`block w-full text-left p-2 rounded transition-colors ${
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

      {/* Popular Tags */}
      <PopularTags tags={popularTags} onTagClick={setSearchTerm} />

      <Newsletter />
    </div>
  );
};

export default BlogSidebar;
