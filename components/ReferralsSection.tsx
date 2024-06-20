"use client";
import Card from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { TOKEN_SYMBOL } from "@/data/config";

const ReferralsSection = () => {
  return (
    <>
      <section id="referrals" className="w-full space-y-6">
        <SectionTitle title="Referral System" />
        <Card className="w-full">
          <span className="card-body p-4">
            <p className="text-2xl mt-4">
              Use your referral link that you see on the{" "}
              <a className="text-accent">@micropump_bot</a> to earn referral
              points.
              <br /> For each user referred who deposits 0.1 SOL, you will be
              airdropped{" "}
              <strong className="text-accent">100k {TOKEN_SYMBOL}</strong>{" "}
              tokens.
            </p>
          </span>
        </Card>
      </section>
    </>
  );
};

export default ReferralsSection;
