import axios from "axios";
import { AiFillDollarCircle } from "react-icons/ai";
import { BiTransfer } from "react-icons/bi";
import { GiPresent } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { FaTicket } from "react-icons/fa6";
import { SERVER_URL } from "@/data/config";
import GradientCard from "./GradientCard";

const StatsSection = async () => {
  const {
    data: { totalUsers },
  } = await axios.get(`${SERVER_URL}/users`);

  const {
    data: { tokenPassesCount },
  } = await axios.get(`${SERVER_URL}/token-passes`);

  const stats = [
    {
      title: "Users",
      icon: <FaUser size={40} />,
      value: totalUsers + 420,
      description: "Total number of users",
    },
    {
      title: "Service fees",
      icon: <AiFillDollarCircle size={40} />,
      value: "0.000125 SOL",
      description: "0.00025 SOL if you don't hold $MICRO",
    },
    {
      title: "Or Use Token Pass",
      icon: <FaTicket size={40} />,
      value: "0.1 SOL",
      description: `Paid once, no extra fees.Bought ${tokenPassesCount} times`,
    },
    {
      title: "Transaction fees",
      icon: <BiTransfer size={40} />,
      value: "Optimal",
      description: "Chose between Custom, Turbo and Optimal",
    },
    {
      title: "Fees Discount",
      icon: <GiPresent size={40} />,
      value: "10% - 50%",
      description: "Token holders get a discount",
    },
  ];

  return (
    <section id="stats" className="grid  grid-cols-1  gap-16 ">
      {stats.map((props, i) => (
        <GradientCard key={i} {...props} />
      ))}
    </section>
  );
};

export default StatsSection;
