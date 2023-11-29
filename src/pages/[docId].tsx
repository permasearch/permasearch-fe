import { useRouter } from "next/router";

export default function DocumentDetail() {
  const router = useRouter();
  return (
    <div className="py-10 px-20">
      <h1 className="text-center text-3xl font-bold text-blue-500">Title</h1>
      <p className="text-center text-lg mt-10 text-gray-800 font-medium">
        hello world lorem ipsum sir dolor
      </p>
    </div>
  );
}
