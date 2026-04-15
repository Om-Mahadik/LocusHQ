export default function Solution({ data }: any) {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-semibold">Solution</h2>
      <p className="mt-4">{data.solution}</p>
    </section>
  );
}