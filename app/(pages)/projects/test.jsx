import PaginationControls from "./Pang";

const data = [
  "entry 1",
  "entry 2",
  "entry 3",
  "entry 4",
  "entry 5",
  "entry 6",
  "entry 7",
  "entry 8",
  "entry 9",
  "entry 10",
];

export default function Test({ searchParams }) {
  const page = Number(searchParams?.page) || 1;
  const perPage = Number(searchParams?.["per_page"]) || 5;

  // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * Number(perPage); // 0, 5, 10 ...
  const end = start + Number(perPage); // 5, 10, 15 ...

  const entries = data.slice(start, end);

  return (
    <div className="flex flex-col items-center gap-2">
      {entries.map((entry) => (
        <p key={entry}>{entry}</p>
      ))}

      <PaginationControls
        hasNextPage={end < data.length}
        hasPrevPage={start > 0}
      />
    </div>
  );
}
