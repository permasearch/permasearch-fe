import { Search2Icon } from "@chakra-ui/icons";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Skeleton,
  Stack,
} from "@chakra-ui/react";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { FC, useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";

interface QueryResultSectionProps {
  search: string;
}

interface Document {
  text: string;
  id: number;
  path: string;
  title: string;
}
export const QueryResultSection: FC<QueryResultSectionProps> = ({ search }) => {
  const [value, setValue] = useState<string>(search);
  const handleChange = (event: any) => setValue(event.target.value);
  const handlePage = (event: any, value: number) => {
    setCurrentPage(value);
  };

  const routeToQueryResult = (search: string) => {
    router.push(`?search=${search}`);
  };
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      setCurrentPage(1);
      routeToQueryResult(value);
    }
  };

  const router = useRouter();
  const [documents, setDocuments] = useState<Document[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(documents.length / 10);
  const startIndex = (currentPage - 1) * 10;
  const endIndex = startIndex + 10;
  const currentDocuments = documents.slice(startIndex, endIndex);

  useEffect(() => {
    axios
      .get(`/api/get-serp?search=${search}`)
      .then((res) => {
        {
          setDocuments(res.data.data), setIsLoaded(true);
        }
      })
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <div className="px-20 py-5">
      <div className="flex gap-4 items-center">
        <Link href={"/"}>
          {" "}
          <p className="text-blue-500 font-bold text-xl">Permasearch</p>
        </Link>
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
      </div>{" "}
      <div className="mt-10 flex flex-col gap-10">
        {isLoaded ? (
          documents.length > 0 ? (
            currentDocuments.map((d) => (
              <Link href={`/${d.path}`}>
                <div className="cursor-pointer animate-fade-in-fwd">
                  <h1 className="text-2xl font-bold text-blue-500 hover:text-blue-400 ease-in duration-100">
                    {d.title}
                  </h1>
                  <p className="text-blue-400 ">{d.path}</p>
                  <p className="text-gray-700 mt-3">{d.text}</p>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center font-black text-blue-500 text-2xl mt-20 animate-fade-in-fwd">
              No Documents Found
            </div>
          )
        ) : (
          <div className="cursor-pointer animate-fade-in-fwd">
            <Skeleton>
              <h1 className="text-2xl font-bold text-blue-500 hover:text-blue-400 ease-in duration-100"></h1>
            </Skeleton>
            <Skeleton>
              <p className="text-blue-400 "></p>
            </Skeleton>
            <Skeleton>
              <p className="text-gray-700 mt-3"></p>
            </Skeleton>
          </div>
        )}
      </div>{" "}
      {isLoaded && documents.length > 0 && (
        <Stack spacing={2} sx={{ mt: 10 }} className="animate-fade-in-fwd">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePage}
            defaultPage={1}
            color="primary"
            shape="rounded"
            size="large"
          />
        </Stack>
      )}
    </div>
  );
};
