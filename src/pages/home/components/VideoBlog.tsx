import { useState } from 'react';
import { videoBlogs } from '@/mocks/videos';
import type { VideoItem } from '@/mocks/videos';

export default function VideoBlog() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <section className="w-full py-10 md:py-14 px-4 md:px-6 lg:px-10 bg-background-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex-1" />
          <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-background-50 text-center">
            DİJİTAL OSB TV
          </h2>
          <div className="flex-1 flex justify-end" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-6">
          {videoBlogs.filter((_, i) => i === 0 || i === 2).map((video) => (
            <div
              key={video.id}
              className="group relative rounded-xl overflow-hidden bg-background-950 border border-background-800 hover:border-primary-500 transition-all cursor-pointer"
              onClick={() => setActiveVideo(video)}
            >
              <div className="aspect-video relative overflow-hidden bg-black">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-background-50/90 rounded-full group-hover:bg-primary-500 group-hover:text-background-50 transition-all shadow-lg">
                    <i className="ri-play-fill text-primary-600 group-hover:text-background-50 text-xl ml-0.5" />
                  </div>
                </div>
                {/* Duration badge */}
                {video.duration && (
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/70 text-background-50 text-xs font-medium rounded-md">
                    {video.duration}
                  </div>
                )}
              </div>
              <div className="p-3 md:p-4">
                <h3 className="font-heading text-sm font-semibold text-background-100 line-clamp-2 group-hover:text-primary-400 transition-colors">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-background-950 rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video flex items-center justify-center bg-background-900">
              {activeVideo.videoUrl ? (
                <video
                  key={activeVideo.id}
                  src={activeVideo.videoUrl}
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center bg-primary-500/20 rounded-full">
                    <i className="ri-video-on-line text-primary-400 text-3xl" />
                  </div>
                  <p className="text-background-200 text-sm mb-1">Video içeriği yakında eklenecek</p>
                  <p className="text-background-400 text-xs">{activeVideo.title}</p>
                </div>
              )}
            </div>
            <div className="p-4 md:p-5">
              <h3 className="font-heading text-base md:text-lg font-bold text-background-50">
                {activeVideo.title}
              </h3>
            </div>
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-black/50 text-background-50 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Kapat"
            >
              <i className="ri-close-line" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}