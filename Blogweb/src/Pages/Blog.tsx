import React from "react";
import { Link } from "react-router";
import BlogBanner from "../assets/blogBanner.png";
import Rules from "../assets/Rules.png";
import Build from "../assets/build.png";
import FootBall from "../assets/football.png";
import Footer from "../Components/Footer";

const Blog = () => {
  return (
    <React.Fragment>
      <SingleBlogPost />
      <PopularPost />
      <Footer />
    </React.Fragment>
  );
};

const SingleBlogPost = () => {
  return (
    <section className="single_posts max-w-[90%] sm:max-w-[80%] mx-auto">
      <div className="my-12 mt-18">
        <div className="flex  gap-8 items-center text-sm mb-4">
          <p className="text-zinc-900 font-semibold">Development</p>
          <p className="text-zinc-600 font-semibold">16th of March 2025</p>
        </div>
        <div className="headerBlog">
          <h1 className="text-zinc-900 font-semibold text-xl sm:text-2xl  md:text-3xl hover:text-zinc-500 duration-300 cursor-pointer">
            How to make a Game look more attractive with New VR & AI Technology
          </h1>
        </div>
        <div className="my-2 mt-8">
          <img src={BlogBanner} alt="" />
        </div>
        <div className="content_texts">
          <div className="max-w-[100%] md:max-w-[90%] mx-auto text-zinc-500 text-balance mt-8">
            <p>
              Virtual reality (VR) is revolutionizing the gaming industry,
              offering players immersive experiences like never before. With
              advancements in graphics rendering, haptic feedback, and AI-driven
              interactions, gamers can step into expansive digital worlds that
              feel more lifelike than ever. From fast-paced action games to
              deeply narrative-driven RPGs, VR is pushing the boundaries of
              interactive entertainment. The development of standalone VR
              headsets and powerful PC-driven VR systems has allowed more
              players to experience high-fidelity virtual environments without
              being tethered to cumbersome hardware.
            </p>
            <br />
            <p>
              Breakthroughs in AI are also transforming how games are developed
              and played. Procedural generation powered by AI allows for
              infinite world-building, while machine learning enhances NPC
              behavior, making in-game characters more intelligent and
              responsive. Developers are also integrating AI into VR
              experiences, enabling real-time voice recognition, adaptive
              storytelling, and dynamic environments that react to player
              actions. This shift is making single-player and multiplayer
              experiences more engaging and unpredictable, ensuring that no two
              playthroughs feel exactly the same.
            </p>
            <br />
            <p>
              The integration of VR in social gaming has led to the rise of
              virtual spaces where players can connect, compete, and collaborate
              in entirely digital environments. Platforms like the Metaverse are
              shaping the future of online interaction, blending gaming, social
              networking, and digital commerce. Gamers can now build, explore,
              and interact with others in persistent virtual worlds, making
              online gaming more engaging and interactive than ever. With
              features like voice chat, gesture tracking, and shared VR spaces,
              social gaming is moving toward a new era of immersion and
              presence.
            </p>
            <br />
            <p>
              More than ever, gaming companies are leveraging AI and VR together
              to create hyper-realistic gaming experiences. In racing
              simulations, AI-driven opponents can learn from player behavior,
              making each race more challenging and dynamic. In VR fitness
              games, AI can analyze movements and provide real-time feedback to
              improve performance. Meanwhile, game developers are utilizing
              neural networks to create more lifelike animations, procedural
              content, and physics-based interactions that react to the player's
              input in a seamless and natural way.
            </p>
            <p>
              The future of gaming and VR holds even greater promise as
              advancements in cloud computing, 5G, and augmented reality (AR)
              continue to evolve. Cloud-based VR gaming is on the rise, reducing
              the need for high-end hardware and making immersive experiences
              accessible to a wider audience. The gaming industry is on the cusp
              of a major transformation, and as VR technology matures, players
              can expect even deeper, more interactive experiences. Stay tuned
              for more innovations in the months and years ahead as VR and AI
              redefine what’s possible in the world of gaming.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const PopularPost = () => {
  const DummyPosts = [
    {
      id: 1,
      Imagess: Rules,
      title: "8 Rules of Travelling In Sea You Need To Know",
      Description:
        "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs ",
      subTitle: "Travel",
      dates: "13 March 2023",
    },
    {
      id: 2,
      Imagess: Build,
      title: "How to build strong portfolio and get a Job in UI/UX",
      Description:
        "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from ",
      subTitle: "Development",
      dates: "11 March 2023",
    },
    {
      id: 3,
      Imagess: FootBall,
      title: "How to Be a Professional Footballer in 2023",
      Description:
        "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive",
      subTitle: "Sports",
      dates: "16 March 2023",
    },
  ];

  return (
    <main className="blogs_posts max-w-[90%] sm:max-w-[80%] mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl sm:text-2xl md:text-3xl text-zinc-800 font-semibold">
          Popular Post
        </h1>
        <div className="btn_class">
          <button className="text-white text-[14px] sm:text-[16px] font-medium bg-blue-900 hover:bg-white hover:text-blue-950 border hover:border-blue-950 transition-colors duration-300 px-8 py-2 rounded-sm cursor-pointer shadow-sm">
            <Link to={"/blogs"}>View All</Link>
          </button>
        </div>
      </div>
      <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {DummyPosts.map((bloggss, index) => (
          <div className="potss" key={index}>
            <div className="overflow-hidden">
              <img
                src={bloggss.Imagess}
                className="w-full h-full object-cover transition-transform ease-in-out hover:scale-120 duration-500 cursor-pointer"
                alt="Zoom Image"
              />
            </div>
            <div>
              <div className="flex gap-8 items-center">
                <p className="text-sm text-zinc-700 font-semibold capitalize my-4">
                  {bloggss.subTitle}
                </p>
                <p className="text-sm text-balance text-zinc-500">
                  {bloggss.dates}
                </p>
              </div>
              <h1 className="text-zinc-900 text-xl font-bold text-balance mb-4">
                {bloggss.title}
              </h1>
              <p className="text-zinc-600 text-balance mb-4">
                {bloggss.Description}
              </p>
              <div className="btn_class">
                <button className="text-purple-900 text-[14px] sm:text-[16px] font-bold underline cursor-pointer text-balance">
                  <Link to={`/blog/${bloggss.id}`}>Read More</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </article>
    </main>
  );
};

export default Blog;
