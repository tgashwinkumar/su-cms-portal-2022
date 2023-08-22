import { FaCalendarCheck, FaKey } from "react-icons/fa";
import { VscFilePdf } from "react-icons/vsc";
import { BsCalendarWeek, BsSearch } from "react-icons/bs";

import Approval from "./Dean/Approval";
import Calendar from "./Dean/Calendar";
import Spotlight from "./Dean/Spotlight"
import Password from "./Dean/Password";
import PDFReportGen from "./Dean/PDFReportGen";
import { Navigate } from "react-router-dom";

const list = [
  {
    text: "Event Proposals",
    link: "/dean/approval",
    rlink: "approval",
    icon: <FaCalendarCheck />,
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
    text: "PDF Report Generation",
    link: "/dean/report-generation",
    rlink: "report-generation",
    icon: <VscFilePdf />,
    element: <PDFReportGen />,
  },
  // {
  //   text: "Spotlight View",
  //   link: "/dean/spotlight",
  //   rlink: "spotlight",
  //   icon: <BsSearch />,
  //   element: <Spotlight />,
  // },
  {
    text: "Password",
    link: "/dean/password",
    rlink: "password",
    icon: <FaKey />,
    element: <Password />,
  },
  {
    text: "default",
    link: "/dean",
    rlink: "",
    element: <Navigate to="/dean/approval" />,
  },
];

export default list;
