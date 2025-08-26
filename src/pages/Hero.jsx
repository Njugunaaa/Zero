import React, { useState, useEffect } from 'react';
import { Calendar, Users, Heart, Play, ChevronRight, Clock, MapPin, User, MessageCircle, Instagram } from 'lucide-react';
import Carousel from '../components/Carousel';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer effect
  useEffect(() => {
    const targetDate = new Date('2025-07-19T10:00:00');
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timer);
  }, []);

  const events = [
    {
      month: 'May 2025',
      items: [
        { date: 'May 15', time: '10:00 AM', title: 'Bible Study', speaker: 'Pastor John Smith', location: 'Grace Community Church' },
        { date: 'May 22', time: '11:00 AM', title: 'Sunday Worship', speaker: 'Rev. Sarah Johnson', location: 'Main Sanctuary' }
      ]
    },
    {
      month: 'June 2025',
      items: [
        { date: 'June 5', time: '7:00 PM', title: 'Choir Repetition', speaker: 'Music Director Mary Brown', location: 'Music Hall' },
        { date: 'June 12', time: '2:00 PM', title: 'Marriage Preparation', speaker: 'Pastor David Wilson', location: 'Fellowship Hall' }
      ]
    },
    {
      month: 'July 2025',
      items: [
        { date: 'July 19', time: '10:00 AM', title: 'Week of Prayer for Christian Unity', speaker: 'Piter Bowman - Lead Pastor', location: 'Main Sanctuary' },
        { date: 'July 26', time: '6:00 PM', title: 'Youth Ministry', speaker: 'Pastor Emily Davis', location: 'Youth Center' }
      ]
    }
  ];

  const blogPosts = [
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop',
      category: 'Modern Church',
      title: 'Building a Stronger Community Through Faith',
      date: 'April 25, 2025',
      comments: 3
    },
    {
      image: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?w=300&h=200&fit=crop',
      category: 'Worship',
      title: 'The Power of Collective Prayer',
      date: 'April 20, 2025',
      comments: 7
    },
    {
      image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=300&h=200&fit=crop',
      category: 'Community',
      title: 'Serving Others: A Path to Spiritual Growth',
      date: 'April 18, 2025',
      comments: 12
    },
    {
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=300&h=200&fit=crop',
      category: 'Faith',
      title: 'Finding Hope in Times of Uncertainty',
      date: 'April 15, 2025',
      comments: 5
    }
  ];

  const instagramImages = [
    'https://images.unsplash.com/photo-1507692138018-ea015e5c6e41?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1438557068880-c5f474830c31?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1438032005730-c779502df39b?w=200&h=200&fit=crop'
  ];

  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero Section */}
      {/* <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 pt-[10rem]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1507692138018-ea015e5c6e41?w=1200&h=600&fit=crop" 
            alt="Church interior" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Our Church is the True Path to Overcoming Suffering & Difficulties in Life through Faith & Hope.
          </h1>
          <p className="text-xl italic mb-12">Piter Bowman – Lead Pastor</p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
              <Users className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">01. Our Community</h3>
              <p className="text-sm mb-4">A loving family where everyone belongs and grows together in faith and fellowship.</p>
              <a href="#" className="text-blue-300 hover:text-white flex items-center justify-center">
                Read more <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
              <Heart className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">02. Church Mission</h3>
              <p className="text-sm mb-4">Spreading God's love and hope to transform lives and communities through Christ.</p>
              <a href="#" className="text-blue-300 hover:text-white flex items-center justify-center">
                Read more <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
              <User className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">03. Our Mentors</h3>
              <p className="text-sm mb-4">Experienced spiritual guides dedicated to helping you grow in your faith journey.</p>
              <a href="#" className="text-blue-300 hover:text-white flex items-center justify-center">
                Read more <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section> */}

      <Carousel />

      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            We Preach the Gospel in Every Sermon
          </h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-8">
            <p>
              Our church stands as a beacon of hope in our community, dedicated to sharing the transformative power of God's word. Through every sermon, prayer, and gathering, we strive to create an environment where hearts are touched and lives are changed.
            </p>
            <p>
              We believe in the power of authentic worship, genuine fellowship, and practical application of biblical principles. Our mission extends beyond the church walls as we serve our community and spread God's love to all who need it.
            </p>
          </div>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors text-lg font-medium">
            About Us
          </button>
        </div>
      </section>

      {/* Upcoming Event / Countdown */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Join Our Week of Prayer for Christian Unity Coming on 19th July 2025
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto">
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <div className="text-3xl font-bold">{timeLeft.days}</div>
              <div className="text-sm">Days</div>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <div className="text-3xl font-bold">{timeLeft.hours}</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <div className="text-3xl font-bold">{timeLeft.minutes}</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <div className="text-3xl font-bold">{timeLeft.seconds}</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
          
          <button className="bg-white text-blue-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium">
            View All Events
          </button>
        </div>
      </section>

      {/* Event Schedule */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Event Schedule
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((monthGroup, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4">{monthGroup.month}</h3>
                <div className="space-y-4">
                  {monthGroup.items.map((event, eventIndex) => (
                    <div key={eventIndex} className="border-l-4 border-blue-600 pl-4">
                      <div className="flex items-center text-sm text-gray-500 mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {event.date}
                        <Clock className="w-4 h-4 ml-3 mr-1" />
                        {event.time}
                      </div>
                      <h4 className="font-bold text-gray-900">{event.title}</h4>
                      <p className="text-sm text-gray-600">{event.speaker}</p>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {event.location}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Worship */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            The Sound of Our Worship
          </h2>
          
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <Play className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Serve Somebody: Think Together</h3>
            <p className="text-gray-600 mb-6">Experience the power of our worship through this inspiring track</p>
            
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">0:00</span>
                <span className="text-sm text-gray-600">4:32</span>
              </div>
              <div className="bg-blue-600 h-2 rounded-full w-1/3"></div>
            </div>
          </div>
          
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
            Read More
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Parishioners About Us
          </h2>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg">
            <blockquote className="text-xl italic leading-relaxed mb-6">
              "My wife and I come here every Sunday. The church's atmosphere is nice, inspirational and devout. Many good and kind people pray here. I recommend joining us with all your family."
            </blockquote>
            <cite className="text-blue-300 font-medium">— Alex Moore, London</cite>
          </div>
        </div>
      </section>

      {/* Blog Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            The Church Life
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {post.comments} Comments
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <Instagram className="w-8 h-8 text-gray-900 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Follow Us on Instagram</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity cursor-pointer">
                <img 
                  src={image} 
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">Grace Church</div>
              <p className="text-gray-400">
                A community of faith, hope, and love serving God and our neighbors.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Events</a></li>
                <li><a href="#" className="hover:text-white">Ministries</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>123 Church Street</p>
                <p>Ruiru, Kiambu County</p>
                <p>+254 700 000 000</p>
                <p>info@gracechurch.org</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Service Times</h3>
              <div className="space-y-2 text-gray-400">
                <p>Sunday Worship: 10:00 AM</p>
                <p>Bible Study: Wednesday 7:00 PM</p>
                <p>Prayer Meeting: Friday 6:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 AncoraThemes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;