const row = (label, value) => (
  <tr className="text-left flex flex-row justify-between px-2 ">
    <td className="p-[5px]">{label}</td>
    <td className="p-[5px] font-bold break-word text-right">{value}</td>
  </tr>
);

const rowStats = (label, value) => (
  <tr className="text-left flex flex-row justify-between px-2">
    <td className="mt-[0.1em] p-[5px]">{label}</td>
    <td className="mt-[0.1em] font-bold border-2 text-center px-2 sm:text-xs rounded-full border-[#FAFAFA] p-[5px] ">
      {value}
    </td>
  </tr>
);

export const Tables = ({ types, height, weight, abilities, statsValue }) => (
  <>
    {/* FEATURES */}
    <tbody className="bg-[rgba(255,255,255,0.1)] rounded-3xl  border-separate border-spacing-x-[2em] w-[100%] p-1 m-[2px] ">
      {row(
        "Species",
        `${types
          .map((type) => type.charAt(0).toUpperCase() + type.slice(1))
          .join(", ")}`
      )}
      {row("Height", `${height}0cm`)}
      {row("Weight", `${weight / 10}kg`)}
      {row(
        "Abilities",
        `${abilities
          .map((ability) => ability.charAt(0).toUpperCase() + ability.slice(1))
          .join(", ")}`
      )}
    </tbody>

    {/* STATS */}
    <tbody className="bg-[rgba(255,255,255,0.1)] rounded-3xl border-separate border-spacing-x-[2em] w-[100%] p-1 m-[2px]">
      {rowStats("HP", statsValue[0])}
      {rowStats("Attack", statsValue[1])}
      {rowStats("Defense", statsValue[2])}
    </tbody>
    <tbody className="bg-[rgba(255,255,255,0.1)] rounded-3xl border-separate border-spacing-x-[2em] w-[100%] p-1 m-[2px]">
      {rowStats("Sp. Atk", statsValue[3])}
      {rowStats("Sp. Def", statsValue[4])}
      {rowStats("Speed", statsValue[5])}
    </tbody>
  </>
);
