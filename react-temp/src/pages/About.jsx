import '../styles/about.css';

const photos = [
  {
    src: '/images/about/Kiki.JPG',
    alt: 'Kiki',
    label: 'Kiki',
    sticker: '★',
    className: 'about-photo-one',
  },
  {
    src: '/images/about/Me.jpg',
    alt: 'Me',
    label: 'Me',
    sticker: '!',
    className: 'about-photo-two',
  },
  {
    src: '/images/about/Iced-Milo-Mocha.jpg',
    alt: 'Iced Milo Mocha',
    label: 'Iced Milo Mocha',
    sticker: '♥',
    className: 'about-photo-three',
  },
  {
    src: '/images/about/Dreamscape.jpg',
    alt: 'Korea',
    label: 'Korea',
    sticker: '✦',
    className: 'about-photo-four',
  },
];

function About() {
  return (
    <main className="about-page">
      <div className="about-blob"></div>

      <section className="about-layout">
        <article className="about-note">
          <div className="pushpin">
            <div className="pinhead"></div>
            <div className="pinbase"></div>
            <div className="pinshaft"></div>
            <div className="pinpoint"></div>
          </div>

          <p className="about-eyebrow">HELLO THERE</p>

          <h1>About Me</h1>

          <p className="about-intro">Hi, I’m Quynh-Nhu!</p>

          <p>
            A creative and passionate graphic designer with a love for visual
            storytelling and bringing ideas to life.
          </p>

          <a href="mailto:qreativedesigner@gmail.com" className="about-email">
            qreativedesigner@gmail.com
          </a>
        </article>

        <div className="about-photo-grid">
          {photos.map((photo) => (
            <figure
              className={`about-polaroid ${photo.className}`}
              key={photo.label}
            >
              <span className="about-sticker">{photo.sticker}</span>

              <div className="about-image-wrap">
                <img src={photo.src} alt={photo.alt} />
              </div>

              <figcaption>{photo.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
