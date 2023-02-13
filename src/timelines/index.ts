import gsap from 'gsap';

type timelineProps = {
  listRef: React.RefObject<HTMLDivElement>;
  backgroundRef: React.RefObject<HTMLDivElement>;
  duration: number;
  ease: string;
};

export const openMenuTimeline = ({ listRef, backgroundRef, duration, ease }: timelineProps) => {
  const time = duration / 1000;

  gsap.to(listRef.current, {
    duration: time,
    opacity: 1,
    transform: 'translateY(0)',
    ease,
  });
  gsap.to(backgroundRef.current, { opacity: 1, duration: time / 2 });
};

export const closeMenuTimeline = ({ listRef, backgroundRef, duration, ease }: timelineProps) => {
  const time = (duration - 100) / 1000;

  gsap.to(listRef.current, {
    duration: time,
    opacity: 1,
    transform: 'translateY(-100%)',
    ease,
  });
  gsap.to(backgroundRef.current, { opacity: 0, duration: time / 2 });
};
