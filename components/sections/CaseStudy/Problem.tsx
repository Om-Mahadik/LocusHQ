export default function Problem({ data }: any) {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-semibold">Problem</h2>
      <p className="mt-4">{data.problem}</p>
    </section>
  );
}