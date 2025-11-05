'use client';

import { TechTopic } from '@/lib/techTopics';

interface InstagramPostProps {
  topic: TechTopic;
  gradient: string;
}

export default function InstagramPost({ topic, gradient }: InstagramPostProps) {
  return (
    <div
      id="instagram-post"
      style={{ background: gradient }}
      className="relative w-[1080px] h-[1080px] flex flex-col items-center justify-center p-16 text-white"
    >
      {/* Emoji Icon */}
      <div className="text-[120px] mb-8 animate-bounce">
        {topic.emoji}
      </div>

      {/* Title */}
      <h1 className="text-7xl font-black text-center mb-6 leading-tight tracking-tight drop-shadow-2xl">
        {topic.title}
      </h1>

      {/* Category Badge */}
      <div className="bg-white/20 backdrop-blur-md px-8 py-3 rounded-full mb-8">
        <span className="text-2xl font-semibold">{topic.category}</span>
      </div>

      {/* Description */}
      <p className="text-3xl text-center max-w-[900px] leading-relaxed font-medium drop-shadow-lg">
        {topic.description}
      </p>

      {/* Bottom branding */}
      <div className="absolute bottom-12 left-0 right-0 flex items-center justify-center">
        <div className="bg-black/30 backdrop-blur-sm px-10 py-4 rounded-full">
          <p className="text-2xl font-bold">TechTrends Daily</p>
        </div>
      </div>
    </div>
  );
}
