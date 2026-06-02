export interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  timestamp: string;
  content: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "omnichannel CX",
    description: "You've likely heard whispers of an AI revolution transforming our world. It's not just about robots taking over; it's about intelligent technology enhancing every part of our lives. But let's address the elephant in the room: Does all this talk of AI leave you feeling like you are outside looking in?",
    image: "/blog/blog-1a.png",
    timestamp: "2024-08-10T14:30:00Z",
    content: "Full content of the blog goes here..."
  },
  {
    id: 2,
    title: "Unlocking AI: Your Guide to the Future that Belongs to You",
    description: "You've likely heard whispers of an AI revolution transforming our world. It's not just about robots taking over; it's about intelligent technology enhancing every part of our lives. But let's address the elephant in the room: Does all this talk of AI leave you feeling like you are outside looking in?",
    image: "/blog/blog-1a.png",
    timestamp: "2024-06-10T14:30:00Z",
    content: "Full content of the blog goes here..."
  },
  {
    id: 3,
    title: "Unlocking AI: Your Guide to the Future that Belongs to You",
    description: "You've likely heard whispers of an AI revolution transforming our world. It's not just about robots taking over; it's about intelligent technology enhancing every part of our lives. But let's address the elephant in the room: Does all this talk of AI leave you feeling like you are outside looking in?",
    image: "/blog/blog-1a.png",
    timestamp: "2024-06-10T14:30:00Z",
    content: "Full content of the blog goes here..."
  },
  {
    id: 4,
    title: "Unlocking AI: Your Guide to the Future that Belongs to You",
    description: "You've likely heard whispers of an AI revolution transforming our world. It's not just about robots taking over; it's about intelligent technology enhancing every part of our lives. But let's address the elephant in the room: Does all this talk of AI leave you feeling like you are outside looking in?",
    image: "/blog/blog-1a.png",
    timestamp: "2024-06-10T14:30:00Z",
    content: "Full content of the blog goes here..."
  },
];

export default blogs;