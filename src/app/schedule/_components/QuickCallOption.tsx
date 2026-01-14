import Button from "@/app/_components/Button";
import { LuPhone as Phone } from "react-icons/lu";

import { Card, CardContent } from "@/components/ui/card";
import ZtsButton from "@/app/_components/ZtButton";

const QuickCallOption = () => {
  return (
    <div>
      <Card className="border-none hover:shadow-lg shadow-primary/10 shadow-xs bg-primary text-white">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">
            Need to Talk Right Now?
          </h3>
          <p className="text-red-100 mb-4">
            Have an urgent project or need immediate consultation? Give us a
            call!
          </p>
          <ZtsButton
            text="  Call Now: +88016 2940 3203"
            className="w-full border-white  text-white hover:bg-white hover:border-transparent hover:text-primary "
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickCallOption;
