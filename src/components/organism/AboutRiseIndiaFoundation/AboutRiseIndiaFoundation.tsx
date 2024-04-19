import "./AboutRiseIndiaFoundation.css";

export function AboutRiseIndiaFoundation() {
  return (
    <section className="container text-center margin-y-48 font-dark-gray">
      <h1 className="about-title text-center mb-5">
        <span className="text-color">About </span>
        Rise India Foundation
      </h1>
      <p className="fs-5 margin-botton-36">
        Rise India Foundation is a team of enthusiastic individuals from diverse
        backgrounds working towards conscientizing the underprivileged citizen
        and empowering the deprived and marginalized communities leading to
        improvement in their livelihoods through various programs and
        activities.
      </p>
      <p className="fw-semibold fs-5 mb-0">Our Mission</p>
      <p className="fs-5 margin-botton-36">
        We envision a world of globally educated citizens empowered to bring
        positive change and rid society of its evils and stigmas.
      </p>
      <p className="fw-semibold fs-5 mb-0">Our Vision</p>
      <p className="fs-5 margin-botton-80">
        To shape a better future for the youth through quality education and
        knowledge of essential life skills to become self-sustainable and
        independent.
      </p>
      <p>
        <a
          href="#"
          className="text-color font-size-22 fw-semibold text-decoration-none"
        >
          <span>Read more </span>
          <img
            src="/assets/images/forward-arrow.svg"
            alt="forward-array-icon"
            className="ml-2"
          />
        </a>
      </p>
    </section>
  );
}
