import { APITABLE_CAREER_URL } from '@/consts/url';

import { Career } from './career';
import type { JobsResponse } from './types';

export const CareerContainer = async () => {
  try {
    const res = await fetch(`${APITABLE_CAREER_URL}&fields=title,jd,tag,type`, {
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

    return <Career jobs={jobs} />;
  } catch (error) {
    console.error(error);
    return <p>Failed to load careers, try to refresh page</p>;
  }
};
