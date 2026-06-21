import Header from "./components/Header/Header.tsx";
import Home from "./components/Home/Home.tsx";
import InfoContainer from "./components/InfoContainer/InfoContainer.tsx";
import EducationCard from "./components/EducationCard/EducationCard.tsx";
import ExperienceCard from "./components/ExperienceCard/ExperienceCard.tsx";
import ProjectCard from "./components/ProjectCard/ProjectCard.tsx";
import Contacts from "./components/Contacts/Contacts.tsx";
import Footer from "./components/Footer/Footer.tsx";
import profileData from "./data/profile.json";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <InfoContainer
        id="education"
        title="Education"
        dataList={profileData.education}
        CardComponent={EducationCard}
      />
      <InfoContainer
        id="experience"
        title="Experience"
        dataList={profileData.experience}
        CardComponent={ExperienceCard}
      />
      <InfoContainer
        id="projects"
        title="Projects"
        dataList={profileData.projects}
        CardComponent={ProjectCard}
      />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
