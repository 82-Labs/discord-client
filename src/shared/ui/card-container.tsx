import { cn } from "~/shared/lib/utils/cn";

interface CardContainerProps {
  className?: string;
  title: string;
  description: string;
  videoSrc: string;
}

export function CardContainer({
  className,
  title,
  description,
  videoSrc,
}: CardContainerProps) {
  return (
    <section className="flex flex-col items-center justify-center px-8 ">
      <div
        className={cn(
          "flex flex-col items-center justify-center py-8 px-6 rounded-6xl xl:rounded-15xl bg-linear-to-r from-discord-blur to-discord-blur backdrop-blur-md lg:justify-between",
          "lg:flex-row",
          className,
        )}
      >
        <div className="flex flex-col items-center justify-center px-8 mb-10 lg:w-1/2 lg:max-w-1/3 lg:items-start">
          <h2 className="text-3xl font-bold mb-2 lg:text-5xl">{title}</h2>
          <p className="text-base text-discord-text tracking-normal lg:text-lg">
            {description}
          </p>
        </div>
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          className="rounded-5xl xl:rounded-14xl lg:w-2/3"
        />
      </div>
    </section>
  );
}
