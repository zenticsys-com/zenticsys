import { Card, CardContent } from "@/components/ui/card";
type PopularTagsProps = {
  tags: string[];
  onTagClick: (tag: string) => void;
};
const PopularTags = ({ tags, onTagClick }: PopularTagsProps) => {
  return (
    <div>
      <Card className="border-none shadow-lg">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Popular Tags
          </h3>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => onTagClick(tag)}
                className="text-xs px-3 py-1 bg-gray-100 hover:bg-[#ef3d23] hover:text-white transition-colors rounded-full"
              >
                {tag}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PopularTags;
