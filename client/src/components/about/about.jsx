import React, { useState } from 'react';
import './about.css';

const RestaurantAbout = () => {
  // Dynamic content that can be managed via CMS or admin panel
  const [aboutContent, setAboutContent] = useState({
    hero: {
      title: "Our Culinary Journey",
      subtitle: "Where passion meets flavor",
      backgroundImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    },
    story: {
      title: "Our Story",
      content: [
        "Founded in 2010, our restaurant began as a small family-owned bistro with just ten tables. What started as a humble neighborhood eatery has grown into an award-winning dining destination, thanks to our loyal customers and dedicated team.",
        "Our founder, Chef Maria Gonzalez, brought her grandmother's traditional recipes and combined them with modern culinary techniques to create our signature style - what food critics now call 'contemporary heritage cuisine'.",
        "Today, we continue to honor our roots while innovating with seasonal, locally-sourced ingredients to deliver unforgettable dining experiences."
      ],
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
    },
    team: {
      title: "Meet Our Team",
      members: [
        {
          name: "Maria Gonzalez",
          role: "Executive Chef & Founder",
          bio: "With over 25 years of culinary experience, Chef Maria brings passion and creativity to every dish.",
          image: "https://images.unsplash.com/photo-1600566752225-220db3a0c9ba"
        },
        {
          name: "James Wilson",
          role: "Head Sommelier",
          bio: "James curates our award-winning wine selection, pairing each bottle perfectly with our menu.",
          image: "https://images.unsplash.com/photo-1577219491135-ce40273044a8"
        },
        {
          name: "Aisha Johnson",
          role: "Pastry Chef",
          bio: "Aisha's desserts are works of art that provide the perfect sweet ending to every meal.",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
        }
      ]
    },
    values: {
      title: "Our Values",
      items: [
        {
          title: "Sustainability",
          icon: "🌱",
          description: "We source 85% of our ingredients from local farms and practice zero-waste cooking techniques."
        },
        {
          title: "Community",
          icon: "🤝",
          description: "We host monthly charity dinners and cooking classes for underprivileged youth."
        },
        {
          title: "Innovation",
          icon: "✨",
          description: "Our chefs experiment with new techniques while respecting traditional flavors."
        },
        {
          title: "Excellence",
          icon: "🌟",
          description: "Every dish is crafted with meticulous attention to detail and presentation."
        }
      ]
    },
    milestones: {
      title: "Milestones",
      timeline: [
        { year: "2010", event: "Restaurant founded in downtown location" },
        { year: "2012", event: "Featured in 'Best New Restaurants' by Food & Wine" },
        { year: "2015", event: "Expanded to current location with garden patio" },
        { year: "2018", event: "Received first Michelin star" },
        { year: "2022", event: "Launched community farm initiative" }
      ]
    },
    testimonials: {
      title: "What Our Guests Say",
      quotes: [
        {
          text: "The tasting menu was one of the best culinary experiences of my life. Every bite told a story.",
          author: "Sarah M., Food Critic"
        },
        {
          text: "We've been coming here for anniversary dinners for 8 years and it never disappoints. The service is impeccable.",
          author: "Michael & Julia T."
        },
        {
          text: "As a chef myself, I appreciate the technical skill and creativity in every dish. The duck confit is perfection.",
          author: "Chef Daniel R."
        }
      ]
    }
  });

  // State for active tab in story section
  const [activeStoryTab, setActiveStoryTab] = useState(0);

  return (
    <div className="about-page" id='about'>
      {/* Hero Section */}
      <section 
        className="hero-section" 
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${aboutContent.hero.backgroundImage})` }}
      >
        <div className="hero-content">
          <h1>{aboutContent.hero.title}</h1>
          <p className="subtitle">{aboutContent.hero.subtitle}</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story-section">
        <div className="container">
          <h2 className="section-title">{aboutContent.story.title}</h2>
          <div className="story-content">
            <div className="story-text">
              <div className="story-tabs">
                {aboutContent.story.content.map((paragraph, index) => (
                  <button
                    key={index}
                    className={`story-tab ${activeStoryTab === index ? 'active' : ''}`}
                    onClick={() => setActiveStoryTab(index)}
                  >
                    Part {index + 1}
                  </button>
                ))}
              </div>
              <p className="story-paragraph">{aboutContent.story.content[activeStoryTab]}</p>
            </div>
            <div className="story-image">
              <img src={aboutContent.story.image} alt="Our restaurant's story" />
            </div>
          </div>
        </div>
      </section>


      {/* Our Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">{aboutContent.values.title}</h2>
          <div className="values-grid">
            {aboutContent.values.items.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">{aboutContent.testimonials.title}</h2>
          <div className="testimonials-grid">
            {aboutContent.testimonials.quotes.map((quote, index) => (
              <div key={index} className="testimonial-card">
                <p className="quote">"{quote.text}"</p>
                <p className="author">— {quote.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default RestaurantAbout;