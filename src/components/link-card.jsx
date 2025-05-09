import {Copy, Download, LinkIcon, Trash} from "lucide-react";
import {Link} from "react-router-dom";
import {Button} from "./ui/button";
import useFetch from "@/hooks/use-fetch";
import {deleteUrl} from "@/db/apiUrls";
import {BeatLoader} from "react-spinners";

const LinkCard = ({url = [], fetchUrls}) => {
  const downloadImage = () => {
    const imageUrl = url?.qr;
    const fileName = url?.title; // Desired file name for the downloaded image

    // Create an anchor element
    const anchor = document.createElement("a");
    anchor.href = imageUrl;
    anchor.download = fileName;

    // Append the anchor to the body
    document.body.appendChild(anchor);

    // Trigger the download by simulating a click event
    anchor.click();

    // Remove the anchor from the document
    document.body.removeChild(anchor);
  };

  const {loading: loadingDelete, fn: fnDelete} = useFetch(deleteUrl, url.id);

  const baseUrl = import.meta.env.VITE_BASE_URL;

  return (
    <div className="flex flex-col md:flex-row gap-5 border p-4 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg">
      <img
        src={url?.qr}
        className="h-32 object-contain ring ring-purple-700 self-start"
        alt="qr code"
      />
      <Link to={`/link/${url?.id}`} className="flex flex-col flex-1">
        <span className="text-xl lg:text-3xl opacity-90 font-extrabold hover:underline cursor-pointer">
          {url?.title}
        </span>
        <span className="text-md lg:text-2xl text-blue-400 font-bold hover:underline cursor-pointer">
        https://snipplyurl.netlify.app/{url?.custom_url ? url?.custom_url : url.short_url}
        </span>
        <span className="text-sm overflow-hidden lg:text-xl flex items-center gap-1 hover:underline cursor-pointer">
          <LinkIcon className="p-1" />
          {url?.original_url}
        </span>
        <span className="flex items-end font-extralight ml-2 text-sm flex-1">
          {new Date(url?.created_at).toLocaleString()}
        </span>
      </Link>
      <div className="flex gap-2">
        <Button
        className="cursor-pointer"
          variant="ghost"
          onClick={() =>
            navigator.clipboard.writeText(`${baseUrl}/${url?.short_url}`)
          }
        >
          <Copy />
        </Button>
        <Button className="cursor-pointer" variant="ghost" onClick={downloadImage}>
          <Download />
        </Button>
        <Button
        className="cursor-pointer"
          variant="ghost"
          onClick={() => fnDelete().then(() => fetchUrls())}
          disable={loadingDelete}
        >
          {loadingDelete ? <BeatLoader size={5} color="white" /> : <Trash />}
        </Button>
      </div>
    </div>
  );
};

export default LinkCard;