import Button from "@/app/_components/Button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <div>
      <Card className="border-none hover:shadow-lg shadow-primary/10 shadow-xs bg-primary text-white">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <p className="text-red-100 mb-4">
            Get the latest insights delivered to your inbox.
          </p>
          <div className="space-y-3">
            <Input
              placeholder="Your email address"
              className="bg-white text-gray-900 placeholder-gray-500 focus-visible:ring-transparent"
            />
            <Button className="w-full bg-white text-primary hover:text-primary-dark cursor-pointer  hover:bg-gray-200">
              Subscribe
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Newsletter;
