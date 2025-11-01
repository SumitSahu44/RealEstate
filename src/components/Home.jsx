import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const HomePage = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const floatingLightRef = useRef(null);
  const featuredRef = useRef(null);
  const whyChooseRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  // GSAP Animations
  useEffect(() => {
    // Hero section animations
    const ctx = gsap.context(() => {
      // Split text animation for hero heading
      const split = new SplitText(headingRef.current, {
        type: 'lines,words,chars',
        linesClass: 'split-line'
      });

      gsap.from(split.words, {
        duration: 1.2,
        y: 100,
        rotationX: -90,
        opacity: 0,
        stagger: 0.05,
        ease: 'power3.out',
        delay: 0.5
      });

      // Floating light animation
      gsap.to(floatingLightRef.current, {
        x: 100,
        y: -50,
        rotation: 360,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Hero content fade up
      gsap.from('.hero-content > *:not(h1)', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        delay: 1.5,
        ease: 'power3.out'
      });

      // Featured properties animation
      gsap.from('.property-card', {
        scrollTrigger: {
          trigger: featuredRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Why choose us section animation
      gsap.from('.feature-item', {
        scrollTrigger: {
          trigger: whyChooseRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)'
      });

      // Testimonials fade in
      gsap.from('.testimonial-card', {
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out'
      });

      // CTA section animation
      gsap.from('.cta-content', {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

    });

    return () => ctx.revert(); // Cleanup
  }, []);

  // Sample data
  const featuredProperties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      title: 'Luxury Villa with Ocean View',
      location: 'Malibu, California',
      price: '$8,500,000',
      type: 'Residential'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      title: 'Modern Downtown Penthouse',
      location: 'New York, NY',
      price: '$12,000,000',
      type: 'Commercial'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      title: 'Waterfront Estate',
      location: 'Miami, Florida',
      price: '$15,750,000',
      type: 'Residential'
    }
  ];

  const features = [
    {
      icon: '✓',
      title: 'Verified Listings',
      description: 'Every property is thoroughly verified for authenticity and legal compliance.'
    },
    {
      icon: '👔',
      title: 'Direct Broker Access',
      description: 'Connect directly with premium brokers and property experts.'
    },
    {
      icon: '🔒',
      title: 'Secure Deals',
      description: 'End-to-end encrypted transactions ensuring complete security.'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Property Investor',
      content: 'Elite Estate made finding my dream penthouse effortless. The service was exceptional from start to finish.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Commercial Developer',
      content: 'Outstanding platform for luxury properties. The broker network is unparalleled in the industry.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Home Owner',
      content: 'Sold my property above market value thanks to their premium marketing and expert brokers.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-white font-sans">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-[#0F172A]/90 backdrop-blur-md z-50 border-b border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#D4AF37] to-[#F5F5F5] rounded-full"></div>
              <span className="text-xl font-bold text-white">EliteEstate</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Buy', 'Rent', 'Brokers', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 font-medium"
                >
                  {item}
                </a>
              ))}
              <button className="bg-gradient-to-r from-[#D4AF37] to-[#F5F5F5] text-[#0F172A] px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300">
                List Your Property
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Luxury Property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/70 to-transparent"></div>
        </div>

        {/* Floating Light Animation */}
        <div
          ref={floatingLightRef}
          className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full blur-xl opacity-20"
        ></div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 z-10 hero-content">
          <div className="max-w-3xl">
            <h1
              ref={headingRef}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Find Your Dream Space
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
              Discover exclusive luxury properties curated for the discerning buyer. 
              Where exceptional living meets unparalleled service.
            </p>

            {/* Search Bar */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Location</label>
                  <input
                    type="text"
                    placeholder="Where to?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Property Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors">
                    <option>Any Type</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Luxury Villa</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Price Range</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors">
                    <option>Any Price</option>
                    <option>$500K - $1M</option>
                    <option>$1M - $5M</option>
                    <option>$5M+</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F5F5F5] text-[#0F172A] py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section ref={featuredRef} className="py-20 bg-[#0F172A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Properties</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Handpicked selection of the world's most exceptional properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div
                key={property.id}
                className="property-card group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#0F172A] px-3 py-1 rounded-full text-sm font-semibold">
                    {property.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                  <p className="text-gray-400 mb-4">{property.location}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#D4AF37]">{property.price}</span>
                    <button className="bg-white/10 hover:bg-[#D4AF37] text-white hover:text-[#0F172A] px-4 py-2 rounded-xl transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyChooseRef} className="py-20 bg-gradient-to-br from-[#0F172A] to-[#1E293B]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose EliteEstate</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the difference with our premium real estate services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-item group bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#F5F5F5] rounded-2xl flex items-center justify-center text-2xl text-[#0F172A] font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-20 bg-[#0F172A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Hear what our clients say about their experience with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="testimonial-card bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-500"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#D4AF37] text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-r from-[#1E293B] to-[#0F172A]">
        <div className="container mx-auto px-6">
          <div className="cta-content bg-gradient-to-r from-[#D4AF37] to-[#F5F5F5] rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
              Ready to List Your Property?
            </h2>
            <p className="text-xl text-[#1E293B] mb-8 max-w-2xl mx-auto">
              Join thousands of property owners who trust EliteEstate to showcase their premium properties to qualified buyers.
            </p>
            <button className="bg-[#0F172A] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#1E293B] transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              List Your Property Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-[#D4AF37] to-[#F5F5F5] rounded-full"></div>
                <span className="text-xl font-bold text-white">EliteEstate</span>
              </div>
              <p className="text-gray-400">
                Premium real estate platform connecting discerning buyers with exceptional properties worldwide.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                {['Buy', 'Rent', 'Brokers', 'About Us', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-[#D4AF37] transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                {['Property Valuation', 'Luxury Marketing', 'Investment Consulting', 'Legal Services'].map((service) => (
                  <li key={service}>
                    <a href="#" className="hover:text-[#D4AF37] transition-colors">{service}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Connect</h4>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0F172A] transition-all duration-300"
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EliteEstate. All rights reserved. Premium Real Estate Platform.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;