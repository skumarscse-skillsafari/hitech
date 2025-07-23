import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

const LocationMap: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-8 w-8 text-yellow-500 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">
              Visit Our Campus
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in the heart of Coimbatore, our campus is easily accessible and surrounded by excellent infrastructure
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Google Map */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Campus Location</h3>
              <p className="text-gray-600">Hindusthan Institute of Technology, Coimbatore</p>
            </div>
            
            <div className="relative h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31343.270009689997!2d76.96502354550023!3d10.894539137441964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85abaa31dcfa9%3A0x72d5daed0d228046!2sHindusthan%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1752210144684!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hindusthan Institute of Technology Location"
                className="w-full h-full"
              ></iframe>
            </div>
            
            <div className="p-6 bg-gray-50">
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                <Navigation className="h-5 w-5" />
                <span>Get Directions</span>
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            
            {/* Address Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Campus Address</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Hindusthan Institute of Technology<br />
                    Valley Campus, Pollachi Main Road, Othakkalmandapam (Post),
                    Coimbatore - 641 032
                    Tamil Nadu, India.<br />
                  
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Phone</h4>
                    <p className="text-gray-700">+91 97152 601184</p>
                    <p className="text-gray-700">+91 90470 10006</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email</h4>
                    <p className="text-gray-700"> hit.office@hindusthan.net
                      </p>
                    <p className="text-gray-700"></p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Office Hours</h4>
                    <div className="space-y-1 text-gray-700">
                      <p><span className="font-medium">Monday - Saturday:</span> 9:00 AM - 5:00 PM</p>
                      <p><span className="font-medium">Sunday:</span> 9:00 AM - 1.00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-gray-900 mb-4">How to Reach</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">By Air</h5>
                  <p className="text-gray-700">Coimbatore International Airport - 23 km (90 minutes drive)</p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">By Train</h5>
                  <p className="text-gray-700">Coimbatore Junction Railway Station - 15 km (35 minutes drive)</p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">By Bus</h5>
                  <p className="text-gray-700">Regular bus services available from Coimbatore Bus Stand</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h4>
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-white hover:bg-yellow-100 text-gray-700 hover:text-yellow-700 py-3 px-4 rounded-lg font-medium transition-colors text-sm border border-gray-200 hover:border-yellow-300">
                  Campus Tour
                </button>
                <button className="bg-white hover:bg-yellow-100 text-gray-700 hover:text-yellow-700 py-3 px-4 rounded-lg font-medium transition-colors text-sm border border-gray-200 hover:border-yellow-300">
                  Download Map
                </button>
                <button className="bg-white hover:bg-yellow-100 text-gray-700 hover:text-yellow-700 py-3 px-4 rounded-lg font-medium transition-colors text-sm border border-gray-200 hover:border-yellow-300">
                  Parking Info
                </button>
                <button className="bg-white hover:bg-yellow-100 text-gray-700 hover:text-yellow-700 py-3 px-4 rounded-lg font-medium transition-colors text-sm border border-gray-200 hover:border-yellow-300">
                  Contact Us
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default LocationMap;