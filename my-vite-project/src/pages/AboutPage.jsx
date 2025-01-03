// import "bootstrap/dist/css/bootstrap.min.css";

// import Login from "../components/Login";
export default function AboutPage() {
  // Save in pages/AboutPage.jsx
  return (
    <div className="HomePage">
      <img className="SelfImage" src="/images/Self_Image.jpg" alt="" />
      <TextBox
        p_text="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are."
        h2_text="About"
        h5_text="Alexa Hill's vocals are like futuristic sounds"
      />
    </div>
  );
}
