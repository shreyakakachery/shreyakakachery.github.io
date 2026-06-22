import profileData from '../../data/profile.json'
import './Home.scss'

interface HomeInfo {
    name: string;
    tagline: string;
    bio: string;
    imagePath: string | null;
}

export default function Home() {
    const homeData: HomeInfo = profileData.home;

    return (
        <section id="home" className="home-container">
            <div className="home-content">
                <div className="text-section">
                    <p className="greeting">Hi, my name is</p>
                    <h1 className="name">{homeData.name}</h1>
                    <div className="image-section">
                        {homeData.imagePath ? (
                            <img src={homeData.imagePath} alt={`${homeData.name} headshot`} className="profile-image" />
                        ) : (
                            <div className="image-placeholder"></div>
                        )}
                    </div>
                    <h2 className="home-tagline">{homeData.tagline}</h2>
                    <p className="bio">{homeData.bio}</p>
                </div>
            </div>
        </section>
    )
}