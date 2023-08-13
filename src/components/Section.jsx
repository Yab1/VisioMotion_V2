export default function Section({ name, children }) {
  return (
    <section
      id={name}
      className="min-h-screen px-2.5 md:px-10 lg:px-24 xl:px-60 lg:grid lg:content-center my-16 md:my-auto grid content-center"
    >
      {children}
    </section>
  );
}
