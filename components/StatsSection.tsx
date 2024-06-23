"use client";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { BiTransfer } from "react-icons/bi";
import { GiPresent } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import Loader from "./Loader";
import { FaTicket } from "react-icons/fa6";

interface GradientCardProps {
  title: string;
  icon: JSX.Element;
  description?: string;
  value: string;
  loading?: boolean;
}

const GradientCard = ({
  title,
  icon,
  description,
  value,
  loading,
}: GradientCardProps) => (
  <div
    className="
card

bg-gradient-to-br
from-solana-purple
to-solana-green

before:absolute
before:inset-0
before:h-full
before:w-full
before:bg-gradient-to-br
before:from-solana-purple
before:to-solana-green
before:blur-md
before:translate-x-1
before:translate-y-2
"
  >
    <div className="z-10 stat text-base-content">
      <div className="stat-figure text-accent ">{icon}</div>
      <div className="stat-title text-base-content">{title}</div>
      <div className="stat-value">
        {value} {loading && <Loader />}
      </div>
      <div className="stat-desc text-base-content">{description}</div>
    </div>
  </div>
);

const StatsSection = () => {
  const [users, setUsers] = useState<string>("--");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const dataCall = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://api.allorigins.win/get?url=${encodeURIComponent(
            "http://35.226.83.55:8080/users"
          )}`
        );

        const { totalUsers } = JSON.parse(data.contents);
        setUsers(totalUsers);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };

    dataCall();
  }, []);

  const stats = useMemo(() => {
    return [
      {
        title: "Users",
        icon: <FaUser size={40} />,
        value: users,
        description: "Total number of users",
        loading,
      },
      {
        title: "Service fees",
        icon: <AiFillDollarCircle size={40} />,
        value: "0.0005 SOL",
        description: "0.001 SOL if you don't hold $MICRO",
      },
      {
        title: "Token Pass",
        icon: <FaTicket size={40} />,
        value: "0.2 SOL",
        description: "Paid once, no extra fees",
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
        value: "100%",
        description: "Token holders don't pay any fees",
      },
    ];
  }, [users, loading]);

  return (
    <section id="stats" className="grid  grid-cols-1  gap-16 ">
      {stats.map((props, i) => (
        <GradientCard key={i} {...props} />
      ))}
    </section>
  );
};

export default StatsSection;
