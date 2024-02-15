import React from "react";

export const VerbOptionButtons = ({chooseVerb, verbOption}) => {
  return (
    <div>
      <button
        className="rounded-2xl py-3 border-2 hover:border-[#00d0d2] border-[#008485] text-black font-bold w-20 text-center focus:bg-[#00d0d2]"
        onClick={() => chooseVerb(`${verbOption}`)}
      >
        {verbOption}
      </button>
    </div>
  );
};
