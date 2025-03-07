"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; 
import { useState } from "react";

const Page = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [formattedJson, setFormattedJson] = useState("");

  const handleJsonFormat = () => {
    try {
      const parsedJson = JSON.parse(jsonInput);
      const formatted = JSON.stringify(parsedJson, null, 2);
      setFormattedJson(formatted);
    } catch (error) {
      setFormattedJson("Invalid JSON!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-white">

      {/* Hero Section */}
      <section className="h-screen flex flex-col lg:flex-row justify-center items-center text-center px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          {/* Left Section */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              JSON Formatter – <span className="text-blue-600">Your Data, Your Way</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              Meet JSON Formatter, your one-stop toolkit for formatting, validating, and converting JSON effortlessly. Whether you're beautifying code, minifying data, or switching formats to CSV, XML, or YAML, our sleek offline-capable platform makes data manipulation a breeze. Dive in and enjoy the magic!
            </p>
            <Link href="/contact">
              <motion.button
                className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="lg:w-1/2 flex item- justify-center "
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.1 }}>
              <Image
                src="/landing-page.svg"
                alt="Landing Page Illustration"
                width={500}
                height={500}
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Live JSON Formatter Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Try It Out – Format Your JSON Now!
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <textarea
              className="w-full md:w-1/2 h-48 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder='Paste your JSON here, e.g. {"name": "John", "age": 30}'
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
            />
            <div className="w-full md:w-1/2 h-48 p-4 border rounded-lg bg-gray-50 overflow-auto">
              {formattedJson ? (
                <pre>{formattedJson}</pre>
              ) : (
                <p className="text-gray-500">Formatted JSON will appear here...</p>
              )}
            </div>
          </div>
          <div className="text-center mt-6">
            <button
              onClick={handleJsonFormat}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700"
            >
              Format JSON
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose JSON Formatter?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="p-6 bg-white rounded-lg shadow-md"
              whileHover={{ y: -10 }}
            >
              <h3 className="text-xl font-semibold text-gray-800">Format & Beautify</h3>
              <p className="mt-2 text-gray-600">
                Instantly format your JSON for better readability with a single click.
              </p>
            </motion.div>
            <motion.div
              className="p-6 bg-white rounded-lg shadow-md"
              whileHover={{ y: -10 }}
            >
              <h3 className="text-xl font-semibold text-gray-800">Convert Formats</h3>
              <p className="mt-2 text-gray-600">
                Easily switch between JSON, CSV, XML, and YAML formats.
              </p>
            </motion.div>
            <motion.div
              className="p-6 bg-white rounded-lg shadow-md"
              whileHover={{ y: -10 }}
            >
              <h3 className="text-xl font-semibold text-gray-800">Offline Support</h3>
              <p className="mt-2 text-gray-600">
                Use JSON Formatter anytime, anywhere—no internet required.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-8 bg-blue-600 text-white text-center">
        <h3 className="text-2xl font-semibold">Ready to Simplify Your Data Workflow?</h3>
        <Link href="/contact">
          <button className="mt-4 bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-gray-100">
            Get Started Now
          </button>
        </Link>
      </footer>
    </div>
  );
};

export default Page;