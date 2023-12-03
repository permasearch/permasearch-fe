import { Skeleton } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface Document {
  text: string;
  id: number;
  path: string;
  title: string;
}
export default function DocumentDetail() {
  const router = useRouter();
  const [document, setDocument] = useState<Document>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    if (router.query.path) {
      let pathList = router.query.path as String[];
      let path = pathList.join("/");

      axios
        .get(`/api/get-doc?path=${encodeURIComponent(path)}`)
        .then((res) => setDocument(res.data))
        .catch((err) => toast.error(err.response.data.message));
    }
  }, [router.query.path]);

  return (
    <div className="p-20">
      <h1 className="text-center text-3xl font-bold text-blue-500 animate-fade-in-fwd">
        {document?.title}
      </h1>

      <p className="text-center text-blue-400 mt-1 animate-fade-in-fwd">
        {document?.path}
      </p>

      <p className="text-center text-lg mt-10 text-gray-800 font-medium animate-fade-in-fwd">
        {document?.text}
      </p>
    </div>
  );
}
