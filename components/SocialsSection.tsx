import {
  TWITTER_URL,
  TELEGRAM_URL,
  DEX_TOOLS_URL,
  DEX_URL,
  PUMP_URL,
} from "@/data/config";
import { FaTelegramPlane, FaTwitter, FaInstagram } from "react-icons/fa";
import { SectionTitle } from "./SectionTitle";
import Card from "./Card";

const SOCIALS_INFO = [
  {
    url: TELEGRAM_URL,
    icon: <FaTelegramPlane size={25} className="text-[#1DA1F2]" />,
  },
  {
    url: TWITTER_URL,
    icon: <FaTwitter size={25} className="text-[#1DA1F2]" />,
  },
  {
    url: DEX_TOOLS_URL,
    icon: <img src="/images/tools.png" className="h-[30px]"></img>,
  },
  {
    url: PUMP_URL,
    icon: <img src="/images/pump.webp" className="h-[30px]"></img>,
  },
  {
    url: DEX_URL,
    icon: <img src="/images/screener.png" className="h-[35px]"></img>,
  },
];

const SocialsSection = () => {
  return (
    <section id="socials">
      <SectionTitle title="Socials" />
      <Card className="w-full">
        <div className="card-body flex flex-row flex-wrap items-center justify-center gap-8">
          {SOCIALS_INFO.map(({ url, icon }) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center btn btn-square btn-accent"
            >
              {icon}
            </a>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default SocialsSection;
