import InfoContainer from './components/InfoContainer/InfoContainer.tsx'
import Footer from './components/Footer/Footer.tsx'
import profileData from './data/profile.json'
import './App.scss'
import EducationCard from './components/EducationCard/EducationCard.tsx'

function App() {

  return (
    <div className="app">
      <InfoContainer 
        title="Education" 
        dataList={profileData.education}
        CardComponent={EducationCard} 
      />
      <Footer />
    </div>
  )
}

export default App
