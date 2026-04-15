export default function CTA({ text }: { text: string }) {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold">{text}</h2>
      <button className="mt-6 px-6 py-3 bg-white text-black rounded-xl">
        Contact Now
      </button>
    </section>
  );
}