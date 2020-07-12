import compactLogo from "./images/compact.png";
import fleetLogo from "./images/fleetpc.svg";
import octagonsLogo from "./images/Octagons.svg";
import literasureLogo from "./images/literasure-full.svg";
import compact1 from "./images/screenshots/compact1.jpg";
import compact2 from "./images/screenshots/compact2.jpg";
import compact3 from "./images/screenshots/compact3.jpg";
import fleet1 from "./images/screenshots/fleet1.jpg";
import fleet2 from "./images/screenshots/fleet2.jpg";
import fleet3 from "./images/screenshots/fleet3.jpg";
import octagons1 from "./images/screenshots/octagons1.jpg";
import octagons2 from "./images/screenshots/octagons2.jpg";
import octagons3 from "./images/screenshots/octagons3.jpg";
import literasure1 from "./images/screenshots/literasure1.jpg";
import literasure2 from "./images/screenshots/literasure2.jpg";
import literasure3 from "./images/screenshots/literasure3.jpg";

const projects = [
    {
        title: "COMPACT",
        sub: "All-in-one Code Minifier for Desktop",
        tech: "Electron, React.js, Node.js, Sass",
        logo: compactLogo,
        sc1: compact1,
        sc2: compact2,
        sc3: compact3,
        desc:
            "Compact is an all-in-one code minifier for desktop. Using Electron and React.js, Compact aims to allow users to create batch exports of minified files at a very fast speed. The app is currently in a pre-alpha stage, so everything may be subject to change. Once beta hits, Compact will be making its way to the macOS App Store and Windows Store while staying open source on GitHub.",
        link: "https://github.com/coddingtonjoel/Compact",
    },
    {
        title: "FLEET PC",
        sub: "Custom PC Builds",
        tech: "React.js, Node.js, Sass",
        logo: fleetLogo,
        sc1: fleet1,
        sc2: fleet2,
        sc3: fleet3,
        desc:
            "Fleet PC is a small service I created for custom PC builds. My biggest problem with big companies that sell PCs is that you never know where your money is going. I wanted to create a service that showed customers exactly how their PC expenses were divided. Although I currently use this for extended friends and family, I may look into establishing a sole proprietorship in the future.",
        link: "https://fleetpc.org",
    },
    {
        title: "OCTAGONS",
        sub: "Ditigal Marketing for Businesses in Need",
        tech: "React.js, Node.js, Sass",
        logo: octagonsLogo,
        sc1: octagons1,
        sc2: octagons2,
        sc3: octagons3,
        desc:
            "Octagons is a full-service, Gen Z-run digital marketing & advertising agency based in the United States. In light of COVID-19’s effects on small businesses, Octagons was formed under a common goal: to connect brands with their online audience. The team is a diverse group of creative and passionate storytellers from the business, advertising, and technology fields coming together to deliver inventive marketing campaigns, from research to strategy to execution.",
        link: "https://octagons.org/",
    },
    {
        title: "LITERASURE",
        sub: "Mock Website for a Book Recommendation Service",
        tech: "React.js, Sass, Adobe XD",
        logo: literasureLogo,
        sc1: literasure1,
        sc2: literasure2,
        sc3: literasure3,
        desc:
            "Literasure is a mock website for a book recommendation service. This website's concept is based off the idea of Goodreads, but with more artificial intelligence and accuracy. This project gave me another chance to work with Adobe XD mockups, displayed on the about page where a paper sketch and various protoypes are included.",
        link: "https://literasure.netlify.app/",
    },
];

export default projects;
