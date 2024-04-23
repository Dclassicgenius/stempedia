import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "Videos", description: "", image: "/stem-1.jpeg", link: "#" },
  { title: "Courses", description: "", image: "/online-course.svg", link: "#" },
  { title: "Infographics", description: "", image: "/stem-4.jpeg", link: "#" },
  { title: "Simulations", description: "", image: "/stem-2.png", link: "#" },
  {
    title: "Games",
    description: "",
    image: "/video-game.svg",
    link: "https://www.figma.com/proto/u6ZLhc0YDAgaRsAU2F3gRH/IAEA?page-id=0%3A1&type=design&node-id=3-3&viewport=506%2C-782%2C0.32&t=yeJaFrmtC7HKcCun-1&scaling=min-zoom&mode=design",
  },
  {
    title: "Written Guides",
    description: "",
    image: "/stem-3.jpeg",
    link: "#",
  },
  { title: "Practice", description: "", image: "/practice.jpeg", link: "#" },
  { title: "Blog", description: "", image: "/blog.jpeg", link: "#" },
];
const Services = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">Services</h1>
      <div className="grid grid-cols-8 mt-10 gap-10">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            image={service.image}
            link={service.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const ServiceCard = ({ title, description, image, link }: ServiceCardProps) => {
  return (
    <div className="flex gap-4 hover:scale-110 transition-all flex-col items-center justify-center">
      <Link href={link} target="_blank">
        <Image
          src={image}
          alt={title}
          width={120}
          height={100}
          className="object-contain h-full"
        />
        <div className="flex flex-col justify-center gap-4">
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
      </Link>
    </div>
  );
};
