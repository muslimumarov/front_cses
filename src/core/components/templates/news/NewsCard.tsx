import { FC } from "react";

interface NewsCardProps {
  image: string;
  title: string;
  categoryTitle: string;
  createdAt: string;
}

const NewsCard: FC<NewsCardProps> = ({
  image,
  title,
  categoryTitle,
  createdAt,
}) => {
  return (
    <div className=" mb-2 px-4 md:px-6 ">
      <div className="flex h-full min-h-[400px] min-w-[270px] flex-col overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-900 dark:text-white">
        <img
          src={`/${image}`}
          className="h-40 w-full object-cover md:h-48"
          alt="Yangilik rasmi"
        />
        <div className="flex flex-1 flex-col justify-between p-3 hover:bg-gray-100 dark:hover:bg-gray-800 md:p-4">
          <h3 className="my-2 line-clamp-3 text-sm font-semibold md:text-lg">
            {title.length > 140 ? title.slice(0, 140) + "..." : title}
          </h3>
          <div className="mt-auto flex items-center justify-between">
            <p className="text-xs text-gray-500">{categoryTitle}</p>
            <p className="mt-1 text-xs text-gray-400 md:text-sm">
              {new Date(createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
