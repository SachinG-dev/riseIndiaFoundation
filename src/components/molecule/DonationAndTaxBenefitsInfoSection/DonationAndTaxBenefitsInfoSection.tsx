export function DonationAndTaxBenefitsInfoSection() {
  return (
    <div className="container p-5 text-center">
      <h2 className="fw-bold text-center">
        <span className="text-secondary"> Donation </span> & Tax Benefits
      </h2>
      <p className="text-center">
        Rise India Foundation is a team of enthusiastic individuals from diverse
        backgrounds working towards conscientizing the underprivileged citizen
        and empowering the deprived and marginalized communities leading to
        improvement in their livelihoods through various programs and
        activities. It was registered as a Non-Governmental Organization in 2015
        under Societies Registration Act, 1860.
      </p>
      <h4 className="text-center fw-bold">Tax Exemptions</h4>
      <p className="text-center">
        We envision a world of globally educated citizens empowered to bring
        positive change and rid society of its evils and stigmas.
      </p>
      <p>
        <a
          href="/about-us"
          className="text-secondary text-decoration-none d-flex justify-content-center align-items-center gap-1"
        >
          Read more
          <img
            width="13.5px"
            height="12px"
            src="/assets/images/forward-arrow.svg"
            alt="forward-array-icon"
            className="mt-1"
          />
        </a>
      </p>
    </div>
  );
}
