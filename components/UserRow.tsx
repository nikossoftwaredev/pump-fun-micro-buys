"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export interface UserReferrals {
  publicKey: string;
  usersReferred: number;
  idx: number;
}

const UserRow = ({ publicKey, usersReferred, idx }: UserReferrals) => {
  const [userData, setUserData] = useState({ profile_image: "", username: "" });

  useEffect(() => {
    const dataCall = async () => {
      const { data } = await axios.get(`https://frontend-api.pump.fun/users/${publicKey}`);

      setUserData(data);
    }

    dataCall()
  }, [publicKey])


  const ipfsId = userData.profile_image.split("/").pop()
  const imgUrl = `https://pump.mypinata.cloud/ipfs/${ipfsId}?img-width=16&img-dpr=2&img-onerror=redirect`


  return <tr key={publicKey} className="bg-base-200">
    <th>{idx + 1}</th>
    <td ><a className="flex gap-3 align-center" href={`https://pump.fun/profile/${publicKey}`}><img src={imgUrl} /> @{userData.username}</a></td>
    <td>{usersReferred}</td>
  </tr>
}

export default UserRow;