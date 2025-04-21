import React, { useState } from 'react';
import Navbar from './Navbar';

const AboutPage = () => {
  const [expandedSections, setExpandedSections] = useState({
    mission: true,
    features: false,
    whyChoose: false,
    contact: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navbar/>
      {/* Main Content */}
      <div className="flex-grow max-w-3xl mx-auto p-8 w-full">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold">About Notebook App</h1>
        </header>

        {/* Main Content */}
        <main className="space-y-8">
          {/* Mission Section */}
          <section>
            <div
              onClick={() => toggleSection('mission')}
              className="cursor-pointer flex justify-between items-center"
            >
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <span className="text-xl">
                {expandedSections.mission ? '▼' : '▶'}
              </span>
            </div>
            {expandedSections.mission && (
              <p className="mt-4 leading-relaxed">
                At Notebook, we believe that every idea matters. Our mission is to provide a seamless and intuitive platform that helps you capture, organize, and access your notes anytime, anywhere.
              </p>
            )}
          </section>

          {/* Features Section */}
          <section>
            <div
              onClick={() => toggleSection('features')}
              className="cursor-pointer flex justify-between items-center"
            >
              <h2 className="text-2xl font-semibold">Key Features</h2>
              <span className="text-xl">
                {expandedSections.features ? '▼' : '▶'}
              </span>
            </div>
            {expandedSections.features && (
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>Easy Note-Taking</li>
                <li>Organize Effortlessly</li>
                <li>Sync Across Devices</li>
                <li>Rich Text Formatting</li>
                <li>Search Functionality</li>
                <li>Security</li>
                <li>Collaboration</li>
              </ul>
            )}
          </section>

          {/* Why Choose Notebook Section */}
          <section>
            <div
              onClick={() => toggleSection('whyChoose')}
              className="cursor-pointer flex justify-between items-center"
            >
              <h2 className="text-2xl font-semibold">Why Choose Notebook?</h2>
              <span className="text-xl">
                {expandedSections.whyChoose ? '▼' : '▶'}
              </span>
            </div>
            {expandedSections.whyChoose && (
              <p className="mt-4 leading-relaxed">
                Notebook is more than just a note-taking app—it’s a productivity powerhouse. We’ve built it with a focus on user experience, ensuring that every feature is designed to help you work smarter, not harder.
              </p>
            )}
          </section>

          {/* Contact Section */}
          <section>
            <div
              onClick={() => toggleSection('contact')}
              className="cursor-pointer flex justify-between items-center"
            >
              <h2 className="text-2xl font-semibold">Contact Us</h2>
              <span className="text-xl">
                {expandedSections.contact ? '▼' : '▶'}
              </span>
            </div>
            {expandedSections.contact && (
              <p className="mt-4 leading-relaxed">
                Have questions or need support? Reach out to us at{' '}
                <a
                  href="mailto:support@notebookapp.com"
                  className="text-blue-500 hover:underline"
                >
                  support@notebookapp.com
                </a>
                .
              </p>
            )}
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="text-center   border-t border-gray-200">
        <p >© 2025 NoteMate App. All rights reserved by - Ritesh Thorve</p>
      </footer>
    </div>
  );
};

export default AboutPage;