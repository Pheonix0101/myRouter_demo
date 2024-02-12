import React, { useEffect, useState } from "react";
import {useLoaderData} from 'react-router-dom'

function Github() {

    const data = useLoaderData();

//   const gitUrl = "https://api.github.com/users/Pheonix0101";
//   const accessToken = "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";
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch(gitUrl, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         // console.log(res);
//         setData(res);
//       });
//   });

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers:{data.followers}
      <img src={data.avatar_url} alt="git pic" width="300" />
    </div>
  );
}

export default Github;

export const githubInfo = async () => {
  const gitUrl = "https://api.github.com/users/Pheonix0101";
  const accessToken = "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";

 const result = await fetch(gitUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return result.json();
};
