import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";
import { Button } from "@elements";
import { useRouter } from "next/navigation";
export const LandingSection = () => {
  const [value, setValue] = useState<string>("");
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

  return (
    <div className="h-full flex items-center  justify-center">
      <div>
        <div className="text-center text-blue-500 text-3xl font-black animate-slide-top">
          Permasearch
        </div>
        <InputGroup className="mt-5 animate-fade-in-fwd">
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
        <div className="flex justify-center mt-4 animate-fade-in-fwd-2">
          <Button type="primary" onClick={() => routeToQueryResult(value)}>
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};
