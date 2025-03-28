import { useRef } from 'react';
import { Flipped } from 'react-flip-toolkit';
import { NavLink } from 'react-router';

import { CustomEllipsis } from '@wsh-2025/client/src/features/layout/components/CustomEllipsis';
import { Hoverable } from '@wsh-2025/client/src/features/layout/components/Hoverable';
import { useIntersectionObserver } from '@wsh-2025/client/src/features/recommended/hooks/useIntersectionObserver';

interface Props {
  episode: {
    id: string;
    premium: boolean;
    series: {
      title: string;
    };
    thumbnailUrl: string;
    title: string;
  };
}

export const EpisodeItem = ({ episode }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(containerRef);

  return (
    <Hoverable classNames={{ hovered: 'opacity-75' }}>
      <NavLink viewTransition className="block w-full overflow-hidden" to={`/episodes/${episode.id}`}>
        {({ isTransitioning }) => {
          return (
            <>
              <Flipped stagger flipId={isTransitioning ? `episode-${episode.id}` : 0}>
                <div
                  ref={containerRef}
                  className="relative overflow-hidden rounded-[8px] border-[2px] border-solid border-[#FFFFFF1F] before:absolute before:inset-x-0 before:bottom-0 before:block before:h-[64px] before:bg-gradient-to-t before:from-[#212121] before:to-transparent before:content-['']"
                >
                  {isVisible ? (
                    <img alt="" className="h-auto w-full" loading="lazy" src={episode.thumbnailUrl} />
                  ) : (
                    <div className="h-0 w-full bg-[#212121] pb-[56.25%]"></div>
                  )}
                  {/* <span className="i-material-symbols:play-arrow-rounded absolute bottom-[4px] left-[4px] m-[4px] block size-[20px] text-[#ffffff]" /> */}
                  {/* 再生アイコン */}
                  <svg
                    className="absolute bottom-[4px] left-[4px] m-[4px] block size-[20px] text-[#ffffff]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712"
                      fill="currentColor"
                    />
                  </svg>
                  {episode.premium ? (
                    <span className="absolute bottom-[8px] right-[4px] inline-flex items-center justify-center rounded-[4px] bg-[#1c43d1] p-[4px] text-[10px] text-[#ffffff]">
                      プレミアム
                    </span>
                  ) : null}
                </div>
              </Flipped>
              <div className="p-[8px]">
                <div className="mb-[4px] text-[14px] font-bold text-[#ffffff]">
                  <CustomEllipsis maxLine={2} text={episode.title} visibleLine={2} />
                </div>
                <div className="text-[12px] text-[#999999]">
                  <CustomEllipsis maxLine={2} text={episode.series.title} visibleLine={2} />
                </div>
              </div>
            </>
          );
        }}
      </NavLink>
    </Hoverable>
  );
};
