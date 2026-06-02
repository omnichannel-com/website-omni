"use client";
import React, { useState } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import RoundedButton from "../buttons/rounded-button";

interface User {
  image: string;
  name: string;
  designation: string;
  description: string;
}

interface AccordionProps {
  categories: string[];
  data: Record<string, User[]>;
}
type Key = string | number;

export default function TabSection({
  categories = [],
  data = {},
}: AccordionProps) {
  const [selected, setSelected] = useState<Key>(categories[0] || "");

  const handleSelectionChange = (key: Key) => {
    setSelected(key);
  };

  return (
    <div className="container px-2 md:px-4 flex flex-col items-center">
      <Tabs
        radius="full"
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={handleSelectionChange as (key: Key) => void}
        className="w-full flex justify-center mb-4"
        color="primary"
      >
        {categories.map((category, index) => (
          <Tab key={index} title={category} className="text-center w-[95vw]">
            <Card className="bg-backgroundClr text-textClr self-center mx-auto w-full">
              <CardBody className="max-h-[70svh] overflow-y-auto">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {data[category]?.map((user, idx) => (
                    <div
                      key={idx}
                      className="p-3 text-center bg-cardClr text-xs text-textClr shadow-md rounded-xl"
                    >
                <div className="text-center mx-auto relative flex flex-col gap-4 py-4">
                  <div className="w-full h-[auto] relative">
                    <Image
                      src={user.image}
                      objectPosition="center"
                      alt={user.name}
                      width="60"
                      height="60"
                      className="self-center mx-auto mb-1"
                    />
                  <p className="w-full text-2xl font-bold">{user.name}</p>
                  </div>
                  <div>
                  <p className="font-semibold">{user.designation}</p>
                  <p className="text-md opacity-70">
                    {user.description}
                  </p>
                  </div>
                  <div>
                  <RoundedButton
                    text="Try now"
                    color="orange"
                    hover="white"
                    size="large"
                    customClass="!px-4 self-end !py-2 !px-3 text-md"
                    />
                    </div>
                </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
