import { ThumbCard, type ThumbCardProps } from "./thumb-card";

export const CircularProgressThumb = (props: ThumbCardProps) => (
  <ThumbCard {...props}>
    <div className="flex items-center justify-center">
      <div className="relative flex size-20 items-center justify-center rounded-full shadow-md/5">
        <div className="absolute inset-0 rounded-full border-8 border-input" />
        <div
          className="absolute inset-0 rounded-full border-8 border-primary"
          style={{
            clipPath:
              "polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 70%, 50% 70%)",
          }}
        />
      </div>
    </div>
  </ThumbCard>
);
