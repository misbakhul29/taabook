// data/reelsData.ts
export const reelsData = [
  {
    id: 1,
    user: {
      name: 'user1',
      profilePicture: '/images/profiles/profile1.jpg',
    },
    media: {
      type: 'video',
      url: '/videos/reels/reel1.mp4',
      duration: 15, // Durasi dalam detik
    },
    caption: 'Chasing sunsets! 🌅 #travel #sunsetvibes',
    likes: 2500,
    comments: 120,
    shares: 45,
    audio: 'Original audio - user1',
    // Mungkin ada properti lain seperti tags, musicId, dll.
  },
  {
    id: 2,
    user: {
      name: 'dancequeen',
      profilePicture: '/images/profiles/profile2.jpg',
    },
    media: {
      type: 'video',
      url: '/videos/reels/reel2.mp4',
      duration: 25,
    },
    caption: 'Learning a new dance! What do you think? #dance #challenge',
    likes: 5800,
    comments: 210,
    shares: 110,
    audio: 'Popular song - Artist Name',
  },
  {
    id: 3,
    user: {
      name: 'foodiegram',
      profilePicture: '/images/profiles/profile3.jpg',
    },
    media: {
      type: 'video',
      url: '/videos/reels/reel3.mp4',
      duration: 10,
    },
    caption: 'Making my favorite pasta! 🍝 #food #cooking',
    likes: 3200,
    comments: 85,
    shares: 25,
    audio: 'Upbeat instrumental',
  },
  {
    id: 4,
    user: {
      name: 'traveler_pro',
      profilePicture: '/images/profiles/profile4.jpg',
    },
    media: {
      type: 'video',
      url: '/videos/reels/reel4.mp4',
      duration: 20,
    },
    caption: 'Exploring the ancient ruins! #travel #history',
    likes: 4100,
    comments: 150,
    shares: 70,
    audio: 'Epic travel music',
  },
  {
    id: 5,
    user: {
      name: 'petlover4ever',
      profilePicture: '/images/profiles/profile5.jpg',
    },
    media: {
      type: 'video',
      url: '/videos/reels/reel5.mp4',
      duration: 12,
    },
    caption: 'My cute little friend! ❤️ #pets #doglover',
    likes: 6500,
    comments: 280,
    shares: 180,
    audio: 'Cute animal sounds',
  },
  // ... kamu bisa menambahkan lebih banyak data reels di sini
];