import { APITABLE_URL } from '@/consts/url';

import { Button } from './button';

type JobsResponse = {
  data: {
    records: JobRecord[];
  };
};

type JobRecord = {
  recordId: string;
  fields: {
    title: string;
    tag: string[];
    jd: string;
    lang: string;
  };
};

const Job = ({ job }: { job: JobRecord }) => (
  <div className="flex flex-col gap-8 p-10 bg-[#FFF] text-left">
    <div className="flex justify-between">
      <div className="flex flex-col gap-5">
        <p className="font-medium text-[28px] leading-[34px]">{job.fields.title}</p>
        <div className="flex gap-2">
          {job.fields.tag.map((_tag) => (
            <span
              className="flex justify-center items-center px-4 py-1.5 text-lg border-[1px] border-[#111] rounded-full"
              key={_tag}
            >
              {_tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-end grow">
        <Button>Apply</Button>
      </div>
    </div>
    <p className="max-w-[70%] text-lg text-[#656F6E]">{job.fields.jd}</p>
  </div>
);

export const Career = async () => {
  try {
    const res = await fetch(APITABLE_URL, {
      next: { revalidate: 60 },
      headers: new Headers({
        Authorization: `Bearer ${process.env.APITABLE_API_TOKEN}`,
        'Content-Type': 'application/json',
      }),
    });
    const data: JobsResponse = await res.json();
    const records = data?.data?.records;

    if (!Array.isArray(records)) {
      console.error('Records are not array');
      throw new Error();
    }

    const jobs = records.filter(
      (_record) => _record?.fields.title || _record.fields.jd || _record.fields.tag,
    );

    return (
      <div className="flex flex-col gap-4">
        {jobs.map((_job) => (
          <Job job={_job} key={_job.recordId} />
        ))}
      </div>
    );
  } catch (error) {
    console.error(error);
    return <p>Failed to load careers, try to refresh page</p>;
  }
};
