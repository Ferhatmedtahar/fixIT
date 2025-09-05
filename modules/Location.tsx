function Location() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            Find Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Location
          </h2>
          <p className="text-lg text-gray-600">
            We're located at Ammar Telidji University in Laghouat, Algeria -
            ready to help with your computer support needs
          </p>
        </div>

        {/* Location Info and Map Container */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Location Information */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 text-blue-500 mt-1">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">Laghouat, Algeria</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 text-blue-500 mt-1">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">Available on campus</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 text-blue-500 mt-1">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">contact@support.dz</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Service Hours
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday - Thursday</span>
                  <span className="font-medium text-gray-900">
                    8:00 AM - 5:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Friday - Saturday</span>
                  <span className="font-medium text-gray-900">
                    By Appointment
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Container */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="h-96 relative">
              {/* Embedded Google Map */}
              <iframe
                src={`
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.8184953619143!2d2.825040494367871!3d33.7747441196735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1262e10076c0cb67%3A0x41357958e95a346d!2z2KzYp9mF2LnYqSDYudmF2KfYsSDYq9mE2YrYrNmKLdin2YTZgti32Kgg2KfZhNis2KfZhdi52Yog2LHZgtmFIDAy!5e1!3m2!1sen!2sdz!4v1757096223545!5m2!1sen!2sdz                  `}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                // allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Laghouat Location Map"
              ></iframe>
            </div>

            {/* Map Footer */}
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                📍 Laghouat, Algeria - Click the map to get directions
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Need Help? We're Here for You
            </h3>
            <p className="text-gray-600 mb-4">
              Drop by our location or reach out to us for quick computer support
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
