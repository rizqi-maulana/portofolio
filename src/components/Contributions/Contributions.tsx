import Link from "next/link";
import { BsGithub as GithubIcon } from "react-icons/bs";

import SectionHeading from "@/components/elements/SectionHeading";
import SectionSubHeading from "@/components/elements/SectionSubHeading";

import Calendar from "./Calendar";
import Overview from "./Overview";
import { fetchGithubData } from "@/services/github";

type ContributionsProps = {
  username: string;
};

const Contributions = async ({ username }: ContributionsProps) => {
  const { data } = await fetchGithubData();

  const contributionCalendar =
    data?.contributionsCollection?.contributionCalendar;

  return (
    <section className="flex flex-col gap-y-2">
      <SectionHeading
        title="Contributions"
        icon={<GithubIcon className="mr-1 md:w-5d w-4" />}
      />
      <SectionSubHeading>
        <p className="text-neutral-400 md:text-sm text-xs">
          My contributions from last year on github.
        </p>
        <Link
          href={`https://github.com/${username}`}
          target="_blank"
          passHref
          className="md:text-sm text-xs font-code text-neutral-600 hover:text-neutral-400"
        >
          @{username}
        </Link>
      </SectionSubHeading>

      {!data && <div className="text-neutral-400">No Data</div>}

      {data && (
        <div className="space-y-3">
          <Overview data={contributionCalendar} />
          <Calendar data={contributionCalendar} />
        </div>
      )}
    </section>
  );
};

export default Contributions;
