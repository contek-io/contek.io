import { CareerResponse } from "@/app/api/career/route";

export const Career = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/career`);
    const data: CareerResponse = await res.json();

    return (
      <div>
        {data?.data.records.map((_record) => (
          <p key={_record.recordId}>{_record.fields.job}</p>
        ))}
      </div>
    );
  } catch (error) {
    console.error(error);
    return <p>Failed to load careers, try to refresh page</p>;
  }
};
