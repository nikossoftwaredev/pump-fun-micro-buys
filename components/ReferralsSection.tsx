import Card from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { SERVER_URL, TOKEN_SYMBOL } from "@/data/config";
import axios from "axios";
import UserRow from "./UserRow";

export const revalidate = 60;

const ReferralsSection = async () => {
  const { data } = await axios.get(`${SERVER_URL}/referrals`);

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
              <br /> For each user referred who buys <b>3</b> tokens passes, you
              will earn one free token pass.
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
                {(data?.leaderboard || []).map(
                  ({ publicKey, usersReferred }: any, idx: number) => (
                    <UserRow
                      key={publicKey}
                      idx={idx}
                      publicKey={publicKey}
                      usersReferred={usersReferred}
                    />
                  )
                )}
              </tbody>
            </table>
          </div>
          <div></div>
        </Card>
      </section>
    </>
  );
};

export default ReferralsSection;
