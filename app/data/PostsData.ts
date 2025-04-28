// data/postsData.ts
export const postsData = [
    {
        id: 1,
        user: {
            name: 'John Doe',
            profilePicture: '/images/profile1.jpg',
        },
        time: '5 minutes ago',
        description: 'Enjoying a beautiful sunset!',
        likes: 1200,
        comments: 15,
        shares: 3,
        media: {
            type: 'image',
            url: '/images/posts/sunset.jpg',
        },
        commentsData: [
            {
                user: { name: 'Jane Smith', profilePicture: '/images/commenter/commenter1.jpg' },
                text: 'Amazing shot!',
                time: '2 minutes ago',
            },
        ],
    },
    {
        id: 2,
        user: {
            name: 'Alice Wonderland',
            profilePicture: '/images/profile2.jpg',
        },
        time: '15 minutes ago',
        description: 'Just finished reading a great book. Highly recommend it!',
        likes: 850,
        comments: 8,
        shares: 1,
        media: null, // Tidak ada media untuk postingan ini
        commentsData: [],
    },
    {
        id: 3,
        user: {
            name: 'Bob The Builder',
            profilePicture: '/images/profile3.jpg',
        },
        time: '30 minutes ago',
        description: "Working on a new project. Can't wait to show you the results!",
        likes: 2100,
        comments: 25,
        shares: 7,
        media: {
            type: 'video',
            url: '/videos/posts/construction.mp4',
        },
        commentsData: [
            {
                user: { name: 'Charlie Brown', profilePicture: '/images/commenter/commenter2.jpg' },
                text: 'Looking forward to it!',
                time: '10 minutes ago',
            },
            {
                user: { name: 'Lucy Van Pelt', profilePicture: '/images/commenter/commenter3.jpg' },
                text: 'Good luck!',
                time: '5 minutes ago',
            },
        ],
    },
    {
        id: 4,
        user: {
            name: 'Eve Harrington',
            profilePicture: '/images/profile4.jpg',
        },
        time: '1 hour ago',
        description: 'Having a cup of coffee on this lovely morning.',
        likes: 560,
        comments: 3,
        shares: 0,
        media: {
            type: 'image',
            url: '/images/posts/coffee.jpg',
        },
        commentsData: [],
    },
    {
        id: 5,
        user: {
            name: 'Samuel Jackson',
            profilePicture: '/images/profile5.jpg',
        },
        time: '2 hours ago',
        description: 'Just watched an awesome movie!',
        likes: 1500,
        comments: 18,
        shares: 5,
        media: null, // Tidak ada media
        commentsData: [
            {
                user: { name: 'Olivia Pope', profilePicture: '/images/commenter/commenter4.jpg' },
                text: 'Which one?',
                time: '1 hour ago',
            },
        ],
    },
];