import NavBar from "../components/NavBar/NavBar";
import HomeSection from "../components/HomeSection/HomeSection";
import ExploreSection from "../components/ExploreSection/ExploreSection";
import AboutSection from "../components/AboutSection/AboutSection";
import AnimatedPage from "./AnimatedPage";

const LandingPage = () => {
	return (
		<AnimatedPage>
			<NavBar />
			<HomeSection />
			<ExploreSection />
			<AboutSection />
		</AnimatedPage>
	);
};

export default LandingPage;
