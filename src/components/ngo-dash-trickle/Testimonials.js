import React from 'react';
import { DynamicIcon } from 'lucide-react/dynamic';


export default function Testimonials() {
    const testimonials = [
        {
            name: "Maria Rodriguez",
            role: "Executive Director, Community Food Bank",
            content: "EnGrant saved us 15 hours per grant report. Our board gets real-time updates without us lifting a finger!",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
        },
        {
            name: "David Kim",
            role: "Founder, Youth Education Alliance",
            content: "We went from dreading quarterly reports to having them auto-generated. Our compliance rate is now 100%.",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
        },
        {
            name: "Sarah Johnson",
            role: "Development Manager, Animal Rescue Network",
            content: "The dashboard shows exactly where we stand on every grant. No more late-night panic sessions before deadlines.",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        }
    ];


    return (
        <section id="testimonials" data-name="testimonials" data-file="components/Testimonials.js" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Real Success Stories
                    </h2>
                    <p className="text-xl text-gray-600">
                        See how nonprofits are transforming their grant tracking with EnGrant
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg">
                            <div className="flex items-center mb-6">
                                <img 
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">"{testimonial.content}"</p>
                            <div className="flex text-yellow-400 mt-4">
                                {[...Array(5)].map((_, i) => (
                                    <DynamicIcon key={i} name="star" className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
