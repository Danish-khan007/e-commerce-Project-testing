import logo from "../assets/luffy.jpg";

export default function AboutUs() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Danish Market</h1>
        <p>
          Your trusted destination for quality goods, brought to you with
          passion and dedication.
        </p>
      </section>

      <section className="about-story">
        <div className="story-copy">
          <h2>Our Story</h2>
          <p>
            Welcome to Danish Market! Founded with a vision to make online
            shopping seamless, reliable, and delightful, we strive to bring
            the best products right to your doorstep. What started as a small
            personal dream has now grown into a vibrant e-commerce marketplace.
          </p>
          <p>
            We believe in offering not just products, but an experience built
            on trust, transparency, and exceptional customer service.
          </p>
        </div>

        <div className="owner-card">
          <img
            className="owner-photo"
            src={logo}
            alt="Danish, store owner"
          />
          <h3>😎Danish😎</h3>
          <p>Founder: Elon musk🙂 <br />
             Owner: Danish🫡 <br />
             CEO: Jeff Bezos💁</p>
          <p>
            “Our mission is simple: to treat every customer like family and
            every order with the utmost care. Thank you for supporting our
            journey!”
          </p>
        </div>
      </section>

      <section className="about-values">
        <h2>Why Shop With Us?</h2>

        <div className="values-grid">
          <div className="value-card">
            <h4>Top Quality</h4>
            <p>
              Every item in our collection is carefully curated and checked
              for superior quality.
            </p>
          </div>

          <div className="value-card">
            <h4>Customer First</h4>
            <p>
              We are always here to help you with friendly support and smooth
              shopping experiences.
            </p>
          </div>

          <div className="value-card">
            <h4>Secure Delivery</h4>
            <p>
              Fast, reliable, and safe shipping straight to your home.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}