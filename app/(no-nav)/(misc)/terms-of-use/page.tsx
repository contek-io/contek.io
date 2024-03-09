import type { Metadata } from 'next';
import Markdown from 'react-markdown';

import { Container } from '@/components/layout/container';
import { APITABLE_MISC_URL } from '@/consts/url';

import { MiscResponse } from '../types';

export const metadata: Metadata = {
  title: 'Contek - Terms of use',
  description: 'Contek terms of use',
  keywords: ['contek', 'crypto', 'terms of use'],
};

const TermsOfUse = async () => {
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

    const termsOfUse = records.find((_record) => _record.fields.id === 'terms of use');

    if (!termsOfUse) {
      console.error('Cannot find terms of use record');
      throw new Error();
    }

    return (
      <div className="w-full bg-white">
        <Container className="min-h-[calc(100vh-92px)]">
          <div className="prose mb-4 max-w-full">
            <Markdown>{termsOfUse?.fields?.content}</Markdown>
          </div>
        </Container>
      </div>
    );
  } catch (error) {
    console.error(error);
    return <p>Failed to load terms of use, try to refresh page</p>;
  }
};

export default TermsOfUse;
