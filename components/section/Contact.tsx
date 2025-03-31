import React from 'react';

const Contact = () => {
  return (
    // Removed bg-gray-900 to inherit global background
    <section id="contact" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">お問い合わせ</h2>
        {/* Removed bg-gray-800, p-8, rounded-lg, shadow-lg from this div */}
        <div className="max-w-md mx-auto">
          <form method="post" action="https://tkd.form.newt.so/v1/t8Sg8tmPb" className="space-y-6">
            <div>
              {/* Adjusted label color potentially if needed, keeping text-gray-300 for now */}
              <label htmlFor="full-name" className="block text-sm font-medium text-gray-300 mb-2">
                お名前 (Full name)
              </label>
              <input
                type="text"
                name="Full name"
                id="full-name"
                required
                // Matched input style to button style (bg-white/10)
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition duration-150 ease-in-out"
                placeholder="山田 太郎"
              />
            </div>
            {/* Example: Email field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                メールアドレス (Email)
              </label>
              <input
                type="email"
                name="Email"
                id="email"
                required
                // Matched input style to button style (bg-white/10)
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition duration-150 ease-in-out"
                placeholder="your.email@example.com"
              />
            </div>
            {/* Example: Message field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                お問い合わせ内容 (Message)
              </label>
              <textarea
                name="Message"
                id="message"
                rows={4}
                required
                // Matched textarea style to button style (bg-white/10)
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition duration-150 ease-in-out"
                placeholder="お問い合わせ内容をご記入ください..."
              ></textarea>
            </div>
            
            {/* ... (other potential fields remain commented out) ... */}
            <div>
              <button
                type="submit"
                // Matched button style to the example provided (bg-white/10)
                className="w-full inline-block justify-center px-6 py-3 text-white font-medium bg-white/10 hover:bg-white/20 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                送信 (Submit)
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
