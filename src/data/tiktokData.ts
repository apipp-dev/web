export interface DailyStat {
  date: string;
  views: number;
  profileViews: number;
  likes: number;
  comments: number;
  shares: number;
}

export interface VideoContent {
  title: string;
  link: string;
  postTime: string;
  likes: number;
  comments: number;
  shares: number;
  views: number;
}

export interface ViewerTypeData {
  date: string;
  total: number;
  newViewers: number;
  returningViewers: number;
}

export interface FollowerHistory {
  date: string;
  followers: number;
  diff: number;
}

export interface FollowerActivity {
  hour: string;
  active: number;
}

export interface Demographics {
  name: string;
  value: number;
  percentage: string;
}

export interface InstagramInsightsData {
  views: {
    total: number;
    followersPercent: number;
    nonFollowersPercent: number;
    accountsReached: number;
    contentType: {
      stories: number;
      reels: number;
      posts: number;
    };
  };
  topContent: Array<{
    date: string;
    viewsLabel: string;
    viewsValue: number;
    imagePlaceholder: string;
    link?: string;
    likes?: number;
    comments?: number;
    shares?: number;
    saves?: number;
    type?: string;
    title?: string;
    interactions?: number;
    accountsReached?: number;
    profileVisits?: number;
    follows?: number;
    thumbnailUrl?: string;
  }>;
  interactions: {
    total: number;
    followersPercent: number;
    nonFollowersPercent: number;
    accountsEngaged: number;
    contentType: {
      reels: number;
      posts: number;
      stories: number;
    };
  };
  profile: {
    activity: number;
    visits: number;
    externalLinkTaps: number;
  };
  followers: {
    total: number;
    activeTimes: Array<{
      time: string;
      activeCount: number;
    }>;
  };
}

export const instagramInsights: InstagramInsightsData = {
  views: {
    total: 35032,
    followersPercent: 21.5,
    nonFollowersPercent: 78.5,
    accountsReached: 11210,
    contentType: {
      stories: 15.0,
      reels: 52.0,
      posts: 33.0
    }
  },
  topContent: [
    {
      date: "26 Jun 2025",
      viewsLabel: "16,481",
      viewsValue: 16481,
      imagePlaceholder: "🌊",
      link: "https://www.instagram.com/p/DLWIF77TPWC/?igsh=NTV1Ym5jZ29haDFp",
      likes: 167,
      comments: 2,
      shares: 3,
      saves: 1,
      type: "Carousel",
      title: "Aesthetic Coastal Views Carousel",
      interactions: 173,
      accountsReached: 1580,
      profileVisits: 13,
      follows: 1,
      thumbnailUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
    },
    {
      date: "12 Mar 2025",
      viewsLabel: "5,421",
      viewsValue: 5421,
      imagePlaceholder: "🤷‍♂️",
      link: "https://www.instagram.com/reel/DVw4TGNkyve/?igsh=NTk2cXNkcGtodmtn",
      likes: 159,
      comments: 2,
      shares: 2,
      saves: 42,
      type: "Reel",
      title: "ya... itu saja untuk sekarang 🤷‍♂️...",
      interactions: 209,
      accountsReached: 4235,
      profileVisits: 4,
      follows: 5,
      thumbnailUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80"
    },
    {
      date: "18 Aug 2025",
      viewsLabel: "5,417",
      viewsValue: 5417,
      imagePlaceholder: "🇮🇩",
      link: "https://www.instagram.com/reel/DNfh4uhTqFr/?igsh=bjUyaHJha2Y2M3N2",
      likes: 116,
      comments: 1,
      shares: 8,
      saves: 9,
      type: "Reel",
      title: "Merdeka bukan hanya tentang bebas dari penjajahan... 🇮🇩",
      interactions: 138,
      accountsReached: 4635,
      profileVisits: 17,
      follows: 17,
      thumbnailUrl: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80"
    },
    {
      date: "13 May 2025",
      viewsLabel: "4,570",
      viewsValue: 4570,
      imagePlaceholder: "🌿",
      link: "https://www.instagram.com/reel/DJmFoUqh5RV/?igsh=MTBlZWl6bWxuYTZvdQ==",
      likes: 132,
      comments: 6,
      shares: 6,
      saves: 1,
      type: "Reel",
      title: "Reset Mood 🌿",
      interactions: 146,
      accountsReached: 1744,
      profileVisits: 12,
      follows: 3,
      thumbnailUrl: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=80"
    },
    {
      date: "3 Jul 2025",
      viewsLabel: "3,143",
      viewsValue: 3143,
      imagePlaceholder: "🌌",
      link: "https://www.instagram.com/reel/DLpcIZDxcc-/?igsh=MTBxeTZybmUwMDF4bw==",
      likes: 90,
      comments: 13,
      shares: 3,
      saves: 0,
      type: "Reel",
      title: "Dan.... ya... 🌌",
      interactions: 106,
      accountsReached: 1410,
      profileVisits: 8,
      follows: 2,
      thumbnailUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80"
    }
  ],
  interactions: {
    total: 850,
    followersPercent: 25.4,
    nonFollowersPercent: 74.6,
    accountsEngaged: 520,
    contentType: {
      reels: 65.0,
      posts: 25.0,
      stories: 10.0
    }
  },
  profile: {
    activity: 210,
    visits: 185,
    externalLinkTaps: 25
  },
  followers: {
    total: 218,
    activeTimes: [
      { time: "12am", activeCount: 81 },
      { time: "3am", activeCount: 87 },
      { time: "6am", activeCount: 85 },
      { time: "9am", activeCount: 57 },
      { time: "12pm", activeCount: 24 },
      { time: "3pm", activeCount: 38 },
      { time: "6pm", activeCount: 65 },
      { time: "9pm", activeCount: 79 }
    ]
  }
};

export const dailyStats: DailyStat[] = [
  { date: "22 May", views: 118, profileViews: 4, likes: 23, comments: 0, shares: 1 },
  { date: "23 May", views: 101, profileViews: 0, likes: 5, comments: 0, shares: 0 },
  { date: "24 May", views: 114, profileViews: 1, likes: 10, comments: 0, shares: 0 },
  { date: "25 May", views: 1454, profileViews: 9, likes: 53, comments: 3, shares: 2 },
  { date: "26 May", views: 940, profileViews: 9, likes: 84, comments: 0, shares: 0 },
  { date: "27 May", views: 433, profileViews: 1, likes: 36, comments: 0, shares: 0 },
  { date: "28 May", views: 136, profileViews: 2, likes: 12, comments: 0, shares: 1 },
  { date: "29 May", views: 237, profileViews: 5, likes: 17, comments: 3, shares: 0 },
  { date: "30 May", views: 105, profileViews: 8, likes: 1, comments: 0, shares: 1 },
  { date: "31 May", views: 67, profileViews: 7, likes: 4, comments: 0, shares: 1 },
  { date: "1 June", views: 64, profileViews: 4, likes: 7, comments: 0, shares: 0 },
  { date: "2 June", views: 155, profileViews: 8, likes: 12, comments: 0, shares: 1 },
  { date: "3 June", views: 4035, profileViews: 35, likes: 545, comments: 2, shares: 10 },
  { date: "4 June", views: 2765, profileViews: 9, likes: 674, comments: 7, shares: 15 },
  { date: "5 June", views: 2348, profileViews: 10, likes: 506, comments: 2, shares: 0 },
  { date: "6 June", views: 1423, profileViews: 1, likes: 230, comments: 0, shares: 9 },
  { date: "7 June", views: 1039, profileViews: 6, likes: 79, comments: 2, shares: 0 },
  { date: "8 June", views: 1044, profileViews: 11, likes: 74, comments: 0, shares: 2 },
  { date: "9 June", views: 1517, profileViews: 14, likes: 96, comments: 0, shares: 0 },
  { date: "10 June", views: 1421, profileViews: 13, likes: 107, comments: 0, shares: 1 },
  { date: "11 June", views: 3454, profileViews: 10, likes: 476, comments: 0, shares: 2 },
  { date: "12 June", views: 4916, profileViews: 21, likes: 612, comments: 4, shares: 8 },
  { date: "9 March", views: 3004, profileViews: 9, likes: 383, comments: 0, shares: 23 },
  { date: "10 March", views: 292, profileViews: 3, likes: 24, comments: 2, shares: 0 },
  { date: "11 March", views: 34, profileViews: 3, likes: 3, comments: 0, shares: 1 },
  { date: "12 March", views: 74, profileViews: 5, likes: 2, comments: 1, shares: 0 },
  { date: "13 March", views: 78, profileViews: 2, likes: 1, comments: 0, shares: 0 },
  { date: "14 March", views: 66, profileViews: 3, likes: 2, comments: 0, shares: 1 },
  { date: "15 March", views: 70, profileViews: 2, likes: 0, comments: 0, shares: 0 },
  { date: "16 March", views: 58, profileViews: 0, likes: 0, comments: 0, shares: 1 },
  { date: "17 March", views: 74, profileViews: 0, likes: 3, comments: 0, shares: 0 },
  { date: "18 March", views: 1905, profileViews: 4, likes: 110, comments: 1, shares: 2 },
  { date: "19 March", views: 3611, profileViews: 10, likes: 254, comments: 2, shares: 2 },
  { date: "20 March", views: 2154, profileViews: 9, likes: 116, comments: 1, shares: 0 },
  { date: "21 March", views: 74, profileViews: 2, likes: 3, comments: 0, shares: 0 },
  { date: "22 March", views: 38, profileViews: 3, likes: 1, comments: 0, shares: 0 },
  { date: "23 March", views: 44, profileViews: 1, likes: 0, comments: 0, shares: 0 },
  { date: "24 March", views: 45, profileViews: 1, likes: 2, comments: -2, shares: 0 },
  { date: "25 March", views: 48, profileViews: 4, likes: 0, comments: 0, shares: 2 },
  { date: "26 March", views: 84, profileViews: 5, likes: 1, comments: 0, shares: 0 },
  { date: "27 March", views: 55, profileViews: 3, likes: 1, comments: 0, shares: 0 },
  { date: "28 March", views: 43, profileViews: 3, likes: 0, comments: 0, shares: 0 },
  { date: "29 March", views: 54, profileViews: 1, likes: 3, comments: 0, shares: 4 },
  { date: "30 March", views: 251, profileViews: 6, likes: 0, comments: 0, shares: 1 },
  { date: "31 March", views: 56, profileViews: 1, likes: 0, comments: 0, shares: 0 }
];

export const tiktokVideos: VideoContent[] = [
  {
    title: ". #sunset #fyp #CapCut #foryoupage",
    link: "https://www.tiktok.com/@apippppokonya/video/7595193766688853266",
    postTime: "14 Jan",
    likes: 1134,
    comments: 1,
    shares: 38,
    views: 9660
  },
  {
    title: "#aesthetic #photography #bandung #fyp #forest",
    link: "https://www.tiktok.com/@apippppokonya/video/7634541398884207879",
    postTime: "30 Apr",
    likes: 1168,
    comments: 8,
    shares: 21,
    views: 9680
  },
  {
    title: "#nature #macro #photography",
    link: "https://www.tiktok.com/@apippppokonya/video/7511308877539986695",
    postTime: "2 Jun",
    likes: 948,
    comments: 4,
    shares: 22,
    views: 7945
  },
  {
    title: "lupa up #fyp #CapCut #vlog #templatecapcut #sunset",
    link: "https://www.tiktok.com/@apippppokonya/video/7618003433479490824",
    postTime: "17 Mar",
    likes: 469,
    comments: 4,
    shares: 3,
    views: 6893
  },
  {
    title: "#drone #cinematic #nature #vibes",
    link: "https://www.tiktok.com/@apippppokonya/video/7507716581594533128",
    postTime: "24 May",
    likes: 488,
    comments: 4,
    shares: 6,
    views: 5925
  },
  {
    title: "#photography #kawahratu #snapseed",
    link: "https://www.tiktok.com/@apippppokonya/video/7624556680424082696",
    postTime: "3 Apr",
    likes: 632,
    comments: 0,
    shares: 3,
    views: 4596
  },
  {
    title: "baru belajar #capcut #cinematic #pantai #belajar #fyp #videography",
    link: "https://www.tiktok.com/@apippppokonya/video/7555458775541468423",
    postTime: "29 Sep",
    likes: 614,
    comments: 2,
    shares: 4,
    views: 4348
  },
  {
    title: "#nature #macrophotography",
    link: "https://www.tiktok.com/@apippppokonya/video/7513817154295172359",
    postTime: "9 Jun",
    likes: 681,
    comments: 1,
    shares: 4,
    views: 4272
  },
  {
    title: "\"Some things leave without saying goodbye, just like the sunset lentement fading.\"",
    link: "https://www.tiktok.com/@apippppokonya/video/7508389854581886226",
    postTime: "25 May",
    likes: 707,
    comments: 0,
    shares: 10,
    views: 3443
  },
  {
    title: "#fyp #photography #aesthetic #kapal #sunsetvibes",
    link: "https://www.tiktok.com/@apippppokonya/video/7546953312189336839",
    postTime: "6 Sep",
    likes: 57,
    comments: 0,
    shares: 21,
    views: 3278
  },
  {
    title: "#foryoupage #fyp",
    link: "https://www.tiktok.com/@apippppokonya/video/7505234958145293233",
    postTime: "21 May",
    likes: 51,
    comments: 0,
    shares: 3,
    views: 1500
  }
];

export const followerHistory: FollowerHistory[] = [
  { date: "21 May", followers: 69, diff: 0 },
  { date: "22 May", followers: 69, diff: 0 },
  { date: "23 May", followers: 70, diff: 1 },
  { date: "24 May", followers: 92, diff: 22 },
  { date: "25 May", followers: 140, diff: 48 },
  { date: "26 May", followers: 163, diff: 23 },
  { date: "27 May", followers: 162, diff: -1 },
  { date: "28 May", followers: 162, diff: 0 },
  { date: "29 May", followers: 161, diff: -1 },
  { date: "30 May", followers: 160, diff: -1 },
  { date: "31 May", followers: 161, diff: 1 },
  { date: "1 June", followers: 161, diff: 0 },
  { date: "2 June", followers: 163, diff: 2 },
  { date: "3 June", followers: 162, diff: -1 },
  { date: "4 June", followers: 163, diff: 1 },
  { date: "5 June", followers: 177, diff: 14 },
  { date: "6 June", followers: 227, diff: 50 },
  { date: "1 March", followers: 483, diff: 1 },
  { date: "2 March", followers: 484, diff: 0 },
  { date: "3 March", followers: 484, diff: 0 },
  { date: "4 March", followers: 486, diff: 2 },
  { date: "5 March", followers: 486, diff: 0 },
  { date: "6 March", followers: 487, diff: 1 },
  { date: "7 March", followers: 487, diff: 0 },
  { date: "8 March", followers: 488, diff: 1 },
  { date: "9 March", followers: 488, diff: 0 },
  { date: "10 March", followers: 488, diff: 0 },
  { date: "11 March", followers: 487, diff: -1 },
  { date: "12 March", followers: 487, diff: 0 },
  { date: "13 March", followers: 486, diff: -1 },
  { date: "14 March", followers: 487, diff: 1 },
  { date: "15 March", followers: 487, diff: 0 },
  { date: "16 March", followers: 487, diff: 0 },
  { date: "17 March", followers: 487, diff: 0 },
  { date: "18 March", followers: 489, diff: 2 },
  { date: "19 March", followers: 489, diff: 0 },
  { date: "20 March", followers: 627, diff: 138 }
];

export const followerActivity: FollowerActivity[] = [
  { hour: "12am", active: 81 },
  { hour: "3am", active: 87 },
  { hour: "6am", active: 85 },
  { hour: "9am", active: 57 },
  { hour: "12pm", active: 24 },
  { hour: "3pm", active: 38 },
  { hour: "6pm", active: 65 },
  { hour: "9pm", active: 79 }
];

export const genderDistribution: Demographics[] = [
  { name: "Male", value: 0.70, percentage: "70%" },
  { name: "Female", value: 0.29, percentage: "29%" },
  { name: "Other", value: 0.01, percentage: "1%" }
];

export const territoriesDistribution: Demographics[] = [
  { name: "Indonesia (ID)", value: 0.682, percentage: "68.2%" },
  { name: "Malaysia (MY)", value: 0.006, percentage: "0.6%" },
  { name: "Amerika Serikat (US)", value: 0.006, percentage: "0.6%" },
  { name: "Australia (AU)", value: 0.003, percentage: "0.3%" },
  { name: "Kamboja (KH)", value: 0.002, percentage: "0.2%" },
  { name: "Others", value: 0.301, percentage: "30.1%" }
];
