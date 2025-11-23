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
  LuCar as Car,
  LuHeart as Heart,
  LuBuilding as Building,
  LuShoppingCart as ShoppingCart,
  LuBanknote as Banknote,
  LuGraduationCap as GraduationCap,
  LuPlane as Plane,
  LuFactory as Factory,
  LuBriefcase as Briefcase,
  LuCircleCheck as CheckCircle,
  LuArrowRight as ArrowRight,
  LuStar as Star,
} from 'react-icons/lu';

export function IndustriesPage() {
  const industries = [
    {
      icon: <Car className="w-12 h-12 text-primary" />,
      title: 'Automotive',
      description: 'Advanced solutions for the automotive industry including connected car platforms, fleet management, and autonomous vehicle technologies.',
      services: ['Connected car platforms', 'Fleet management systems', 'Telematics solutions', 'Autonomous driving support'],
      technologies: ['IoT', 'Edge Computing', 'AI/ML', 'Real-time Analytics'],
      caseStudy: 'AutoConnect Pro - Connected vehicle platform serving 100K+ vehicles'
    },
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: 'Healthcare',
      description: 'Innovative healthcare technology solutions that improve patient outcomes and streamline medical operations.',
      services: ['Electronic Health Records', 'Telemedicine platforms', 'Medical device integration', 'Healthcare analytics'],
      technologies: ['HIPAA Compliance', 'HL7 FHIR', 'Cloud Security', 'Mobile Health'],
      caseStudy: 'MediFlow - Comprehensive healthcare management platform'
    },
    {
      icon: <Building className="w-12 h-12 text-primary" />,
      title: 'Real Estate',
      description: 'Digital solutions for property management, real estate transactions, and smart building technologies.',
      services: ['Property management systems', 'Virtual tours', 'CRM solutions', 'Smart building integration'],
      technologies: ['VR/AR', 'IoT Sensors', 'Blockchain', 'Mobile Apps'],
      caseStudy: 'PropTech Suite - Complete real estate management solution'
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-primary" />,
      title: 'E-commerce & Retail',
      description: 'Comprehensive e-commerce platforms and retail solutions that drive sales and enhance customer experiences.',
      services: ['E-commerce platforms', 'Inventory management', 'POS systems', 'Customer analytics'],
      technologies: ['Microservices', 'CDN', 'Payment Gateways', 'Recommendation Engines'],
      caseStudy: 'RetailMax - Omnichannel retail platform with 2M+ users'
    },
    {
      icon: <Banknote className="w-12 h-12 text-primary" />,
      title: 'Financial Services',
      description: 'Secure financial technology solutions including banking platforms, payment systems, and investment tools.',
      services: ['Banking platforms', 'Payment processing', 'Trading systems', 'Regulatory compliance'],
      technologies: ['Blockchain', 'Cryptography', 'Risk Management', 'API Security'],
      caseStudy: 'FinanceFlow - Next-generation trading platform'
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-primary" />,
      title: 'Education',
      description: 'Educational technology solutions that enhance learning experiences and streamline educational administration.',
      services: ['Learning management systems', 'Student portals', 'Assessment tools', 'Virtual classrooms'],
      technologies: ['Learning Analytics', 'Video Streaming', 'Progressive Web Apps', 'Accessibility'],
      caseStudy: 'EduTech Platform - Online learning platform for 50K+ students'
    },
    {
      icon: <Plane className="w-12 h-12 text-primary" />,
      title: 'Travel & Hospitality',
      description: 'Digital solutions for travel booking, hospitality management, and customer experience optimization.',
      services: ['Booking platforms', 'Hotel management systems', 'Travel planning tools', 'Loyalty programs'],
      technologies: ['Reservation Systems', 'GDS Integration', 'Mobile Apps', 'Customer Analytics'],
      caseStudy: 'TravelPro - Comprehensive travel management platform'
    },
    {
      icon: <Factory className="w-12 h-12 text-primary" />,
      title: 'Manufacturing',
      description: 'Industry 4.0 solutions including smart manufacturing, supply chain optimization, and predictive maintenance.',
      services: ['Manufacturing execution systems', 'Supply chain management', 'Quality control systems', 'Predictive maintenance'],
      technologies: ['Industrial IoT', 'Machine Learning', 'Digital Twins', 'Automation'],
      caseStudy: 'SmartFactory - IoT-enabled manufacturing optimization'
    },
    {
      icon: <Briefcase className="w-12 h-12 text-primary" />,
      title: 'Professional Services',
      description: 'Business solutions for consulting, legal, accounting, and other professional service organizations.',
      services: ['Project management tools', 'Client portals', 'Billing systems', 'Document management'],
      technologies: ['Workflow Automation', 'Document Security', 'Time Tracking', 'CRM Integration'],
      caseStudy: 'ProService Hub - Professional services management platform'
    }
  ];

  const automotiveDetails = {
    title: 'Automotive Industry Solutions',
    subtitle: 'Driving Innovation in Connected Mobility',
    description: 'The automotive industry is undergoing a digital transformation with connected vehicles, autonomous driving, and smart mobility solutions. We help automotive companies leverage technology to create safer, more efficient, and more connected transportation experiences.',
    image: 'https://images.unsplash.com/photo-1603090067590-a9a0f0fa6d9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwdGVjaG5vbG9neSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTg4ODc4OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    solutions: [
      {
        title: 'Connected Vehicle Platforms',
        description: 'End-to-end platforms for vehicle connectivity, remote monitoring, and over-the-air updates.',
        benefits: ['Real-time vehicle diagnostics', 'Remote software updates', 'Predictive maintenance', 'Enhanced safety features']
      },
      {
        title: 'Fleet Management Systems',
        description: 'Comprehensive fleet management solutions for commercial and enterprise vehicle operations.',
        benefits: ['Route optimization', 'Driver behavior monitoring', 'Fuel efficiency tracking', 'Maintenance scheduling']
      },
      {
        title: 'Autonomous Driving Support',
        description: 'Advanced driver assistance systems and autonomous vehicle technology integration.',
        benefits: ['Sensor data processing', 'Machine learning algorithms', 'Safety validation', 'Regulatory compliance']
      }
    ]
  };

  const testimonials = [
    {
      name: 'Michael Roberts',
      position: 'CTO, AutoTech Solutions',
      company: 'Automotive',
      content: 'Zenticsys helped us build a connected car platform that has revolutionized how we interact with our customers. The platform now serves over 100,000 vehicles.',
      rating: 5
    },
    {
      name: 'Dr. Sarah Chen',
      position: 'Director of Innovation, HealthFirst',
      company: 'Healthcare',
      content: 'The healthcare management system they developed has significantly improved our operational efficiency and patient satisfaction scores.',
      rating: 5
    },
    {
      name: 'James Wilson',
      position: 'VP Technology, RetailMax',
      company: 'E-commerce',
      content: 'Our new e-commerce platform has increased conversion rates by 75% and mobile sales by 60%. Exceptional work from the Zenticsys team.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      position: 'Head of Digital, EduTech Institute',
      company: 'Education',
      content: 'The learning management system has transformed our educational delivery, enabling us to serve 50,000+ students effectively.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Industries <span className="text-primary">We Serve</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Specialized software solutions across diverse industries. We understand the unique challenges 
              and requirements of different sectors, delivering tailored solutions that drive results.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{industry.title}</h3>
                  <p className="text-gray-600 mb-6">{industry.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Services:</h4>
                    <ul className="space-y-2">
                      {industry.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.technologies.map((tech, techIndex) => (
                        <Chip 
                          key={techIndex} 
                          label={tech} 
                          size="small"
                          className="bg-gray-200"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-500 italic">{industry.caseStudy}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Industry - Automotive */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center mb-4">
                <Car className="w-8 h-8 text-primary mr-3" />
                <Chip 
                  label="Featured Industry" 
                  variant="outlined"
                  className="border-primary text-primary"
                />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{automotiveDetails.title}</h2>
              <h3 className="text-xl text-primary font-semibold mb-6">{automotiveDetails.subtitle}</h3>
              <p className="text-lg text-gray-600">{automotiveDetails.description}</p>
            </div>
            <div>
              <ImageWithFallback
                src={automotiveDetails.image}
                alt="Automotive technology"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {automotiveDetails.solutions.map((solution, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories by Industry */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600">Testimonials from clients across different industries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <p className="text-gray-600 mb-6 italic text-lg">"{testimonial.content}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.position}</div>
                    </div>
                    <Chip 
                      label={testimonial.company} 
                      variant="outlined"
                      className="border-primary text-primary"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Don't See Your Industry?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            We work with businesses across all industries. Our adaptable approach allows us to understand 
            your unique challenges and deliver customized solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="contained"
              size="large"
              component={NextLink}
              href="/schedule"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Discuss Your Industry Needs
            </Button>
            <Button 
              variant="outlined"
              size="large"
              component={NextLink}
              href="/services"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
