import { type Metadata } from 'next';
import Link from 'next/link';
import Markdown from 'react-markdown';

import { Button } from '@/components/button';
import { JobsResponse } from '@/components/career/types';
import { APITABLE_RECORD_URL } from '@/consts/url';
import { APPLY_FORM_URL } from '@/consts/url';

type Props = {
  params: { jobId: string };
};

const getJobDetails = async (jobId: string) => {
  const res = await fetch(`${APITABLE_RECORD_URL}&fields=requirements,title`, {
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

  const job = records.find((_record) => _record.recordId === jobId);

  return job;
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const job = await getJobDetails(params.jobId);

  return {
    title: `Contek | Career - ${job?.fields.title}`,
  };
};

const JobDetails = async ({ params }: Props) => {
  try {
    const job = await getJobDetails(params.jobId);

    return (
      <div className="w-full bg-white">
        <div className="max-w-[--contek-max-width] min-h-[calc(100vh-92px)] mx-auto px-16 py-8">
          <div className="max-w-full mb-4 prose">
            <Markdown>{job?.fields?.requirements}</Markdown>
          </div>
          <Link className="hover:opacity-80" href={APPLY_FORM_URL} target="_blank">
            <Button>Apply</Button>
          </Link>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return <p>Failed to load job details, try to refresh page</p>;
  }
};

export default JobDetails;
