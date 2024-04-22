import Image from "next/image";
import Link from "next/link";

const news = [
  {
    title:
      "From Ideas to Opportunities: How AI is Transforming Education and Unlocking the Potential of Children.",
    description:
      "AI in education is transforming how children learn by providing customized and interactive experiences that cater to individual learning styles. This technological advancement is unlocking children's potential by making education more accessible, engaging, and effective.",
    image: "/news1.jpeg",
  },
  {
    title: "The Potential Advantages of Artificial Intelligence for Learners.",
    description:
      "Artificial Intelligence offers significant potential benefits for students by enhancing educational tools with personalized learning algorithms and real-time feedback. This technology promises to improve understanding, retention, and academic success by adapting to individual learning paces and preferences.",
    image: "/news2.jpeg",
  },
  {
    title: "StemPedia Gains Increased Public Attention.",
    description:
      "StemPedia, a platform dedicated to enhancing STEM education, is receiving increased public attention for its innovative learning tools and resources. This surge in visibility highlights its role in empowering students with critical thinking and problem-solving skills essential for future careers.",
    image: "/news3.jpeg",
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
        className="rounded-xl object-cover h-full"
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
