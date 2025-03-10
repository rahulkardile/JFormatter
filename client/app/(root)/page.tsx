"use client";

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
<div className="min-h-screen w-full bg-[url('/21.svg')] bg-cover scale-105 bg-no-repeat bg-center">
      <div className="min-h-screen w-full bg-gradient-to-b from-white/40 to-white/40 flex justify-center items-center px-4">
        {/* Hero Section */}
        <section className="max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              JSON Formatter: {" "}
              <span className="text-[3a837d]">Simplify Your Data Workflow</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              Experience the ease of formatting, validating, and converting JSON
              data with this sleek online tool. Beautify code, minify data, or
              switch to CSV, XML, or YAML in just a few clicks.
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
        </section>
      </div>
    </div>
  );
};

export default Page;
