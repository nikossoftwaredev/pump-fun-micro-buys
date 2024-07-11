"use client";

import Logo from "./Logo";

export interface UserReferrals {
  publicKey: string;
  usersReferred: number;
  idx: number;
}

const UserRow = ({ publicKey, usersReferred, idx }: UserReferrals) => {
  return (
    <tr key={publicKey} className="bg-base-200">
      <th>{idx + 1}</th>
      <td>
        <a
          className="flex gap-3 align-center"
          href={`https://pump.fun/profile/${publicKey}`}
        >
          <img
            className="w-5 h-5"
            src="/images/logo-small.png"
            alt="MicroPump Bot Logo"
          />
          {publicKey.substring(0, 4)}...{publicKey.substring(38, 42)}
        </a>
      </td>
      <td>{usersReferred}</td>
    </tr>
  );
};

export default UserRow;
