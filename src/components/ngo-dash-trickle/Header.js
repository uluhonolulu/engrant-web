import React from 'react';
import { DynamicIcon } from 'lucide-react/dynamic';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <header data-name="header" data-file="components/Header.js" className="fixed w-full top-0 z-50 glass-effect">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <DynamicIcon name="bar-chart-3" className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-gray-900">EnGrant</span>
                    </div>
                    
                    <nav className="hidden md:flex space-x-8">
                        <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">How It Works</a>
                        <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
                        <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
                        <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</a>
                    </nav>
                    
                    <div className="hidden md:flex">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                            Join Waiting List
                        </button>
                    </div>
                    
                    <button 
                        className="md:hidden text-gray-700"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <DynamicIcon name="menu" className="w-6 h-6 text-neutral-700" />
                    </button>
                </div>
            </div>
        </header>
    );
}
