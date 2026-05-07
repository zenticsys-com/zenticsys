import { LuCircleCheck as CheckCircle } from "react-icons/lu";

import ZtsButton from "@/app/_components/ZtButton";
import Link from "next/link";

const FormSubmitSuccessMessage = () => {
  return (
    <div className="min-h-screen bg-gradient from-gray-50 to-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-12 h-12 text-success" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Thank You!</h1>
        <p className="text-xl text-gray-600 mb-8">
          We've received your request and will get back to you within 24 hours.
          One of our experts will reach out to schedule your consultation.
        </p>
        <div className="space-y-4">
          <div className="flex justify-center">
            <Link href={"/"}>
              <ZtsButton
                text="Return To Homepage"
                className="bg-primary hover:bg-primary-dark text-white"
              />
            </Link>
          </div>
          <div className="text-gray-500">
            <p>Need immediate assistance? Call us at +88 01629-403203</p>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default FormSubmitSuccessMessage;
