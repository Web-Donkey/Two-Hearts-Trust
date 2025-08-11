import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Heart, Users, Target, ArrowRight } from 'lucide-react';
import { mockData } from './mock';

const AboutSection = () => {
  const [activeModal, setActiveModal] = useState(null);

  const aboutItems = [
    {
      id: 'who-we-are',
      title: 'Who We Are',
      icon: Heart,
      preview: 'Learn about our sacred mission rooted in faith and compassion',
      color: 'from-blue-50 to-indigo-50 border-blue-200',
      data: mockData.aboutUs.whoWeAre
    },
    {
      id: 'how-we-operate', 
      title: 'How We Operate',
      icon: Users,
      preview: 'Discover how we serve through generosity and transparency',
      color: 'from-green-50 to-emerald-50 border-green-200',
      data: mockData.aboutUs.howWeOperate
    },
    {
      id: 'vision-mission',
      title: 'Our Vision & Mission', 
      icon: Target,
      preview: 'Understand our commitment to dignity and hope',
      color: 'from-purple-50 to-violet-50 border-purple-200',
      data: mockData.aboutUs.visionMission
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            About Two Hearts Charitable Trust
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Inspired by the legacy of Venerable Teresa Fardella, we continue a mission of 
            compassionate service to the terminally ill, elderly, and vulnerable members of our community.
          </p>
        </div>

        {/* About Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {aboutItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.id}
                className={`bg-gradient-to-br ${item.color} border-2 rounded-xl p-8 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl group`}
                onClick={() => setActiveModal(item.id)}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 text-center mb-6 leading-relaxed">
                  {item.preview}
                </p>
                
                <div className="flex items-center justify-center text-blue-600 font-semibold group-hover:text-blue-700">
                  Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Dialogs */}
        {aboutItems.map((item) => (
          <Dialog 
            key={item.id}
            open={activeModal === item.id} 
            onOpenChange={(open) => !open && setActiveModal(null)}
          >
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-slate-800 mb-4 flex items-center">
                  <item.icon className="w-8 h-8 text-blue-600 mr-3" />
                  {item.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                {item.id === 'who-we-are' && (
                  <>
                    <img 
                      src={item.data.image} 
                      alt="Who we are" 
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {item.data.content}
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Her legacy lives on through the DCV Sisters, who continue her mission across the world. Inspired by her spirit, the Two Heart Charitable Trust was established to extend this mission in India, particularly through acts of mercy, health care, and empowerment.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Named after the Sacred Heart of Jesus and the Immaculate Heart of Mary, the Trust embodies a twofold love: one that heals and one that consoles. It brings together medical professionals, caregivers, volunteers, and people of goodwill to serve the suffering with dignity, hope, and care.
                    </p>
                  </>
                )}
                
                {item.id === 'how-we-operate' && (
                  <>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {item.data.content}
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      We are committed to transparency, integrity, and responsible stewardship, ensuring that every rupee received is directed toward uplifting the poor, empowering women, caring for the aged, and bringing dignity to the suffering. We rely on faith, prayer, and your support to keep this mission alive.
                    </p>
                  </>
                )}
                
                {item.id === 'vision-mission' && (
                  <div className="space-y-8">
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h4 className="text-2xl font-bold text-blue-800 mb-4">Our Vision</h4>
                      <p className="text-lg text-slate-700 leading-relaxed">
                        {item.data.vision}
                      </p>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-6">
                      <h4 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h4>
                      <ul className="space-y-4">
                        {item.data.mission.map((point, index) => (
                          <li key={index} className="flex items-start">
                            <span className="inline-block w-6 h-6 bg-green-600 text-white rounded-full text-sm font-bold text-center mr-4 mt-1 flex-shrink-0">
                              {index + 1}
                            </span>
                            <p className="text-lg text-slate-700 leading-relaxed">
                              {point}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;