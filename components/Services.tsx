import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "Videos", description: "", image: "/stem-1.jpeg" },
  { title: "Courses", description: "", image: "/online-course.svg" },
  { title: "Infographics", description: "", image: "/stem-4.jpeg" },
  { title: "Simulations", description: "", image: "/stem-2.png" },
  { title: "Games", description: "", image: "/video-game.svg" },
  { title: "Resources", description: "", image: "/stem-3.jpeg" },
  { title: "Practice", description: "", image: "/stem-4.jpeg" },

  { title: "Blog", description: "", image: "/stem-2.png" },
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
};

const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
  return (
    <div className="flex gap-4 hover:scale-110 transition-all flex-col items-center justify-center">
      <Image
        src={image}
        alt={title}
        width={120}
        height={100}
        className="object-contain h-full"
      />
      <div className="flex flex-col justify-center gap-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Link href="#" className=" text-sm font-medium">
          {description}
        </Link>
      </div>
    </div>
  );
};
