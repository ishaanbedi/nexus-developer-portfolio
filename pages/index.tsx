import HeroSection from "@/components/hero-section";
import user_data from "@/lib/data";
import Head from "next/head";

const Home = () => {
  return (
    <section>
      <Head>
        <title>{user_data.name}</title>
        <meta name="description" content={user_data.bio} />
      </Head>
      <HeroSection
        name={user_data.name}
        bio={user_data.bio}
        profile_image={user_data.profile_image}
      />
    </section>
  );
}

export default Home;