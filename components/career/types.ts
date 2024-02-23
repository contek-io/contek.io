export type JobsResponse = {
  data: {
    records: JobRecord[];
  };
};

export type JobRecord = {
  recordId: string;
  fields: {
    title: string;
    tag: string[];
    jd: string;
    type: JobTypes;
    lang: string;
    requirements: string;
  };
};

export enum JobTypes {
  All = 'All Jobs',
  Marketing = 'Marketing',
  Engineering = 'Engineering',
}
