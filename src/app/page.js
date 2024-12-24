import DemoForm from "@/components/DemoForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="form-page min-h-screen">
      <div className="container mx-auto p-3">
        <div className="form-wrapper pt-10">
          {/* <div className="bg-form-fields max-w-xl mx-auto p-3 rounded-md">
            Quick Panel
          </div> */}
          <div className="bg-form max-w-md mx-auto p-8 mt-10 rounded-md">
            <div className="mb-5">
              <h2 className="text-3xl font-medium text-prim-txt">Create an account</h2>
              <p className="my-4 text-sm">Already have an account? <span className="text-cta underline">log in</span></p>
            </div>
            <div>
              <DemoForm />
            </div>
          </div>
        </div>
      </div>
    </main >
  );
}
