import React, { useState, useEffect, useRef } from 'react';
import YouTubeMixComponent from '../components/YoutubeMixComponent';
import rev1 from '../assets/rev1.jpg';
import rev2 from '../assets/rev2.jpg';
import rev3 from '../assets/rev3.jpg';
import rev4 from '../assets/rev4.jpg';
import rev5 from '../assets/rev5.jpg';
import rev6 from '../assets/rev6.jpg';
import rev7 from '../assets/rev7.jpg';
import rev8 from '../assets/rev8.jpg';
import rev9 from '../assets/rev9.jpg';
import rev10 from '../assets/rev10.jpg';
import rev11 from '../assets/rev11.jpg';
import rev12 from '../assets/rev12.jpg';
import {
  Calendar,
  Users,
  Heart,
  Play,
  Clock,
  MapPin,
  MessageCircle,
  Instagram,
  Search,
  Star,
  Music,
  Mic2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Carousel from '../components/Carousel';


// Lightweight scroll-reveal (no extra libraries)
const Reveal = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setShown(true), delay);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={
        `${className} transform transition-all duration-700 ease-out ` +
        (shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')
      }
    >
      {children}
    </div>
  );
};

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  // Countdown timer effect (Next big night)
  useEffect(() => {
    const targetDate = new Date('2025-07-19T22:00:00');
    const update = () => {
      const now = Date.now();
      const distance = targetDate.getTime() - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };
    const id = setInterval(update, 1000);
    update();
    return () => clearInterval(id);
  }, []);

  // Reveler gallery using imported images
  const revelerGallery = [
    rev1,
    rev2,
    rev3,
    rev4,
    rev5,
    rev6,
    rev7,
    rev8,
    rev9,
    rev10,
    rev11,
    rev12,
  ];

  useEffect(() => {
    const id = setInterval(() => setCurrentImageIndex((i) => (i + 1) % revelerGallery.length), 3000);
    return () => clearInterval(id);
  }, []);

  const events = [
    {
      month: 'March 2025',
      items: [
        { date: 'Mar 15', time: '9:00 PM', title: 'Reggae Night', performer: 'Guest DJ & Live Band', location: 'Main Floor, Embu' },
        { date: 'Mar 22', time: '10:00 PM', title: 'Amapiano Vibes', performer: 'Special Guest DJ', location: 'VIP Lounge' },
      ],
    },
    {
      month: 'April 2025',
      items: [
        { date: 'Apr 5', time: '8:30 PM', title: 'Afrobeats Takeover', performer: 'Resident & Friends', location: 'Rooftop Deck' },
        { date: 'Apr 12', time: '9:30 PM', title: 'Throwback Thursday', performer: 'Classic Hits Set', location: 'Main Floor' },
      ],
    },
    {
      month: 'May 2025',
      items: [
        { date: 'May 19', time: '10:00 PM', title: 'Live Sessions', performer: 'Surprise Artist', location: 'Main Stage' },
        { date: 'May 26', time: '9:00 PM', title: 'Benga Night', performer: 'Guest Selector', location: 'Culture Corner' },
      ],
    },
  ];

  const blogPosts = [
    { image: rev9, category: 'Nightlife', title: 'Best Hangout Spots in Westlands for Young Professionals', date: 'April 25, 2025', comments: 15 },
    { image: rev10, category: 'Music', title: "How Gengetone is Shaping Embu's Club Scene", date: 'April 20, 2025', comments: 23 },
    { image: rev1, category: 'Events', title: 'Corporate After-Work Parties: The New Networking', date: 'April 18, 2025', comments: 8 },
    { image: rev2, category: 'Lifestyle', title: 'Craft Cocktails Meet Kenyan Flavors', date: 'April 15, 2025', comments: 12 },
  ];

  const testimonials = [
    { text: 'This feels like home! The music, the energy—absolutely perfect. Coming back next weekend.', author: 'Sharon', rating: 5 },
    { text: 'Best cocktails in town. The DJ lineup is always on fire and the crowd is awesome!', author: 'Mike ', rating: 5 },
    { text: 'Ideal spot for after-work hangouts. Great atmosphere and super friendly staff!', author: 'Grace', rating: 5 },
  ];

  const nextSlide = () => setCurrentImageIndex((i) => (i + 1) % revelerGallery.length);
  const prevSlide = () => setCurrentImageIndex((i) => (i - 1 + revelerGallery.length) % revelerGallery.length);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* --- KEEP CAROUSEL AT THE VERY TOP --- */}
      <div className="relative">
        <Carousel />

        {/* Search Overlay (does not affect Carousel height/layout) */}
        
      </div>

      {/* Introduction */}
      <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal className="mb-8">
            <span className="inline-block bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide">
              Embu's Premier Nightlife Destination
            </span>
          </Reveal>

          <Reveal>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-amber-200 to-orange-300 bg-clip-text text-transparent leading-tight">
              Welcome to Zero One Four Lounge
            </h2>
          </Reveal>

          <Reveal className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed mb-12 max-w-4xl mx-auto" delay={100}>
            <p>
              Experience the heartbeat of Embu's nightlife where East African rhythm blends with global beats. Zero One Four Lounge is where memories are made and great nights happen.
            </p>
            <p className="text-amber-200">
              From Gengetone and Afrobeats to Amapiano and international hits — every night celebrates music, culture, and style.
            </p>
          </Reveal>

          {/* Main Lounge Image */}
          <Reveal className="mb-12" delay={150}>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={rev3} 
                alt="Zero One Four Lounge interior"
                className="w-full h-96 object-cover"
              />
            </div>
          </Reveal>

          <Reveal className="flex flex-col sm:flex-row gap-4 justify-center" delay={200}>
            <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-xl transform hover:scale-105">
              Book Your Table
            </button>
            <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200">
              View Menu
            </button>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          <Reveal className="text-center group">
            <div className="mb-6 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={rev4} 
                alt="VIP section at Zero One Four"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="bg-gradient-to-r from-amber-500/10 to-orange-600/10 backdrop-blur-sm p-6 rounded-xl border border-amber-500/20">
              <Users className="w-12 h-12 mb-4 mx-auto text-amber-400" />
              <h3 className="text-xl font-bold mb-2 text-white">VIP Experience</h3>
              <p className="text-gray-300">Premium bottles, exclusive seating, and personal service for an unforgettable night.</p>
            </div>
          </Reveal>

          <Reveal className="text-center group" delay={100}>
            <div className="mb-6 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={rev5} 
                alt="DJ booth and sound system"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="bg-gradient-to-r from-amber-500/10 to-orange-600/10 backdrop-blur-sm p-6 rounded-xl border border-amber-500/20">
              <Music className="w-12 h-12 mb-4 mx-auto text-amber-400" />
              <h3 className="text-xl font-bold mb-2 text-white">Live DJ Sets</h3>
              <p className="text-gray-300">Top local and international DJs spinning the hottest tracks every weekend.</p>
            </div>
          </Reveal>

          <Reveal className="text-center group" delay={200}>
            <div className="mb-6 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={rev6} 
                alt="Craft cocktails and bar setup"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="bg-gradient-to-r from-amber-500/10 to-orange-600/10 backdrop-blur-sm p-6 rounded-xl border border-amber-500/20">
              <Heart className="w-12 h-12 mb-4 mx-auto text-amber-400" />
              <h3 className="text-xl font-bold mb-2 text-white">Craft Cocktails</h3>
              <p className="text-gray-300">Signature drinks inspired by Kenyan flavors and refined classics.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Upcoming Event / Countdown */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-purple-600 to-red-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Next Big Bash: Gengetone Live Sessions</h2>
            <p className="text-xl text-orange-100 mb-8">September 19th, 2025 • 10:00 PM • Featuring Special Guests</p>
          </Reveal>

          <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto" delay={100}>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-bold text-white">{timeLeft.days}</div>
              <div className="text-orange-100">Days</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-bold text-white">{timeLeft.hours}</div>
              <div className="text-orange-100">Hours</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-bold text-white">{timeLeft.minutes}</div>
              <div className="text-orange-100">Minutes</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-bold text-white">{timeLeft.seconds}</div>
              <div className="text-orange-100">Seconds</div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <button className="bg-white text-orange-600 px-10 py-4 rounded-xl hover:bg-gray-100 transition-all duration-200 font-bold text-lg shadow-xl transform hover:scale-105">
              Get Your Tickets
            </button>
          </Reveal>
        </div>
      </section>

      {/* Event Schedule */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
              This Month's <span className="text-amber-400">Lineup</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((monthGroup, index) => (
              <Reveal key={index} className="bg-gradient-to-b from-gray-800 to-black p-8 rounded-2xl shadow-xl border border-amber-500/20 hover:border-amber-400/40 transition-all duration-300">
                <h3 className="text-2xl font-bold text-amber-400 mb-6 border-b border-amber-500/30 pb-3">{monthGroup.month}</h3>
                <div className="space-y-6">
                  {monthGroup.items.map((event, eventIndex) => (
                    <div key={eventIndex} className="border-l-4 border-amber-500 pl-6 hover:border-orange-500 transition-colors">
                      <div className="flex items-center text-sm text-gray-400 mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                        <Clock className="w-4 h-4 ml-4 mr-2" />
                        {event.time}
                      </div>
                      <h4 className="font-bold text-white text-lg mb-1">{event.title}</h4>
                      <div className="flex items-center text-amber-300 mb-2">
                        <Mic2 className="w-4 h-4 mr-2" />
                        {event.performer}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reveler Gallery Slider */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white">
              Our <span className="text-amber-400">Revelers</span> in Action
            </h2>
            <p className="text-gray-300 text-center mb-16 text-lg">See yourself in our next gallery!</p>
          </Reveal>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                {revelerGallery.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img 
                      src={image} 
                      alt={`Revelers enjoying Zero One Four Lounge - ${index + 1}`}
                      className="w-full h-96 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Nav */}
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-amber-500 hover:bg-amber-600 text-black p-3 rounded-full shadow-xl transition-all duration-200">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-amber-500 hover:bg-amber-600 text-black p-3 rounded-full shadow-xl transition-all duration-200">
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {revelerGallery.map((_, i) => (
                <button key={i} onClick={() => setCurrentImageIndex(i)} className={`w-3 h-3 rounded-full transition-all duration-200 ${i === currentImageIndex ? 'bg-amber-400 scale-125' : 'bg-gray-600 hover:bg-gray-500'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guest Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white">
              What Our <span className="text-amber-400">Guests</span> Say
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Reveal key={i} className="bg-gradient-to-b from-amber-500/10 to-orange-600/10 backdrop-blur-sm p-8 rounded-2xl border border-amber-500/20 hover:border-amber-400/40 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {[...Array(t.rating)].map((_, s) => (
                    <Star key={s} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-200 italic leading-relaxed mb-6">"{t.text}"</blockquote>
                <cite className="text-amber-400 font-semibold">— {t.author}</cite>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Mix */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <YouTubeMixComponent 
            videoUrl="https://www.youtube.com/watch?v=4nzcodYeh-Q&pp=ygUMIDAxNCBsb3VuZ2Ug"
            title="Mix of the Week"
            highlightWord="Week"
            containerClassName="w-full"
          />

        </div>
      </section>

      {/* Blog / Lounge Life */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
              The <span className="text-amber-400">Lounge Life</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map((post, index) => (
              <Reveal key={index} className="bg-gradient-to-b from-gray-800 to-black rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-amber-500/20 hover:border-amber-400/40">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="bg-amber-400 text-black text-xs px-3 py-1 rounded-full font-semibold">{post.category}</span>
                  <h3 className="text-lg font-bold mt-4 mb-3 text-white leading-tight">{post.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{post.date}</span>
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {post.comments}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Social Moments */}
      <section className="py-20 bg-gradient-to-t from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex items-center justify-center mb-12">
            <Instagram className="w-10 h-10 text-amber-400 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Follow Us <span className="text-amber-400">@zero_14_lounge_embu_sherehe_hq</span></h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[rev7, rev8, rev9, rev10, rev1, rev2].map((image, index) => (
              <Reveal key={index} className="aspect-square overflow-hidden rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer border-2 border-transparent hover:border-amber-400">
                <img 
                  src={image} 
                  alt={`Instagram post ${index + 1} - Zero One Four moments`}
                  className="w-full h-full object-cover"
                />
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-12" delay={100}>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-xl transform hover:scale-105">
              Follow for More Vibes
            </button>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-amber-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-3xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Zero One Four</div>
              <p className="text-gray-400 leading-relaxed">
                Embu's premier nightlife destination where every night is a celebration of music, culture, and good vibes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-amber-400">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-amber-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Events</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Menu</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Reservations</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-amber-400">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>Embu</p>
                <p>+254 700 000 000</p>
                <p>hello@zeroonefourlounge.com</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-amber-400">Hours</h3>
              <div className="space-y-2 text-gray-400">
                <p>Mon–Thu: 5:00 PM – 1:00 AM</p>
                <p>Fri–Sat: 5:00 PM – 4:00 AM</p>
                <p>Sun: 5:00 PM – Midnight</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Zero One Four Lounge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;