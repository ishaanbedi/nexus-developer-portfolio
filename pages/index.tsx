import HeroSection from "@/components/hero-section";
import user_data from "@/lib/data";

const Home = () => {
  return (
    <section>
      <HeroSection
        name={user_data.name}
        bio={user_data.bio}
        profile_image={user_data.profile_image}
      />
    </section>
  );
}

export default Home;