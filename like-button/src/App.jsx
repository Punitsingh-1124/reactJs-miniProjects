//This is not Working (API Problem!)
// import { HeartIcon, SpinnerIcon } from "./icons";
// import { useState } from "react";

// export default function App() {
//   const [liked, setLiked] = useState(false);
//   const [isFetching, setIsFetching] = useState(false);
//   const [error, setError] = useState(null);

//   const handleLikeUnlike = async () => {
//     setError(null);
//     setIsFetching(true);

//     try {
//       const response = await fetch(
//         "https://www.greatfrontend.com/api/questions/like-button",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             action: liked ? "unlike" : "like",
//           }),
//         }
//       );

//       if (!response.ok) {
//         const res = await response.json();
//         throw new Error(res.message || "Something went wrong");
//       }

//       setLiked(!liked);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsFetching(false);
//     }
//   };

//   return (
//     <div>
//       <button
//         onClick={handleLikeUnlike}
//         className={`likeBtn ${liked ? "liked" : ""}`}
//         disabled={isFetching}
//       >
//         {isFetching ? <SpinnerIcon /> : <HeartIcon />}
//         {liked ? "Liked" : "Like"}
//       </button>
//       {error && <div className="error">{error}</div>}
//     </div>
//   );
// }

//This Code is Working
import { HeartIcon, SpinnerIcon } from "./icons";
import { useState } from "react";

export default function App() {
  const [liked, setLiked] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const handleLikeUnlike = async () => {
    setError(null);
    setIsFetching(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: liked ? "unlike" : "like",
          }),
        }
      );

      if (!response.ok) {
        const res = await response.json();
        throw new Error(res.message || "Something went wrong");
      }

      setLiked(!liked);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleLikeUnlike}
        className={`likeBtn ${liked ? "liked" : ""}`}
        disabled={isFetching}
      >
        {isFetching ? <SpinnerIcon /> : <HeartIcon />}
        {liked ? "Liked" : "Like"}
      </button>
      {error && <div className="error">{error}</div>}
    </div>
  );
}
