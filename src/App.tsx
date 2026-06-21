import InfoContainer from "./components/InfoContainer/InfoContainer.tsx";
import EducationCard from "./components/EducationCard/EducationCard.tsx";
import ExperienceCard from "./components/ExperienceCard/ExperienceCard.tsx";
import Footer from "./components/Footer/Footer.tsx";
import profileData from "./data/profile.json";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <InfoContainer
        title="Education"
        dataList={profileData.education}
        CardComponent={EducationCard}
      />
      <InfoContainer
        title="Experience"
        dataList={profileData.experience}
        CardComponent={ExperienceCard}
      />
      <Footer />
    </div>
  );
}

export default App;
