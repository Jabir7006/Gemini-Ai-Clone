import { IoMdHelpCircleOutline } from "react-icons/io";
import { LuSettings } from "react-icons/lu";
import { MdOutlineHistory } from "react-icons/md";
import bulbSvg from "/bulb.svg";
import codeSvg from "/code.svg";
import pencilSvg from "/pencil.svg";
import youtubeSvg from "/youtube.svg";

export const sideBarIcon = [
  {
    name: "Help",
    icon: IoMdHelpCircleOutline,
  },
  {
    name: "Activity",
    icon: MdOutlineHistory,
  },
  {
    name: "Settings",
    icon: LuSettings,
  },
];

export const cardData = [
  {
    title: "Suggest videos to quickly solve a problem",
    icon: youtubeSvg,
  },
  {
    title: "Look up a Linux shell command for a specific task",
    icon: codeSvg,
  },
  {
    title: "Draft an email to a recruiter to accept a job offer",
    icon: pencilSvg,
  },
  {
    title: "Evaluate and rank common camera categories",
    icon: bulbSvg,
  },
];
