export interface TechTopic {
  title: string;
  category: string;
  description: string;
  hashtags: string[];
  emoji: string;
}

export const trendingTopics: TechTopic[] = [
  {
    title: "AI Agents Are Taking Over",
    category: "Artificial Intelligence",
    description: "Autonomous AI agents are revolutionizing how we work. From coding assistants to customer service bots, the future is agentic.",
    hashtags: ["#AIAgents", "#ArtificialIntelligence", "#TechTrends", "#Innovation", "#FutureTech"],
    emoji: "🤖"
  },
  {
    title: "Quantum Computing Breakthrough",
    category: "Quantum Tech",
    description: "Scientists achieve quantum advantage in error correction. We're one step closer to practical quantum computers that could change everything.",
    hashtags: ["#QuantumComputing", "#TechNews", "#Innovation", "#FutureTech", "#Science"],
    emoji: "⚛️"
  },
  {
    title: "Web3 Evolution",
    category: "Blockchain",
    description: "Decentralized apps are becoming mainstream. New protocols make blockchain faster, cheaper, and more accessible than ever.",
    hashtags: ["#Web3", "#Blockchain", "#Crypto", "#Decentralized", "#TechTrends"],
    emoji: "⛓️"
  },
  {
    title: "Neural Interfaces",
    category: "BCI Technology",
    description: "Brain-computer interfaces enable thought-controlled devices. The line between human and machine continues to blur.",
    hashtags: ["#Neuralink", "#BCI", "#FutureTech", "#Innovation", "#TechNews"],
    emoji: "🧠"
  },
  {
    title: "Edge AI Revolution",
    category: "Edge Computing",
    description: "AI processing moves to devices. Faster, more private, and works offline. The cloud era is evolving.",
    hashtags: ["#EdgeAI", "#IoT", "#MachineLearning", "#TechTrends", "#Innovation"],
    emoji: "📱"
  },
  {
    title: "Green Tech Innovation",
    category: "Sustainability",
    description: "Carbon-negative data centers and renewable energy solutions. Tech companies are leading the climate revolution.",
    hashtags: ["#GreenTech", "#Sustainability", "#CleanEnergy", "#Innovation", "#ClimateTech"],
    emoji: "🌱"
  },
  {
    title: "Spatial Computing Era",
    category: "AR/VR",
    description: "Mixed reality devices blur physical and digital worlds. The next computing platform is here.",
    hashtags: ["#SpatialComputing", "#AR", "#VR", "#AppleVision", "#TechTrends"],
    emoji: "🥽"
  },
  {
    title: "Cybersecurity 2.0",
    category: "Security",
    description: "AI-powered threat detection meets quantum encryption. The security landscape is being redefined.",
    hashtags: ["#Cybersecurity", "#InfoSec", "#TechNews", "#ZeroTrust", "#Innovation"],
    emoji: "🔒"
  }
];

export function getRandomTopic(): TechTopic {
  return trendingTopics[Math.floor(Math.random() * trendingTopics.length)];
}

export function generateCaption(topic: TechTopic): string {
  return `${topic.description}\n\n${topic.hashtags.join(' ')}\n\n#Tech #Technology #Innovation #FutureTech #TechNews`;
}
