import React from "react";

export function GoogleMap() {
  return (
    <section className="m-5">
      <p className="text-center">
        You can always reach out to us through our mail id i.e.
        change@riseindiafoundation.in and help us move ahead by donating to our
        cause at donation@riseindiafoundation.in
      </p>
      <div className="d-flex justify-content-center align-items-center m-5">
        {/* Embed Google Map iframe */}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.0368065191797!2d72.83423177596889!3d19.193594682035286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b781b6ccb663%3A0xcae0d2f8ce1b6768!2sRise%20India%20Foundation%20-%20Empowering%20Life&#39;s%20(Leading%20NGO%20in%20India)!5e0!3m2!1sen!2sin!4v1714835485215!5m2!1sen!2sin"
          height="450"
          style={{ border: 0, width: "100%" }}
          allowFullScreen
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </section>
  );
}
