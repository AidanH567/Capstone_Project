import HomeImage from "../components/HomeImage";
import HomePageInfo from "../components/HomePageInfo";
import TextBox from "../components/TextBox";

export default function HomePage() {
  // Save in pages/AboutPage.jsx
  return (
    <>
      <HomeImage></HomeImage>
      <HomePageInfo></HomePageInfo>
      {/* <div className="HomePage">
        <img className="SelfImage" src="/images/Self_Image.jpg" alt="" />
        <TextBox
          h2_text="Aidan Herstik"
          p_text="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you."
        />
      </div> */}
    </>
  );
}
