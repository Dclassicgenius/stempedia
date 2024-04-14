import Image from "next/image";
import Link from "next/link";

const news = [
  {
    title: "Quam vulputate n est ante in nibh mauris.",
    description:
      "Integer feugiat scelerisque varius morbi enim nunc faucibus a. Iaculis eu non diam phasellus. Scelerisque eleifend donec pretium vulputate sapien. Mauris a diam maecenas sed enim ut. Est placerat in egestas erat imperdiet.",
    image: "/ai.png",
  },
  {
    title: "Viverra accumsan eu ultrices vitae auctor.",
    description:
      "Odio aenean sed adipiscing diam donec. Dictum fusce ut placerat orci. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Quam vulputate dignissim suspendisse in est ante in nibh mauris. Volutpat ac tincidunt vitae semper quis lectus. ",
    image: "/ai.png",
  },
  {
    title: "Velit euismod in duis ultricies lacus.",
    description:
      "Nunc vel risus commodo viverra maecenas accumsan lacus. Nec nam aliquam sem et. Gravida neque convallis a cras. Id consectetur purus ut faucibus pulvinar elementum integer. Vitae justo eget magna fermentum iaculis eu non diam.",
    image: "/ai.png",
  },
];

const News = () => {
  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold text-center">Latest</h1>
      <div className="grid grid-cols-3 mt-10 gap-10">
        {news.map((news) => (
          <NewsCard
            key={news.title}
            title={news.title}
            description={news.description}
            image={news.image}
          />
        ))}
      </div>
    </section>
  );
};

export default News;

type NewCardProps = {
  title: string;
  description: string;
  image: string;
};

const NewsCard = ({ title, description, image }: NewCardProps) => {
  return (
    <div className="flex gap-4 hover:scale-110 transition-all">
      <Image
        src={image}
        alt="news"
        width={200}
        height={200}
        className="rounded-xl "
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
