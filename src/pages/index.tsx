import { LandingSection, QueryResultSection } from "@modules";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  return (
    <div className="h-screen ">
      {search ? <QueryResultSection search={search} /> : <LandingSection />}
    </div>
  );
}
