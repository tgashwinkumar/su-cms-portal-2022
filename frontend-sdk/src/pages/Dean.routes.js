import { FaCalendarCheck, FaHome } from "react-icons/fa";
import { VscFilePdf } from "react-icons/vsc";
import { BsCalendarWeek, BsSearch } from "react-icons/bs";

import Approval from "./Dean/Approval";
import Calendar from "./Dean/Calendar";
import Spotlight from "./Dean/Spotlight"
import { Navigate } from "react-router-dom";

const list = [
  {
    text: "Proposals",
    link: "/dean/approval",
    rlink: "approval",
    icon: <FaCalendarCheck />,
    element: <Approval />,
  },
  {
    text: "Report Generation",
    link: "/dean/approval",
    rlink: "approval",
    icon: <VscFilePdf />,
    element: <Approval />,
  },
  {
    text: "Calendar View",
    link: "/dean/calendar",
    rlink: "calendar",
    icon: <BsCalendarWeek />,
    element: <Calendar />,
  },
  {
    text: "default",
    link: "/dean",
    rlink: "",
    element: <Navigate to="/dean/approval" />,
  },
  {
    text: "Spotlight View",
    link: "/dean/spotlight",
    rlink: "spotlight",
    icon: <BsSearch />,
    element: <Spotlight />,
  }
];

export default list;
