"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    <section className="py-16 md:py-24 lg:py-32 bg-ocx-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Tab buttons - brand pack pill style */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelected(category)}
              className={`px-5 py-2.5 rounded-ocx-pill font-display text-sm font-bold transition-all duration-ocx-fast ${
                selected === category
                  ? "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] shadow-ocx-sm"
                  : "bg-ocx-bg-muted text-ocx-fg-primary hover:bg-ocx-bg-subtle border border-ocx-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tab content - brand pack card style */}
        <div className="w-full bg-ocx-bg border border-ocx-border rounded-ocx-xl shadow-ocx-sm p-5 md:p-8">
          <div className="max-h-[70svh] overflow-y-auto">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {data[selected]?.map((user, idx) => (
                <div
                  key={`${user.name}-${idx}`}
                  className="p-5 text-center bg-ocx-bg-subtle text-ocx-fg shadow-ocx-sm rounded-ocx-lg border border-ocx-border hover:shadow-ocx-md hover:-translate-y-0.5 transition-all duration-ocx-fast"
                >
                  <div className="flex flex-col gap-4 py-2">
                    {/* Avatar with signature gradient */}
                    <div className="w-16 h-16 mx-auto relative rounded-full overflow-hidden bg-ocx-gradient flex items-center justify-center text-white font-display font-extrabold text-lg shadow-ocx-md">
                      {user.image ? (
                        <Image
                          src={user.image}
                          alt={user.name}
                          fill
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover"
                        />
                      ) : (
                        user.name.split(" ").map(n => n[0]).join("").slice(0, 2)
                      )}
                    </div>
                    <div>
                      <p className="text-lg font-display font-bold text-ocx-fg-primary">{user.name}</p>
                      <p className="font-body text-sm text-ocx-fg-muted">{user.designation}</p>
                      <p className="text-sm text-ocx-fg-subtle mt-1 font-body leading-ocx-base">{user.description}</p>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 mt-1 bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] font-display font-bold text-xs px-5 py-2.5 rounded-ocx-lg hover:bg-[var(--btn-primary-bg-hover)] transition-colors duration-ocx-fast self-center"
                    >
                      <ArrowRight className="w-4 h-4 stroke-[1.25]" />
                      Try now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
