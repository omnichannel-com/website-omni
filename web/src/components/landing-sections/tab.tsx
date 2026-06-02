"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface User {
  image: string;
  name: string;
  designation: string;
  description: string;
}

interface TabSectionProps {
  categories: string[];
  data: Record<string, User[]>;
}

export default function TabSection({
  categories = [],
  data = {},
}: TabSectionProps) {
  const [selected, setSelected] = useState<string>(categories[0] || "");

  return (
    <div className="container px-2 md:px-4 flex flex-col items-center">
      {/* Tab buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelected(category)}
            className={`px-5 py-2 rounded-ocx-pill font-display text-sm font-semibold transition-all duration-ocx-fast ${
              selected === category
                ? "bg-ocx-dark-blue text-white shadow-ocx-sm"
                : "bg-ocx-bg-subtle text-ocx-fg-muted hover:text-ocx-dark-blue border border-ocx-border"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="w-full bg-ocx-bg border border-ocx-border rounded-ocx-lg shadow-ocx-sm p-4 md:p-6">
        <div className="max-h-[70svh] overflow-y-auto">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data[selected]?.map((user, idx) => (
              <div
                key={idx}
                className="p-4 text-center bg-ocx-bg-subtle text-ocx-fg shadow-ocx-sm rounded-ocx-lg border border-ocx-border hover:shadow-ocx-md transition-all duration-ocx-fast"
              >
                <div className="flex flex-col gap-3 py-2">
                  <div className="w-16 h-16 mx-auto relative rounded-full overflow-hidden bg-ocx-bg-muted">
                    <Image
                      src={user.image}
                      alt={user.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-display font-bold text-ocx-dark-blue">{user.name}</p>
                    <p className="font-body text-sm text-ocx-fg-muted">{user.designation}</p>
                    <p className="text-sm text-ocx-fg-subtle mt-1 font-body">{user.description}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-block mt-2 bg-ocx-dark-blue text-white font-display font-semibold text-xs px-4 py-2 rounded-ocx-pill hover:bg-ocx-mauve transition-colors duration-ocx-fast self-center"
                  >
                    Try now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
