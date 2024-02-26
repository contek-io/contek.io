import { APITableRecord, APITableResponse } from '@/types/response';

export type JobsResponse = APITableResponse<JobRecord[]>;

export type JobRecord = APITableRecord<{
  title: string;
  tag: string[];
  jd: string;
  type: JobTypes;
  lang: string;
  requirements: string;
}>;

export enum JobTypes {
  All = 'All Jobs',
  Marketing = 'Marketing',
  Engineering = 'Engineering',
}
