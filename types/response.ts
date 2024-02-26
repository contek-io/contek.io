export type APITableResponse<T> = {
  data: {
    records: T;
  };
};

export type APITableRecord<T> = {
  recordId: string;
  fields: T;
};
