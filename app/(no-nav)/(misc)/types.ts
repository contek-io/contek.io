import { APITableRecord, APITableResponse } from '@/types/response';

export type MiscResponse = APITableResponse<MiscRecord[]>;

export type MiscRecord = APITableRecord<{
  id: string;
  content: string;
}>;
