/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect, useState } from "react";
import Heading from "../../../components/Heading";
import Table from "../../../components/Table";
import Dropdown from "../../../components/Dropdown";
import axios from "axios";
import { ProposalContext } from ".";
import { RefreshContext } from "../../../Refresher";
import { AUTH_URL, PROPOSAL_URL } from "../../../API/config";
import { IoCloseOutline } from "react-icons/io5";
import { toast } from "react-hot-toast";
import { fetchUpdateProposal } from "../../../API/calls";

const FacApprovedProposal = () => {
  const [data, setData] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [cid, setCid] = useState("");
  const [username, setUsername] = useState("");
  const { refreshPage, refreshToken } = useContext(RefreshContext);
  const url = PROPOSAL_URL;

  useEffect(() => {
    axios
      .get(`${AUTH_URL}/id/${localStorage.getItem("userId")}`, {})
      .then((res) => {
        setCid(res.data.caID);
      })
  }, []);

  useEffect(() => {
    axios
      .get(`${url}/facApproved/${cid}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refreshToken, cid]);

  const UndoButton = async (id) => {
    const postBody = {
      status: "pending"
    };
    toast.promise(fetchUpdateProposal(postBody, id)
      .then((res) => {
        refreshPage();
      }), {
      loading: "Undoing...",
      success: "Undo Successful",
      error: (err) => `Error: ${err.response.data.error}`,
    });
  };

  const { updateByID } = useContext(ProposalContext);

  return (
    <section className="px-8 py-8 w-full">
      <Heading>Faculty Approved Proposals</Heading>
      <div className="mt-8 w-full lg:pr-[5%] h-[calc(100vh-20rem)] overflow-auto">
        <Table
          theads={["Event", "Venue", "Event Date", "Created At"]}
          tdata={data}
          tkeys={["eventName", "venue", "startDate", "createdAt"]}
          className={`${data.length < 8
            ? "max-h-[calc(100vh-20rem)]"
            : "h-[calc(100vh-20rem)]"
            } w-full`}
          tratio="1fr 1fr 1fr 1fr"
          url={url}
          handleUpdate={(id) => updateByID(id)}
          UndoButton={UndoButton}
        />
      </div>
    </section>
  );
};

export default FacApprovedProposal;