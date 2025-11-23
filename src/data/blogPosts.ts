export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorBio: string;
  authorImage: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured?: boolean;
};

const defaultContent = `
  <p>The software development landscape is evolving at an unprecedented pace, driven by technological advances, changing user expectations, and the need for businesses to stay competitive in an increasingly digital world. As we move forward, several key trends are shaping the future of how we build, deploy, and maintain software applications.</p>

  <h2>1. AI-Powered Development Tools</h2>
  <p>Artificial Intelligence is revolutionizing the software development process. From AI-powered code completion tools to automated testing frameworks, teams are increasingly leveraging AI to enhance productivity and code quality.</p>
  
  <p>These tools are not replacing developers but rather augmenting their capabilities, allowing them to focus on higher-level problem-solving and creative tasks while AI handles routine coding patterns and boilerplate generation.</p>

  <h2>2. Low-Code and No-Code Platforms</h2>
  <p>The rise of low-code and no-code platforms is democratizing software development, enabling business users to create applications without extensive programming knowledge. This trend is particularly significant for organizations looking to accelerate digital transformation initiatives.</p>

  <p>However, traditional development still plays a crucial role, especially for complex, enterprise-grade applications that require custom logic and integrations.</p>

  <h2>3. Cloud-Native Development</h2>
  <p>Cloud-native development practices continue to gain momentum, with containerization, microservices, and serverless architectures becoming the norm rather than the exception. Organizations are embracing these approaches to achieve greater scalability, reliability, and deployment flexibility.</p>

  <h2>4. Enhanced Security Integration</h2>
  <p>With cybersecurity threats becoming more sophisticated, security is being integrated into every stage of the development lifecycle. DevSecOps practices are becoming standard, ensuring that security considerations are addressed from the initial design phase through deployment and maintenance.</p>

  <h2>5. Sustainable Software Development</h2>
  <p>Environmental consciousness is driving the adoption of sustainable development practices. Developers are increasingly considering the energy consumption and carbon footprint of their applications, leading to more efficient code and resource utilization.</p>

  <h2>Conclusion</h2>
  <p>The future of software development is exciting and full of opportunities. By staying informed about these trends and continuously adapting our skills and practices, we can build better, more efficient, and more sustainable software solutions that meet the evolving needs of users and businesses alike.</p>
`;

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Software Development: Trends to Watch in 2024',
    excerpt:
      'Exploring emerging trends and technologies that are shaping the software development landscape, from AI-powered coding to low-code platforms.',
    content: defaultContent,
    author: 'Alex Johnson',
    authorBio:
      'Alex is the CEO and Founder of Zenticsys with over 15 years of experience in software development and technology strategy.',
    authorImage:
      'https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwcG9ydHJhaXQlMjBvZmZpY2V8ZW58MXx8fHwxNzU5MDAwMTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'December 15, 2024',
    readTime: '8 min read',
    category: 'Technology',
    tags: ['Software Development', 'Trends', 'Future Tech'],
    image:
      'https://images.unsplash.com/photo-1555066931-78c471f0d4ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwY29kaW5nJTIwbGFwdG9wfGVufDF8fHx8MTc1ODk5OTk1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: true,
  },
  {
    id: '2',
    title: 'Building Scalable Cloud Architecture: Best Practices and Strategies',
    excerpt:
      'A comprehensive guide to designing and implementing scalable cloud solutions that can grow with your business needs.',
    content: defaultContent,
    author: 'Sarah Chen',
    authorBio: 'Sarah is a cloud solutions architect specializing in migration and modernization projects.',
    authorImage:
      'https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwcG9ydHJhaXQlMjBvZmZpY2V8ZW58MXx8fHwxNzU5MDAwMTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'December 10, 2024',
    readTime: '12 min read',
    category: 'Cloud',
    tags: ['Cloud Architecture', 'Scalability', 'AWS', 'Azure'],
    image:
      'https://images.unsplash.com/photo-1758876202983-c36dd5019142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc1ODk5OTk1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '3',
    title: 'AI and Machine Learning in Business: Practical Applications',
    excerpt:
      'How artificial intelligence and machine learning are revolutionizing business operations across different industries.',
    content: defaultContent,
    author: 'Michael Rodriguez',
    authorBio: 'Michael leads data science initiatives focused on ML in production for enterprises.',
    authorImage:
      'https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwcG9ydHJhaXQlMjBvZmZpY2V8ZW58MXx8fHwxNzU5MDAwMTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'December 5, 2024',
    readTime: '10 min read',
    category: 'AI & ML',
    tags: ['Artificial Intelligence', 'Machine Learning', 'Business Analytics'],
    image:
      'https://images.unsplash.com/photo-1748256622734-92241ae7b43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzU4OTg5Mjc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '4',
    title: 'Cybersecurity in the Digital Age: Protecting Your Business',
    excerpt:
      'Essential cybersecurity strategies and best practices to protect your business from evolving digital threats.',
    content: defaultContent,
    author: 'Emily Watson',
    authorBio: 'Emily is a security engineer focused on threat modeling and risk management.',
    authorImage:
      'https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwcG9ydHJhaXQlMjBvZmZpY2V8ZW58MXx8fHwxNzU5MDAwMTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'November 30, 2024',
    readTime: '15 min read',
    category: 'Security',
    tags: ['Cybersecurity', 'Data Protection', 'Risk Management'],
    image:
      'https://images.unsplash.com/photo-1758523670550-223a01cd7764?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWx8ZW58MXx8fHwxNzU4OTEzNzc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '5',
    title: 'The Rise of Low-Code Development Platforms',
    excerpt:
      'Exploring how low-code platforms are democratizing software development and accelerating digital transformation.',
    content: defaultContent,
    author: 'Alex Johnson',
    authorBio:
      'Alex is the CEO and Founder of Zenticsys with over 15 years of experience in software development and technology strategy.',
    authorImage:
      'https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwcG9ydHJhaXQlMjBvZmZpY2V8ZW58MXx8fHwxNzU5MDAwMTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'November 25, 2024',
    readTime: '7 min read',
    category: 'Development',
    tags: ['Low-Code', 'Development Tools', 'Digital Transformation'],
    image:
      'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4OTM0MDIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: '6',
    title: 'Digital Transformation in Healthcare: Lessons Learned',
    excerpt:
      'Key insights from successful healthcare digital transformation projects and what other industries can learn.',
    content: defaultContent,
    author: 'Sarah Chen',
    authorBio: 'Sarah is a cloud solutions architect specializing in migration and modernization projects.',
    authorImage:
      'https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwcG9ydHJhaXQlMjBvZmZpY2V8ZW58MXx8fHwxNzU5MDAwMTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'November 20, 2024',
    readTime: '11 min read',
    category: 'Industry Insights',
    tags: ['Healthcare', 'Digital Transformation', 'Case Study'],
    image:
      'https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDF8fHx8MTc1ODkyMjg1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function findBlogPost(id: string) {
  return blogPosts.find((post) => post.id === id);
}
