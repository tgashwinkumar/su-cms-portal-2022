import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Button from "../../../components/Button";
import Dropdown from "../../../components/Dropdown";
import FileUpload from "../../../components/FileUpload";
import Heading from "../../../components/Heading";
import Inputfield from "../../../components/TextInput";
import { OFFICE_BEARERS_URL, UPLOAD_URL } from "../../../API/config";
import { addOfficeBearers, uploadFile } from "../../../API/calls";

const AddMembers = () => {
  const [position, setPosition] = useState("");
  const [name, setName] = useState("");
  const [deptyos, setDeptyos] = useState("");
  const [acayear, setAcayear] = useState("");
  const [file, setFile] = useState(null);
  const [image_url, setImage_url] = useState("");

  const handlePost = async () => {
    toast.promise(uploadFile(file), {
      loading: "Uploading...",
      success: (res) => {
        setImage_url(res.data.url);
        const postBody = {
          role: position,
          name: name,
          deptyos: deptyos,
          year: acayear,
          image_url: res.data.url,
        };
        toast.promise(addOfficeBearers(postBody), {
          loading: "Adding...",
          success: "Added Successfully",
          error: (err) => `Error: ${err.response.data.error}`,
        });
        return "Uploaded";
      },
      error: "Error Occured",
    });
  };

  return (
    <section className="px-8 py-8 w-full">
      <Heading>Add Members</Heading>
      <div className="mt-8 w-full lg:w-4/5">
        <div className="flex items-center w-full space-x-4">
          <Inputfield
            valueState={[name, setName]}
            title="Name"
            placeholder="Enter name"
          />
          <Dropdown
            valueState={[position, setPosition]}
            title="Position"
            placeholder="Select a position"
            options={[
              "Chairperson",
              "Co-Chairperson",
              "Secretary(Male)",
              "Secretary(Female)",
              "Secretary(Science)",
            ]}
            className="w-full"
          />
        </div>
        <div className="flex items-center w-full space-x-4 mt-4">
          <Dropdown
            valueState={[acayear, setAcayear]}
            title="Year"
            placeholder="Select an academic year"
            options={(() => {
              let options = [];
              let date = Date.now();
              const year = new Date(date).getFullYear();
              for (let i = 0; i < 10; i++) {
                options.push(`${year - i}-${year - i + 1}`);
              }
              return options;
            })()}
            className="w-full"
          />
          <Inputfield
            valueState={[deptyos, setDeptyos]}
            title="Dept. & Year of Study"
            placeholder="Enter details"
          />
        </div>
        <div className="flex items-center w-full space-x-4 mt-4">
          <FileUpload
            fileState={[file, setFile]}
            title="Upload Image"
            className="w-1/2"
          />
        </div>
        <div className="flex items-center space-x-4 mt-8 w-1/2">
          <Button
            className="w-3/4"
            text="Add Member"
            handleClick={handlePost}
          />
        </div>
      </div>
    </section>
  );
};

export default AddMembers;
