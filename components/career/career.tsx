'use client';

import { useMemo, useState } from 'react';

import { cn } from '@/utils/classnames';

import { Button } from '../button';
import { JobRecord, JobTypes } from './types';

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

export const Career = ({ jobs }: { jobs: JobRecord[] }) => {
  const [selectedJobType, setSelectedJobType] = useState<JobTypes>(JobTypes.All);

  const filteredJobs = useMemo(() => {
    if (selectedJobType === JobTypes.All) {
      return jobs;
    }

    return jobs.filter((_job) => _job.fields.type === selectedJobType);
  }, [jobs, selectedJobType]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-8 my-8 font-medium text-[#656F6E] border-b-[1px] border-b-[#E1E1E1] transition">
        {Object.values(JobTypes).map((_jt) => (
          <span
            className={cn([
              'py-2 cursor-pointer hover:opacity-80',
              _jt === selectedJobType && 'border-b-2 border-b-[#111] text-[#111]',
            ])}
            key={_jt}
            onClick={() => setSelectedJobType(_jt)}
          >
            {_jt}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {filteredJobs.map((_job) => (
          <Job job={_job} key={_job.recordId} />
        ))}
      </div>
    </div>
  );
};
