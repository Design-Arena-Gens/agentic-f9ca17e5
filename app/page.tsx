'use client';

import { useState, useEffect } from 'react';
import InstagramPost from '@/components/InstagramPost';
import { TechTopic, getRandomTopic, generateCaption } from '@/lib/techTopics';
import { getRandomGradient } from '@/lib/gradients';
import html2canvas from 'html2canvas';
import { Sparkles, Download, RefreshCw, Copy, Check } from 'lucide-react';

export default function Home() {
  const [topic, setTopic] = useState<TechTopic | null>(null);
  const [gradient, setGradient] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    generateNewPost();
  }, []);

  const generateNewPost = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setTopic(getRandomTopic());
      setGradient(getRandomGradient());
      setIsGenerating(false);
    }, 300);
  };

  const downloadPost = async () => {
    if (!topic) return;

    setIsDownloading(true);
    const element = document.getElementById('instagram-post');
    if (element) {
      try {
        const canvas = await html2canvas(element, {
          scale: 2,
          backgroundColor: null,
        });
        const link = document.createElement('a');
        link.download = `tech-post-${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      } catch (error) {
        console.error('Error generating image:', error);
      }
    }
    setIsDownloading(false);
  };

  const copyCaption = () => {
    if (topic) {
      navigator.clipboard.writeText(generateCaption(topic));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-2xl font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-black text-white mb-4 flex items-center justify-center gap-4">
            <Sparkles className="w-12 h-12" />
            Instagram Tech Post Generator
            <Sparkles className="w-12 h-12" />
          </h1>
          <p className="text-xl text-white/80">
            Generate stunning Instagram posts for trending tech topics
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          {/* Post Preview */}
          <div className="flex-shrink-0">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
              <div className="transform scale-[0.4] origin-top-left" style={{ width: '1080px', height: '1080px' }}>
                <InstagramPost topic={topic} gradient={gradient} />
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex-1 max-w-lg">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl text-white">
              <h2 className="text-3xl font-bold mb-6">Post Details</h2>

              {/* Topic Info */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Title</h3>
                <p className="text-lg bg-white/10 p-4 rounded-xl">{topic.title}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Category</h3>
                <p className="text-lg bg-white/10 p-4 rounded-xl">{topic.category}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Caption</h3>
                <div className="bg-white/10 p-4 rounded-xl">
                  <p className="text-sm whitespace-pre-wrap">{generateCaption(topic)}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={generateNewPost}
                  disabled={isGenerating}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3 text-lg shadow-lg"
                >
                  <RefreshCw className={`w-5 h-5 ${isGenerating ? 'animate-spin' : ''}`} />
                  Generate New Post
                </button>

                <button
                  onClick={downloadPost}
                  disabled={isDownloading}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3 text-lg shadow-lg"
                >
                  <Download className="w-5 h-5" />
                  {isDownloading ? 'Downloading...' : 'Download Image'}
                </button>

                <button
                  onClick={copyCaption}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3 text-lg shadow-lg"
                >
                  {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  {copied ? 'Copied!' : 'Copy Caption'}
                </button>
              </div>

              {/* Stats */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <h3 className="text-lg font-semibold mb-3">Post Specs</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="text-white/60">Dimensions</div>
                    <div className="font-semibold">1080 x 1080</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="text-white/60">Format</div>
                    <div className="font-semibold">Square Post</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="text-white/60">Quality</div>
                    <div className="font-semibold">High (2x)</div>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="text-white/60">Hashtags</div>
                    <div className="font-semibold">{topic.hashtags.length}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
