import { RandomReveal } from "react-random-reveal";
import "./EntryAnimator.css";

export default function EntryAnimator() {
  return (
    <div className="entryanimator w-screen h-screen flex items-center justify-center font-dmsans text-6xl bg-gradient-to-br from-blue-300 via-purple-400 to-pink-300 text-white">
      <div className="entryanimatortext">
        <RandomReveal isPlaying duration={2} characters={"Kenneth Ho"} />
      </div>
    </div>
  );
}
