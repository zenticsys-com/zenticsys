'use client';

import {
  Button,
  Card,
  CardContent,
  Chip,
  Rating
} from '@mui/material';
import NextLink from 'next/link';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  LuCode as Code,
  LuSmartphone as Smartphone,
  LuCloud as Cloud,
  LuDatabase as Database,
  LuShield as Shield,
  LuZap as Zap,
  LuCar as Car,
  LuHeart as Heart,
  LuBuilding as Building,
  LuShoppingCart as ShoppingCart,
  LuBanknote as Banknote,
  LuGraduationCap as GraduationCap,
  LuStar as Star,
  LuPlay as Play,
  LuArrowRight as ArrowRight,
  LuCircleCheck as CheckCircle,
} from 'react-icons/lu';

export function HomePage() {
  const partnerLogos = [
    'Microsoft', 'Google', 'Amazon', 'Meta', 'Apple', 'Salesforce'
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: 'Custom Software Development',
      description: 'Tailored solutions built to meet your specific business requirements and objectives.'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.'
    },
    {
      icon: <Cloud className="w-8 h-8 text-primary" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.'
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics solutions.'
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.'
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategies to modernize your business operations.'
    }
  ];

  const industries = [
    {
      icon: <Car className="w-8 h-8 text-primary" />,
      title: 'Automotive',
      description: 'Advanced solutions for the automotive industry'
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: 'Healthcare',
      description: 'Innovative healthcare technology solutions'
    },
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: 'Real Estate',
      description: 'Digital solutions for property management'
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-primary" />,
      title: 'E-commerce',
      description: 'Comprehensive e-commerce platforms'
    },
    {
      icon: <Banknote className="w-8 h-8 text-primary" />,
      title: 'Fintech',
      description: 'Financial technology innovations'
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: 'Education',
      description: 'Educational technology solutions'
    }
  ];

  const technologies = [
    'React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL'
  ];

  const projects = [
    {
      title: 'AutoConnect Pro',
      description: 'Connected car platform for automotive industry',
      image: 'https://images.unsplash.com/photo-1603090067590-a9a0f0fa6d9d->crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwdGVjaG5vbG9neSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTg4ODc4OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Node.js', 'IoT']
    },
    {
      title: 'HealthTech Suite',
      description: 'Comprehensive healthcare management system',
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356->crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4OTM0MDIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Mobile', 'Cloud', 'AI']
    },
    {
      title: 'FinanceFlow',
      description: 'Next-generation financial platform',
      image: 'https://images.unsplash.com/photo-1758523670550-223a01cd7764->crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWx8ZW58MXx8fHwxNzU4OTEzNzc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Blockchain', 'Security', 'Analytics']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CTO, TechCorp',
      content: 'Zenticsys delivered an exceptional solution that transformed our operations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      position: 'CEO, InnovateLab',
      content: 'Outstanding team with deep technical expertise and excellent communication.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      position: 'VP Engineering, DataFlow',
      content: 'Professional, reliable, and delivered results beyond our expectations.',
      rating: 5
    }
  ];

  const blogPosts = [
    {
      title: 'The Future of Software Development',
      excerpt: 'Exploring emerging trends and technologies shaping the software industry.',
      date: 'Dec 15, 2024',
      image: 'https://images.unsplash.com/photo-1555066931-78c471f0d4ea->crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwY29kaW5nJTIwbGFwdG9wfGVufDF8fHx8MTc1ODk5OTk1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Building Scalable Cloud Architecture',
      excerpt: 'Best practices for designing and implementing scalable cloud solutions.',
      date: 'Dec 10, 2024',
      image: 'https://images.unsplash.com/photo-1758876202983-c36dd5019142->crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc1ODk5OTk1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'AI and Machine Learning in Business',
      excerpt: 'How artificial intelligence is revolutionizing business operations.',
      date: 'Dec 5, 2024',
      image: 'https://images.unsplash.com/photo-1748256622734-92241ae7b43f->crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzU4OTg5Mjc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Building the
                <span className="text-primary"> Future </span>
                of Software
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We create innovative software solutions that transform businesses and drive digital success. 
                Partner with us to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="contained"
                  size="large"
                  component={NextLink}
                  href="/schedule"
                  endIcon={<ArrowRight className="w-4 h-4" />}
                  className="bg-primary hover:bg-primary-dark text-white"
                >
                  Get Started
                </Button>
                <Button 
                  variant="outlined"
                  size="large"
                  component={NextLink}
                  href="/about"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748256622734-92241ae7b43f->crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzU4OTg5Mjc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Software development team"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Partnerships */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partnerships</h2>
            <p className="text-xl text-gray-600">Trusted by leading companies worldwide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center h-20">
                <span className="text-xl font-semibold text-gray-400 hover:text-gray-600 transition-colors">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-xl text-gray-600 mb-8">
                Zenticsys is a forward-thinking software development company with a passion for 
                innovation and excellence. We combine technical expertise with strategic thinking 
                to deliver solutions that drive real business value.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span>10+ years of industry experience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span>200+ successful projects delivered</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span>Expert team of developers and consultants</span>
                </div>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518731706-be5d5230e5a5->crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDF8fHx8MTc1ODkyMjg1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional team meeting"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600">Comprehensive software solutions for modern businesses</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <CardContent className="p-8">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Industry Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Industry Expertise</h2>
            <p className="text-xl text-gray-600">Specialized solutions across diverse industries</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{industry.title}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Technology We Use */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Technology We Use</h2>
            <p className="text-xl text-gray-600">Cutting-edge technologies for robust solutions</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-100 hover:bg-gray-200 transition-colors duration-300 rounded-lg p-6 text-center">
                <span className="text-lg font-semibold text-gray-700">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Works</h2>
            <p className="text-xl text-gray-600">Showcasing our latest projects and innovations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Chip 
                        key={tagIndex} 
                        label={tag} 
                        size="small"
                        className="bg-gray-200"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Reviews</h2>
            <p className="text-xl text-gray-600">What our clients say about working with us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    <Rating 
                      value={testimonial.rating} 
                      readOnly 
                      className="text-yellow-400"
                    />
                  </div>
                  <p className="text-gray-600 mb-6 italic text-lg">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.position}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
            <p className="text-xl text-gray-600">Insights, tips, and industry trends</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button 
                    component={NextLink}
                    href="/blog"
                    className="text-primary hover:text-primary-dark p-0 min-w-0"
                    variant="text"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              variant="outlined"
              component={NextLink}
              href="/blog"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              View All Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Schedule a Call CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative software solutions.
          </p>
          <Button 
            variant="contained"
            size="large"
            component={NextLink}
            href="/schedule"
            className="bg-white text-primary hover:bg-gray-100"
          >
            Schedule a Call Today
          </Button>
        </div>
      </section>
    </div>
  );
}
