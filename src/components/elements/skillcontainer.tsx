import { Skillcard } from "./skillcard";

export const Skillcontainer = ({ SkillData }: any) => {
  return (
    <div className="mt-2 lg:w-[800px]">
      <div className="w-full">
        <Skillcard items={SkillData} />
        <Skillcard items={SkillData} direction="right" />
        <Skillcard items={SkillData} />
      </div>
    </div>
  );
};
