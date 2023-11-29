import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { FC, useState } from "react";

interface QueryResultSectionProps {
  search: string;
}
export const QueryResultSection: FC<QueryResultSectionProps> = ({ search }) => {
  const [value, setValue] = useState<string>(search);
  const handleChange = (event: any) => setValue(event.target.value);
  const router = useRouter();
  const routeToQueryResult = (search: string) => {
    router.push(`?search=${search}`);
  };
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      routeToQueryResult(value);
    }
  };

  const dummy = [
    {
      title: "hello world",
      text: "hello",
      docId: 20,
    },
    {
      title: "helloa world",
      text: "hello",
      docId: 10,
    },
    {
      title: "hellos world",
      text: "hello",
      docId: 30,
    },
  ];
  return (
    <div className="px-20 py-5">
      <div className="flex gap-4 items-center">
        <p className="text-blue-500 font-bold text-xl">Permasearch</p>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Search2Icon color={"blue.500"} />
          </InputLeftElement>
          <Input
            width={400}
            border={"2px"}
            _hover={{
              borderColor: "blue.400",
            }}
            borderColor={"blue.400"}
            focusBorderColor="blue.300"
            value={value}
            onChange={handleChange}
            rounded={"full"}
            placeholder="Find your needs"
            onKeyDown={handleKeyDown}
          />
        </InputGroup>
      </div>
      <div className="mt-10 flex flex-col gap-10">
        {dummy.map((d) => (
          <Link href={`/${d.docId}`}>
            <div className="cursor-pointer">
              <h1 className="text-2xl font-bold text-blue-500">{d.title}</h1>
              <p className="text-gray-700 mt-2">{d.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
