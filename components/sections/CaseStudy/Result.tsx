export default function Results({ data }: any) {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-semibold">Results</h2>
      <p className="mt-4">{data.results}</p>
    </section>
  );
}