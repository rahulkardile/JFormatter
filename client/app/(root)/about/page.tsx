import React from 'react'

const page = () => {
  return (
    <div className="mx-auto p-8 space-y-6 text-gray-800 bg-blue-50">
      <h1 className="text-5xl font-extrabold text-blue-600 text-center pt-14">JSON Genie – Your Data, Your Way</h1>
      
      <section className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-900">What is JSON Genie?</h2>
        <p className="mt-2 text-lg">
          JSON Genie is your ultimate toolkit for working with JSON data. Whether you're a developer,
          data analyst, or just someone dealing with structured data, our platform offers an easy-to-use
          interface to format, validate, and convert JSON effortlessly.
        </p>
      </section>
      
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-900">Key Features</h2>
        <ul className="mt-2 list-disc list-inside text-lg">
          <li>🚀 <strong>Beautify & Minify JSON</strong> – Instantly format or compress JSON data.</li>
          <li>🔍 <strong>JSON Validation</strong> – Detect errors and ensure valid JSON structure.</li>
          <li>🔄 <strong>Convert JSON</strong> – Easily switch between JSON, CSV, XML, and YAML.</li>
          <li>📶 <strong>Offline Support</strong> – Use JSON Genie anytime, even without an internet connection.</li>
          <li>⚡ <strong>Fast & Lightweight</strong> – Built for speed and efficiency.</li>
        </ul>
      </section>
      
      <section className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-900">Why Choose JSON Genie?</h2>
        <p className="mt-2 text-lg">
          Unlike other online tools, JSON Genie is designed for both casual users and professionals.
          With a sleek, distraction-free interface and powerful features, you can focus on what matters
          most—your data.
        </p>
      </section>
      
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-900">How It Works</h2>
        <ol className="mt-2 list-decimal list-inside text-lg">
          <li>Paste or upload your JSON data.</li>
          <li>Choose an action: beautify, minify, validate, or convert.</li>
          <li>Get your processed data instantly.</li>
          <li>Copy, download, or share your data effortlessly.</li>
        </ol>
      </section>
      
      <section className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-900">Get Started Today!</h2>
        <p className="mt-2 text-lg">
          JSON Genie is free to use and always evolving. Try it now and experience the magic of seamless
          JSON manipulation.
        </p>
      </section>
    </div>
  )
}

export default page