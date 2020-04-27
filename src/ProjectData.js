import fleetLogo from "./images/fleetpc.svg";
import fleetSc from "./images/fleetpc.PNG";
import literasureLogo from "./images/literasure-full.svg";
import literasureSc from "./images/literasure.PNG";
import partboxLogo from "./images/PARTBOX_White.svg";
import partboxSc from "./images/partbox.PNG";

const projects = [
    {
        title: "Fleet PC",
        logo: fleetLogo,
        sc: fleetSc,
        desc:
            "Fleet PC is a small service I created for custom PC builds. My biggest problem with big companies that sell PCs is that you never know where your money is going. I wanted to create a service that showed customers exactly how their PC expenses were divided. Although I currently use this for extended friends and family, I may look into establishing a sole proprietorship in the future.",
        link: "https://fleetpc.org",
    },
    {
        title: "Literasure",
        logo: literasureLogo,
        sc: literasureSc,
        desc:
            "Literasure is a mock website for a book recommendation service. This website's concept is based off the idea of Goodreads, but with more artificial intelligence and accuracy. This project gave me another chance to work with Adobe XD mockups, displayed on the about page where a paper sketch and various protoypes are included.",
        link: "https://literasure.netlify.app/",
    },
    {
        title: "PARTBOX",
        logo: partboxLogo,
        sc: partboxSc,
        desc:
            "PARTBOX is a mock website for a PC part delivery service. This website's concept is based off the idea of Lootcrate, but geared towards PC builders. I think this would be a genuinely interesting business plan for a company that tailors to a unique audience; I wish something of this sort existed! I've had some PC hardware experience, so this came to mind when generating an idea for a mock website as a frontend project to practice my skills.",
        link: "https://coddingtonjoel.github.io/PARTBOX/",
    },
];

export default projects;
