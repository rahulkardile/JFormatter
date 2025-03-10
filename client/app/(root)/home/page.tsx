"use client";

import { Editor } from '@monaco-editor/react'
import React, { useState } from 'react'

const page = () => {

  const [jsonValue, setJsonValue] = useState("");

  return (
    <section className='bg-white text-black'>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex-row justify-between max-w-7xl">
        <div className="">
    <h2 className="text-2xl font-bold mb-4">JSON Editor</h2>
      <Editor
        height="400px"
        defaultLanguage="json"
        theme="vs-dark"
        value={jsonValue}
        onChange={(e: any) => setJsonValue(e.target.value)}
        options={{
          minimap: { enabled: false },
          formatOnPaste: true,
          formatOnType: true,
        }}
      />
        </div>
        <div className="">

        </div>
        <div className="">b

        </div>
      </div>
    </section>
  )
}

export default page