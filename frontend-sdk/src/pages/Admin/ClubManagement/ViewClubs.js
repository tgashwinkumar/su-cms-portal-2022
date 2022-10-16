/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { HiOutlineTrash } from "react-icons/hi";
import Heading from "../../../components/Heading";
import Table from "../../../components/Table";

const ViewClubs = () => {
  const [position, setPosition] = useState("");
  const [name, setName] = useState("");
  const [deptyos, setDeptyos] = useState("");
  const [acayear, setAcayear] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json);
      });
  }, []);

  return (
    <section className="px-8 py-8 w-full">
      <Heading>View Members</Heading>
      <div className="mt-8 w-full lg:w-4/5">
        <Table
          theads={["Club", "ID"]}
          tdata={data}
          tkeys={["clubName", "clubId"]}
          className="h-[calc(100vh-20rem)] w-full"
        />
      </div>
    </section>
  );
};

export default ViewClubs;
