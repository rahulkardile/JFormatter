import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <section className="h-screen flex flex-col lg:flex-row justify-center items-center text-center bg-cover bg-center bg-[url('/bg-image.jpg')] px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">

         {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-bold text-gray-800">
            JSON Formatter – Your Data, Your Way
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Meet JSON Formatter, your one-stop toolkit for formatting, validating, and converting JSON effortlessly. Whether you're beautifying code, minifying data, or switching formats to CSV, XML, or YAML, our sleek offline-capable platform makes data manipulation a breeze. Dive in and enjoy the magic!
          </p>
          <Link href="/contact">
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
              Get Started
            </button>
          </Link>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex justify-center">
          <Image 
            src="/landing-page.svg" 
            alt="Landing Page Illustration" 
            width={500} 
            height={500} 
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
