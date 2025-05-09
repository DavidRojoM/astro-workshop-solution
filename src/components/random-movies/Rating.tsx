import { actions } from "astro:actions";
import { useEffect, useState, type FC } from "preact/compat";

const Rating: FC<{
  id: string;
}> = ({ id }) => {
  const [rate, setRate] = useState<"bad" | "good" | "none">("none");

  useEffect(() => {
    actions.rate({
      id,
      rate,
    });
  }, [rate]);

  return (
    <div className="flex flex-row gap-2">
      <button
        className={`${
          rate === "none" ? "bg-gray-600" : "bg-gray-500"
        } text-white rounded px-2 py-1 cursor-pointer`}
        onClick={() => setRate("none")}
      >
        None
      </button>
      <button
        className={`${
          rate === "good" ? "bg-green-500" : "bg-gray-500"
        } text-white rounded px-2 py-1 cursor-pointer`}
        onClick={() => setRate("good")}
      >
        Good
      </button>
      <button
        className={`${
          rate === "bad" ? "bg-red-500" : "bg-gray-500"
        } text-white rounded px-2 py-1 cursor-pointer`}
        onClick={() => setRate("bad")}
      >
        Bad
      </button>
    </div>
  );
};

export default Rating;
