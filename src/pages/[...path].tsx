import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface Document {
  id: number;
  status: true;
  path: string;
  text: string;
}

export default function DocumentDetail() {
  const router = useRouter();
  const [document, setDocument] = useState<Document>();

  useEffect(() => {
    if (router.query.path) {
      let pathList = router.query.path as String[];
      let path = pathList.join("/");
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/?path=${path}`)
        .then((res) => setDocument(res.data))
        .catch((err) => toast.error(err.response.data.message));
    }
  }, [router.query.path]);

  return (
    <div className="p-20">
      <h1 className="text-center text-3xl font-bold text-blue-500">
        {document?.path}
      </h1>
      <p className="text-center text-lg mt-10 text-gray-800 font-medium">
        {document?.text}
      </p>
    </div>
  );
}
