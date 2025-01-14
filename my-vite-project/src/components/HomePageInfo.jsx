import { Link } from "react-router-dom";
import "../styles/HomePageInfo.css";
import { motion } from "motion/react";

export default function HomePageInfo() {
  return (
    <motion.div
      className="homepageinfo-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }} // Fade in to opacity 1
      exit={{ opacity: 0 }}
      transition={{ opacity: { duration: 0.5 }, ease: "easeInOut" }}
    >
      <div className="homepageinfo-description">
        <p>
          Aidan Herstik is an accomplished guitarist, specializing in jazz and
          rock. <br />
          A graduate of Jazz Performance from ANU, he’s known for his
          versatility and technical skill. <br />
          Aidan delivers dynamic performances, whether solo or with others,
          showcasing his passion for music.
        </p>
      </div>

      {/* First container (image left, text right) */}
      <div className="info-container-1">
        <img src="/images/Small_1.jpeg" alt="" />
        <div className="info-text-container-1">
          <p>
            Aidan Herstik is an accomplished guitarist with years of experience
            in both the local and international music scenes. Recently
            graduating with a degree in Jazz Performance from the prestigious
            Australian National University (ANU), he has become one of
            Canberra's leading guitarists, well known for his versatility and
            prominent presence in the city's vibrant gigging scene. Specializing
            in a wide range of guitar styles, Aidan’s expertise spans jazz,
            rock, and beyond. His technical proficiency, combined with his deep
            understanding of music theory, allows him to seamlessly adapt to
            various genres, providing a dynamic and expressive sound in every
            performance. Although he is highly skilled across multiple styles,
            he is particularly passionate about jazz and rock, where his ability
            to improvise, capture intricate nuances, and engage audiences has
            set him apart as a respected musician in his field. Aidan’s musical
            journey reflects a commitment to both artistry and innovation,
            drawing influences from iconic musicians while creating a sound that
            is distinctly his own. Whether performing as a soloist or
            collaborating with other talented artists, Aidan consistently
            delivers captivating performances that showcase his mastery of the
            guitar and his unwavering dedication to his craft.
          </p>
          <Link to="/about">
            <button>About Me</button>
          </Link>
        </div>
      </div>

      {/* Second container (image right, text left) */}
      <div className="info-container-2">
        <div className="info-text-container-2">
          <p>
            Aidan Herstik is a seasoned guitarist and educator with years of
            experience shaping the musical journeys of students across all ages.
            Having recently earned a degree in Jazz Performance from the
            prestigious Australian National University (ANU), Aidan is not only
            a prominent figure in Canberra’s live music scene but also a
            dedicated teacher who has worked with a diverse range of students,
            from as young as three years old to fully adult learners. With a
            deep understanding of various guitar styles, including jazz and
            rock, Aidan’s teaching approach is tailored to each student’s
            individual needs. His extensive experience in the field of music
            allows him to structure lessons that are not only engaging but also
            highly effective, ensuring students of all levels achieve their
            musical goals. Whether guiding beginners through their first chords
            or refining advanced techniques, Aidan’s expertise and patience help
            unlock each student’s full potential, making the learning process
            both rewarding and enjoyable. Aidan’s teaching philosophy is rooted
            in a commitment to nurturing creativity, developing technical
            skills, and fostering a lifelong love of music. His approach
            combines technical precision with artistic expression, creating a
            balanced environment where students can grow as both musicians and
            performers. With a proven track record of success, Aidan has earned
            a reputation as one of Canberra’s most trusted and respected guitar
            instructors.
          </p>
          <Link to="/videos">
            <button>Watch Me play</button>
          </Link>
        </div>
        <img src="/images/Small_3.JPG" alt="" />
      </div>
      <div className="info-container-1">
        <img
          src="/images/Small_2.JPG"
          alt=""
          // style={{ marginBottom: "50px" }}
        />
        <div className="info-text-container-1">
          <h1>Request a show or Book Lesson</h1>
          <p>
            For booking information, please enquire here. You can also follow
            Aidan on Social Media for tour and release updates.
          </p>
          <Link to="/contact">
            <button>Book Here</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
