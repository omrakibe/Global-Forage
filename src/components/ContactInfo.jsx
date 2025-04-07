const ContactInfo = () => {
    return (
      <div id="contact" className="flex items-center justify-center px-4 py-12 bg-gray-50 mb-12">
        <div className="bg-white shadow-md rounded-2xl p-8 max-w-3xl w-full text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
  
          {/* Address */}
          <div className="text-gray-700 mb-4">
            <h4 className="text-lg font-semibold mb-1">Locations:</h4>
            <p>Conakry, Kindia, Dalaba, Labé</p>
          </div>
  
          {/* Phone Numbers */}
          <div className="text-gray-700 mb-4">
            <h4 className="text-lg font-semibold mb-1">Phone Numbers:</h4>
            <p>+224 627066363</p>
            <p>+224 629739393</p>
            <p>+224 626127594</p>
          </div>
  
          {/* Email */}
          <div className="text-gray-700">
            <h4 className="text-lg font-semibold mb-1">Email:</h4>
            <p>
              <a
                href="mailto:global.forage3734@gmail.com"
                className="text-blue-600 hover:underline"
              >
                global.forage3734@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactInfo;
  