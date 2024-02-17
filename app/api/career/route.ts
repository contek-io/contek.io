export type CareerResponse = {
  data: {
    records: CareerRecord[];
  };
};

export type CareerRecord = {
  recordId: string;
  fields: {
    job: string;
    lang: string;
    title: string;
    jd: string;
  };
};

export async function GET() {
  const res = await fetch(
    "https://aitable.ai/fusion/v1/datasheets/dst14mblDDGWNwp7eF/records?viewId=viwrLLFqSm7cM&fieldKey=name",
    {
      headers: new Headers({
        Authorization: `Bearer ${process.env.APITABLE_API_TOKEN}`,
        "Content-Type": "application/json",
      }),
    }
  );
  const data: CareerResponse = await res.json();

  return Response.json(data);
}
