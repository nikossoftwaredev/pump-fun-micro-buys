import { TWITTER_URL, TELEGRAM_URL } from "@/data/config";
import { FaTelegramPlane, FaTwitter, FaInstagram } from "react-icons/fa";
import { IconBase } from "react-icons";
import { SectionTitle } from "./SectionTitle";
import Card from "./Card";

const SOCIALS_INFO = [
  {
    url: TELEGRAM_URL,
    icon: <FaTelegramPlane size={40} />,
  },
  {
    url: TWITTER_URL,
    icon: <FaTwitter size={40} />,
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
              className="flex items-center justify-center btn btn-square btn-primary"
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
