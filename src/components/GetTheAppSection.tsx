const GetTheAppSection = () => {
  return (
    <section id="get-the-app" className="bg-ink py-20 text-on-dark">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-semibold tracking-tight">
          Get Chop Chop on your phone
        </h2>
        <p className="mt-3 max-w-prose text-lg text-on-dark-soft">
          Free to install. Your first delivery is on us, anywhere from Bakau to
          Brusubi.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-chop px-5 py-2.5 font-semibold text-surface transition duration-200 hover:-translate-y-0.5 hover:bg-chop-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop"
          >
            Download for iPhone
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg border border-dark-line px-5 py-2.5 font-semibold text-on-dark transition duration-200 hover:-translate-y-0.5 hover:border-on-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop-light"
          >
            Download for Android
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetTheAppSection
