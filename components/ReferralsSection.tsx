import Card from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { TOKEN_SYMBOL } from "@/data/config";
import axios from "axios";
import UserRow from "./UserRow";

export const revalidate = 60

const ReferralsSection = async () => {
  const { data } = await axios.get(
    `http://34.171.163.77:8080/referrals`
  );

  return (
    <>
      <section id="referrals" className="w-full space-y-6">
        <SectionTitle title="Referral System" />
        <Card className="w-full">
          <span className="card-body p-4">
            <p className="text-2xl ">
              Use your referral link that you see on the{" "}
              <a className="text-accent">@micropump_bot</a> to earn referral
              points.
              <br /> For each user referred who deposits 0.1 SOL, you will be
              airdropped{" "}
              <strong className="text-accent">100k {TOKEN_SYMBOL}</strong>{" "}
              tokens.
            </p>
          </span>
          <SectionTitle title="LEADERBOARD" />
          <div className="overflow-x-auto mb-4">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>User</th>
                  <th>Referrals</th>
                </tr>
              </thead>
              <tbody>
                {(data?.leaderboard || []).map(({ publicKey, usersReferred }: any, idx: number) => (
                  <UserRow key={publicKey} idx={idx} publicKey={publicKey} usersReferred={usersReferred} />
                ))}
              </tbody>
            </table>
          </div>
          <div>

          </div>
        </Card>
      </section>
    </>
  );
};

export default ReferralsSection;
