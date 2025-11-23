'use client';

import { useState } from 'react';
import NextLink from 'next/link';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  LuMapPin as MapPin,
  LuClock as Clock,
  LuDollarSign as DollarSign,
  LuUsers as Users,
  LuHeart as Heart,
  LuZap as Zap,
  LuAward as Award,
  LuCoffee as Coffee,
  LuLaptop as Laptop,
  LuHouse as Home,
  LuSearch as Search,
  LuArrowRight as ArrowRight,
  LuCircleCheck as CheckCircle,
} from 'react-icons/lu';

export function CareerPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-[#ef3d23]" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and wellness programs for you and your family.'
    },
    {
      icon: <Laptop className="w-8 h-8 text-[#ef3d23]" />,
      title: 'Latest Technology',
      description: 'Work with cutting-edge technology and tools. We provide top-tier equipment and software licenses.'
    },
    {
      icon: <Home className="w-8 h-8 text-[#ef3d23]" />,
      title: 'Flexible Work',
      description: 'Hybrid work options, flexible hours, and remote work opportunities to maintain work-life balance.'
    },
    {
      icon: <Award className="w-8 h-8 text-[#ef3d23]" />,
      title: 'Professional Growth',
      description: 'Continuous learning opportunities, conference attendance, certifications, and career development programs.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#ef3d23]" />,
      title: 'Competitive Compensation',
      description: 'Industry-leading salaries, performance bonuses, equity participation, and comprehensive benefits.'
    },
    {
      icon: <Coffee className="w-8 h-8 text-[#ef3d23]" />,
      title: 'Great Culture',
      description: 'Collaborative environment, team events, catered lunches, and a fun, inclusive workplace culture.'
    }
  ];

  const jobOpenings = [
    {
      id: '1',
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120k - $160k',
      description: 'We are looking for an experienced full stack developer to join our engineering team and help build scalable web applications.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '5+ years of experience with React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, Azure, or GCP)',
        'Strong understanding of database design and optimization',
        'Experience with agile development methodologies'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL']
    },
    {
      id: '2',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Austin',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$100k - $140k',
      description: 'Join our DevOps team to help automate, scale, and secure our infrastructure and deployment processes.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of experience with containerization and orchestration',
        'Strong knowledge of CI/CD pipelines and automation tools',
        'Experience with Infrastructure as Code (Terraform, CloudFormation)',
        'Familiarity with monitoring and logging tools'
      ],
      technologies: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Prometheus']
    },
    {
      id: '3',
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$90k - $120k',
      description: 'Create intuitive and engaging user experiences for our software products and client projects.',
      requirements: [
        'Bachelor\'s degree in Design, HCI, or related field',
        '4+ years of experience in UI/UX design',
        'Proficiency in design tools (Figma, Sketch, Adobe Creative Suite)',
        'Strong portfolio demonstrating user-centered design process',
        'Experience with design systems and component libraries'
      ],
      technologies: ['Figma', 'Sketch', 'Adobe Creative Suite', 'Principle', 'InVision']
    },
    {
      id: '4',
      title: 'Data Scientist',
      department: 'Data & Analytics',
      location: 'Remote / Boston',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$110k - $150k',
      description: 'Help our clients unlock insights from their data using advanced analytics and machine learning techniques.',
      requirements: [
        'Master\'s degree in Data Science, Statistics, or related field',
        '3+ years of experience in data science and machine learning',
        'Proficiency in Python, R, and SQL',
        'Experience with machine learning frameworks and libraries',
        'Strong communication skills for presenting findings to stakeholders'
      ],
      technologies: ['Python', 'R', 'TensorFlow', 'PyTorch', 'SQL']
    },
    {
      id: '5',
      title: 'Mobile App Developer',
      department: 'Engineering',
      location: 'Remote / Seattle',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$105k - $135k',
      description: 'Develop high-quality mobile applications for iOS and Android platforms using modern development frameworks.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years of mobile app development experience',
        'Experience with React Native or Flutter',
        'Knowledge of native iOS/Android development',
        'Understanding of mobile app deployment and distribution'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
    },
    {
      id: '6',
      title: 'Project Manager',
      department: 'Project Management',
      location: 'Remote / Chicago',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$95k - $125k',
      description: 'Lead cross-functional teams to deliver successful software projects on time and within budget.',
      requirements: [
        'Bachelor\'s degree in Business, Project Management, or related field',
        '5+ years of project management experience in software development',
        'PMP or Agile certification preferred',
        'Strong leadership and communication skills',
        'Experience with project management tools and methodologies'
      ],
      technologies: ['Jira', 'Confluence', 'Microsoft Project', 'Slack', 'Agile/Scrum']
    }
  ];

  const departments = ['All', 'Engineering', 'Design', 'Data & Analytics', 'Project Management'];
  const locations = ['All', 'Remote', 'San Francisco', 'Austin', 'New York', 'Boston', 'Seattle', 'Chicago'];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'All' || job.location.includes(selectedLocation);
    
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Join Our <span className="text-[#ef3d23]">Team</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Build the future of software with a passionate team of innovators. At Zenticsys, 
                we're not just developing software – we're shaping the digital transformation 
                of businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-[#ef3d23] hover:bg-[#d63420] text-white"
                >
                  View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                >
                  Learn About Our Culture
                </Button>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748256622734-92241ae7b43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzU4OTg5Mjc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team collaboration"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600">We believe in creating an environment where talented people can thrive</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">Find your next career opportunity with us</p>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger>
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                {departments.map((dept) => (
                  <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>{location}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button 
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                setSelectedDepartment('All');
                setSelectedLocation('All');
              }}
            >
              Clear Filters
            </Button>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-3">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <Badge variant="outline" className="border-[#ef3d23] text-[#ef3d23]">
                          {job.department}
                        </Badge>
                        <Badge variant="secondary">{job.type}</Badge>
                      </div>
                      
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{job.title}</h3>
                      <p className="text-gray-600 mb-4">{job.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {job.experience}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-2" />
                          {job.salary}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                        <ul className="space-y-1">
                          {job.requirements.slice(0, 3).map((req, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-[#ef3d23] mr-2 flex-shrink-0 mt-0.5" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-1 flex flex-col justify-between">
                      <div></div>
                      <Button 
                        className="bg-[#ef3d23] hover:bg-[#d63420] text-white w-full"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No positions found matching your criteria.</p>
              <p className="text-gray-400 mt-2">Try adjusting your search filters or check back later for new opportunities.</p>
            </div>
          )}
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Culture</h2>
              <p className="text-lg text-gray-600 mb-6">
                We foster a collaborative, inclusive environment where innovation thrives. Our team 
                is our greatest asset, and we're committed to creating a workplace where everyone 
                can grow, learn, and make a meaningful impact.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-[#ef3d23] mr-3" />
                  <span>Collaborative and supportive team environment</span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-5 h-5 text-[#ef3d23] mr-3" />
                  <span>Fast-paced, innovative work on cutting-edge projects</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-[#ef3d23] mr-3" />
                  <span>Recognition and rewards for outstanding performance</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-5 h-5 text-[#ef3d23] mr-3" />
                  <span>Commitment to work-life balance and employee wellbeing</span>
                </div>
              </div>
            </div>
            
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDF8fHx8MTc1ODkyMjg1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team culture"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#ef3d23]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Don't See the Right Position?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume 
            and let us know how you'd like to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-[#ef3d23] hover:bg-gray-100"
            >
              Send Your Resume
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#ef3d23]"
              asChild
            >
              <NextLink href="/about">Learn More About Us</NextLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
