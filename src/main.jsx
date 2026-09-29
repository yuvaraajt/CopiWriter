import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const COMPANY = {
  name: "Copiwriter.in",
  owner: "Aafrin Sulthana Abusalih",
  whatsapp: "919344975205",
  email: "contactcopiwriterin@gmail.com",
  tagline: "Turning Complexity Into Clarity.",
  motto: "Write with Purpose",
  instagram: "https://www.instagram.com/copiwriter.in/",
  linkedin: "https://www.linkedin.com/in/aafrin-sulthana-abusalih-461a47265/"
};

const services = [
  { number: "01", title: "Content & Copywriting", text: "Clear, persuasive content that helps technology businesses explain what they do and why it matters.", tags: ["Website Copywriting", "Landing Page Copy", "Product & Service Pages", "Blog & Article Writing", "SEO Content", "Case Studies", "Thought Leadership Content"] },
  { number: "02", title: "Social Media Content", text: "Strategic social content that makes complex technology easier to understand, share and remember.", tags: ["LinkedIn Content", "Instagram Content", "Carousels", "Single-image Post Copy", "Founder-led Content", "Brand Storytelling", "Educational Content"] },
  { number: "03", title: "Video Content", text: "Human-written scripts designed to turn ideas, products and expertise into engaging video.", tags: ["Reels Scripts", "Short-form Video Scripts", "YouTube Scripts", "Explainer Video Scripts"] },
  { number: "04", title: "B2B / SaaS Content", text: "Messaging and content for AI SaaS, B2B technology and cybersecurity businesses.", tags: ["SaaS Product Messaging", "Product Explainers", "Feature-to-Benefit Copy", "Technical-to-Simple Content", "AI & Technology Thought Leadership", "Brand Messaging"] }
];

// Add new posts here whenever you want. No CMS is required.
const blogs = [
  { id: 1, category: "AI SaaS", date: "Coming soon", title: "Making complex technology easier to understand", excerpt: "Why clarity matters when communicating an AI or SaaS product to a business audience.", body: "Technology can be sophisticated without its communication being complicated. Strong B2B content starts by identifying what the audience needs to understand, then translating technical value into language that feels clear, useful and human." },
  { id: 2, category: "B2B Content", date: "Coming soon", title: "From features to benefits: say what actually matters", excerpt: "A product feature is information. A benefit explains why that information matters to the customer.", body: "The strongest product messaging connects a capability to an outcome. Instead of stopping at what a product does, good copy helps a reader understand how that capability changes their work, decision or result." },
  { id: 3, category: "Cybersecurity", date: "Coming soon", title: "Communicating cybersecurity without the jargon", excerpt: "Security products solve complicated problems. The explanation doesn't have to be complicated too.", body: "Cybersecurity communication needs to be accurate while remaining understandable to decision-makers, users and stakeholders. Clear structure, audience awareness and careful language make that balance possible." }
];

function Arrow() {
  return <span className="arrow">↗</span>;
}

function App() {
  const [page, setPage] = useState("home");
  const [activeBlog, setActiveBlog] = useState(null);
  const [formStatus, setFormStatus] = useState("");

  const navigate = (next) => {
    setPage(next);
    setActiveBlog(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openBlog = (blog) => {
    setActiveBlog(blog);
    setPage("blog");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submitContact = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    const subject = encodeURIComponent(`New enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
    setFormStatus("Your email app should open with the enquiry ready to send.");
  };

  return (
    <div className="site">
      <header className="nav">
        <button className="logo-button" onClick={() => navigate("home")} aria-label="Copiwriter home">
          <img src="/logo.jpg" alt="Copiwriter.in" className="nav-logo" />
        </button>
        <nav>
          <button className={page === "home" ? "active" : ""} onClick={() => navigate("home")}>Home</button>
          <button className={page === "services" ? "active" : ""} onClick={() => navigate("services")}>Services</button>
          <button className={page === "blogs" ? "active" : ""} onClick={() => navigate("blogs")}>Blogs</button>
        </nav>
        <a className="nav-cta" href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer">
          Let's talk <Arrow />
        </a>
      </header>

      {page === "home" && (
        <main>
          <section className="hero">
  <div className="hero-orb orb-one"></div>
  <div className="hero-orb orb-two"></div>

  <div className="hero-copy reveal">
    <p className="eyebrow">
      <span></span> B2B · AI · Saas · NEUROTECH
    </p>

    <h1>
      Turning <em>complexity</em>
      <br />
      into clarity.
    </h1>

    <p className="hero-text">
      Content and copywriting for AI SaaS, B2B technology and
      cybersecurity businesses — written to make complex ideas
      clear, engaging and persuasive.
    </p>

    <div className="hero-actions">
      <button
        className="button button-light"
        onClick={() => navigate("services")}
      >
        Explore our services <Arrow />
      </button>

      <button
        className="text-link"
        onClick={() => navigate("blogs")}
      >
        Read our thinking <Arrow />
      </button>
    </div>

    <p className="hero-motto">
      WRITE WITH PURPOSE.
    </p>
  </div>

  <div className="hero-art reveal delay">
    <div className="logo-showcase">
      <img
        src="/logo.jpg"
        alt="Copiwriter.in logo"
      />
    </div>

    <div className="floating-note">
      Complex ideas.
      <br />
      <strong>Human clarity.</strong>
    </div>
  </div>
</section>

          <section className="manifesto section">
            <div className="section-kicker">01 / THE DIFFERENCE</div>
            <div className="manifesto-grid">
              <h2>Technology is complex.<br /><em>Your communication doesn't have to be.</em></h2>
              <div>
                <p>Copiwriter.in is a B2B content and copywriting agency focused on AI SaaS and technology businesses.</p>
                <p>We help complex technology businesses communicate their products, ideas and value propositions clearly, engagingly and persuasively — without making the content feel overly technical or generic.</p>
                <p>Our focus is on bridging the gap between technical complexity and human understanding.</p>
              </div>
            </div>
          </section>

          <section className="services-preview section">
            <div className="section-head">
              <div>
                <div className="section-kicker">02 / WHAT WE DO</div>
                <h2>Words with a <em>job to do.</em></h2>
              </div>
              <button className="text-link" onClick={() => navigate("services")}>All services <Arrow /></button>
            </div>
            <div className="service-list">
              {services.slice(0, 3).map((s) => (
                <article className="service-row" key={s.number}>
                  <span>{s.number}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <Arrow />
                </article>
              ))}
            </div>
          </section>

          <section className="quote-section">
            <div className="quote-mark">“</div>
            <blockquote>
              Make businesses easier to understand.<br />
              <em>And harder to ignore.</em>
            </blockquote>
            <p>— The Copiwriter.in philosophy</p>
          </section>

          <section className="founder-section section">
            <div className="section-kicker">03 / MEET THE FOUNDER</div>
            <div className="founder-grid">
              <div className="founder-photo"><div className="founder-placeholder">AS</div></div>
              <div className="founder-content">
                <p className="founder-role">FOUNDER & CEO</p>
                <h2>Aafrin Sulthana<br /><em>Abusalih</em></h2>
                <p className="founder-description">Aafrin Sulthana is the founder of Copiwriter.in and a content strategist and copywriter focused on B2B technology and AI SaaS.</p>
                <p className="founder-description">With a background in economics, education and writing, Aafrin approaches technology communication from a human perspective — asking not just “What does this product do?” but “How can we make people understand why it matters?”</p>
                <p className="founder-description">Through Copiwriter.in, she works with businesses to simplify complex products, develop stronger messaging and create content that is both informative and persuasive.</p>
                <div className="founder-signature"><span>“Great technology deserves great communication.”</span><small>Aafrin Sulthana Abusalih · Founder, Copiwriter.in</small></div>
                <div className="social-links"><a href={COMPANY.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a href={COMPANY.instagram} target="_blank" rel="noreferrer">Instagram <Arrow /></a></div>
              </div>
            </div>
          </section>

          <section className="human-section section">
            <div className="human-card">
              <div className="section-kicker">04 / THE HUMAN APPROACH</div>
              <h2>Written by people.<br /><em>For people.</em></h2>
              <p>Copiwriter.in produces human-written content without generative AI. Research, strategy, writing, editing and judgement stay at the centre of the work.</p>
              <p>Because communicating technology isn't just about simplifying words. It's about understanding the audience, the product and the reason it matters.</p>
            </div>
          </section>

          <ContactSection onSubmit={submitContact} formStatus={formStatus} />
        </main>
      )}

      {page === "services" && (
        <main>
          <PageIntro kicker="OUR SERVICES" title={<>Words built for <em>purpose.</em></>} text="From a single landing page to a complete brand voice, we bring strategy and human craft to every word." />
          <section className="section services-page">
            {services.map((s) => (
              <article className="big-service" key={s.number}>
                <span className="service-number">{s.number}</span>
                <div>
                  <h2>{s.title}</h2>
                  <p>{s.text}</p>
                  <div className="tags">{s.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
                <Arrow />
              </article>
            ))}
          </section>
          <section className="green-cta">
            <div className="section-kicker">HAVE A BRIEF?</div>
            <h2>Let's turn your<br /><em>ideas into words.</em></h2>
            <a className="button button-light" href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer">Start a conversation <Arrow /></a>
          </section>
        </main>
      )}

      {page === "blogs" && (
        <main>
          <PageIntro kicker="THE BLOG" title={<>Thoughts worth <em>reading.</em></>} text="Notes on copywriting, branding, content strategy and the art of communicating clearly." />
          <section className="section blog-grid">
            {blogs.map((blog) => (
              <article className="blog-card" key={blog.id} onClick={() => openBlog(blog)}>
                <div className="blog-image"><span>{blog.category}</span><div>{String(blog.id).padStart(2, "0")}</div></div>
                <div className="blog-meta">{blog.date}</div>
                <h2>{blog.title}</h2>
                <p>{blog.excerpt}</p>
                <button className="text-link">Read article <Arrow /></button>
              </article>
            ))}
          </section>
        </main>
      )}

      {page === "blog" && activeBlog && (
        <main>
          <article className="article">
            <button className="back-link" onClick={() => navigate("blogs")}>← Back to blogs</button>
            <div className="article-meta">{activeBlog.category} · {activeBlog.date}</div>
            <h1>{activeBlog.title}</h1>
            <p className="article-lead">{activeBlog.excerpt}</p>
            <div className="article-body">
              <p>{activeBlog.body}</p>
              <p>At Copiwriter.in, we believe communication gets better when people take the time to understand people. That's why our process keeps research, discussion, editing and judgement at the centre of the work.</p>
            </div>
          </article>
        </main>
      )}

      <footer className="footer">
        <div>
          <button className="logo-button footer-logo-button" onClick={() => navigate("home")}><img src="/logo.jpg" alt="Copiwriter.in" className="footer-logo" /></button>
          <p>{COMPANY.tagline}<br />{COMPANY.motto}</p>
        </div>
        <div className="footer-links">
          <button onClick={() => navigate("home")}>Home</button>
          <button onClick={() => navigate("services")}>Services</button>
          <button onClick={() => navigate("blogs")}>Blogs</button>
          <a href={`mailto:${COMPANY.email}`}>Email</a>
          <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href={COMPANY.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={COMPANY.instagram} target="_blank" rel="noreferrer">Instagram</a>
        </div>
        <div className="footer-bottom">© {new Date().getFullYear()} Copiwriter.in · Aafrin Sulthana Abusalih</div>
      </footer>
    </div>
  );
}

function PageIntro({ kicker, title, text }) {
  return (
    <section className="page-intro">
      <div className="section-kicker">{kicker}</div>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}

function ContactSection({ onSubmit, formStatus }) {
  return (
    <section className="contact section">
      <div>
        <div className="section-kicker">04 / START A CONVERSATION</div>
        <h2>Have something<br /><em>to say?</em></h2>
        <p>Tell us what you're building, changing or trying to communicate. We'll take it from there.</p>
        <div className="contact-links">
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp us ↗</a>
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <label>Name<input name="name" required placeholder="Your name" /></label>
        <label>Email<input name="email" type="email" required placeholder="you@company.com" /></label>
        <label>Tell us a little about your project<textarea name="message" required rows="5" placeholder="What can we help you say?"></textarea></label>
        <button className="button button-dark" type="submit">Send enquiry <Arrow /></button>
        {formStatus && <p className="form-status">{formStatus}</p>}
      </form>
    </section>
  );
}

createRoot(document.getElementById("root")).render(<App />);
