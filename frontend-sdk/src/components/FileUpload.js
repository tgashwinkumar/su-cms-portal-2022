import React, { useEffect, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { AiFillExclamationCircle } from "react-icons/ai";
import toast from "react-hot-toast";

const FileUpload = ({
  fileState,
  fileErrorState = ["", (e) => { }],
  className = "",
  title = "",
}) => {
  const [file, setFile] = fileState;
  const [fileError, setFileError] = fileErrorState;
  const [fileName, setfileName] = useState("No file chosen");

  useEffect(() => {
    console.log("UPLOAD", file);
    if (file) {
      if (file.type === 'image/jpeg' || file.type === 'image/png') {
        setfileName(file.name);
      } else {
        toast.error("Please upload a valid image file (png or jpg)");
      }
    }
  }, [file]);

  return (
    <div
      className={`${className} flex flex-col items-start justify-center space-y-2 w-full overflow-x-hidden`}
    >
      <label className="text-blue text-base">{title}</label>
      <div className="flex space-x-2 items-center w-full">
        <div
          className={` px-4 py-2 w-full rounded-lg text-slate bg-gray bg-clip-padding bg-no-repeat border-2 border-solid ${fileError.length !== 0 ? "border-yellow" : "border-gray"
            } first-letter:transition ease-in-out m-0 focus:outline-none focus:border-cloud`}
        >
          <div className="w-full flex items-center space-x-6">
            <label className="bg-cloud p-3 rounded-lg w-fit whitespace-nowrap shadow-lg">
              <input
                type="file"
                className="hidden"
                onChange={(e) => {
                  e.preventDefault();
                  setFile(e.target.files[0]);
                  setFileError("");
                }}
              />
              <FiUpload />
            </label>
            <p className="whitespace-pre-wrap">{fileName}</p>
          </div>
        </div>
      </div>
      {fileError.length !== 0 && (
        <div className="flex items-center space-x-2 text-xs text-red">
          <AiFillExclamationCircle />
          <p className="">{fileError}</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
