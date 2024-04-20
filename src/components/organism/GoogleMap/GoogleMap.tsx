import React from "react";

export function GoogleMap() {
  return (
    <div className="d-flex justify-content-center align-items-center m-5">
      {/* Embed Google Map iframe */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387051.04452982934!2d-74.25986626284219!3d40.69714939497341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25fe0e0d9b6b7%3A0xc2524522d4885d2a!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1618947751804!5m2!1sen!2suk"
        height="450"
        style={{ border: 0, width: "100%" }}
        allowFullScreen
        loading="lazy"
        title="Google Map"
      ></iframe>
    </div>
  );
}
