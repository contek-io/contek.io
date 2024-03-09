import type { Metadata } from 'next';
import Markdown from 'react-markdown';

import { Container } from '@/components/layout/container';
import { APITABLE_MISC_URL } from '@/consts/url';

import { MiscResponse } from '../types';

export const metadata: Metadata = {
  title: 'Contek - Privacy',
  description: 'Contek Privacy',
  keywords: ['contek', 'crypto', 'privacy'],
};

const Privacy = async () => {
  try {
    const res = await fetch(`${APITABLE_MISC_URL}&fields=id,content`, {
      next: { revalidate: 86400 },
      headers: new Headers({
        Authorization: `Bearer ${process.env.APITABLE_API_TOKEN}`,
        'Content-Type': 'application/json',
      }),
    });
    const data: MiscResponse = await res.json();
    const records = data?.data?.records;

    if (!Array.isArray(records)) {
      console.error('Records are not array');
      throw new Error();
    }

    const privacy = records.find((_record) => _record.fields.id === 'privacy');

    if (!privacy) {
      console.error('Cannot find privacy record');
      throw new Error();
    }

    return (
      <div className="w-full bg-white">
        <Container className="min-h-[calc(100vh-92px)]">
          <div className="prose mb-4 max-w-full">
            <Markdown>{privacy?.fields?.content}</Markdown>
          </div>
        </Container>
      </div>
    );
  } catch (error) {
    console.error(error);
    return <p>Failed to load privacy, try to refresh page</p>;
  }
};

export default Privacy;
