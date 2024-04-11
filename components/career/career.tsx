'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

import { cn } from '@/utils/classname';

import { Button } from '../button';
import { JobRecord, JobTypes } from './types';

const Job = ({ job }: { job: JobRecord }) => (
  <div className="flex flex-col gap-8 bg-[#FFF] p-10 text-left">
    <div className="flex justify-between">
      <div className="flex flex-col gap-5">
        <p className="text-[28px] font-medium leading-[34px]">{job.fields.title}</p>
        <div className="flex gap-2">
          {job.fields.tag.map((_tag) => (
            <span
              className="flex items-center justify-center rounded-full border-[1px] border-[#111] px-4 py-1.5 text-lg"
              key={_tag}
            >
              {_tag}
            </span>
          ))}
        </div>
      </div>
      <div className="hidden grow justify-end laptop:flex">
        <div>
          <Link href={`/career/${job.recordId}`} target="_blank">
            <Button>Details</Button>
          </Link>
        </div>
      </div>
    </div>
    <p className="text-base text-[#656F6E] laptop:max-w-[70%] laptop:text-lg">{job.fields.jd}</p>
    <div className="laptop:hidden">
      <Link href={`/career/${job.recordId}`} target="_blank">
        <Button>Details</Button>
      </Link>
    </div>
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
      <div className="my-8 flex gap-8 border-b-[1px] border-b-[#E1E1E1] font-medium text-[#656F6E] transition">
        {Object.values(JobTypes).map((_jt) => (
          <span
            className={cn([
              'cursor-pointer py-2 hover:opacity-80',
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
