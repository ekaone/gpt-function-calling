interface IFeatures {
  id: number;
  name: string;
  url: string;
}

export const features: IFeatures[] = [
  { id: 1, name: "Chat Hacker News", url: "/hacker-news" },
  { id: 2, name: "Function Calling", url: "/function-calling" },
  { id: 3, name: "Music Recomendation", url: "/mr" },
  { id: 4, name: "Find Startup ideas", url: "/startup-ideas" },
  { id: 5, name: "Dad Jokes for fun", url: "/dj" },
];
