import React, { useState } from 'react';

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        userType: '',
        subject: '',
        message: ''
    });

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="py-16 px-4 bg-white">
            <div className="max-w-[1500px] mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <p className="text-cyan-400 text-sm mb-3 flex items-center justify-center gap-2">
                        <span>←</span>
                        <span>Contact us</span>
                    </p>
                    <h2 className="text-4xl font-bold text-gray-900 mb-3">
                        Get in Touch
                    </h2>
                    <p className="text-gray-600 text-base">
                        Have questions about In-Klein Elevators? Want to partner with us?
                    </p>
                    <p className="text-gray-600 text-base">
                        We'd love to hear from you.
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Side - Image with Info */}
                    <div className="relative h-full min-h-[500px] rounded-lg overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=800&fit=crop"
                            alt="Elevator technicians"
                            className="w-full h-full object-cover"
                        />

                        {/* Dark Overlay with Text */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-90 p-8 text-white">
                            <h3 className="text-lg font-semibold mb-3">
                                Lorem ipsum dolor sit amet consectetur.
                            </h3>
                            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur. Cursus rhoncus elit ut tristique ullamcorper dignissim. Elit parturient sit sed in porta magna ulvamcorper. Ultrices arcu sed sapien scelerisque adipiscing. Urna parturient non laoreet dolor adipiscing amet.
                            </p>
                            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur. Tellus tristique nulla rhoncus senectus ullamcorper neque. Bibendum non pellentesque bibendum. Dui consectetur at malesuada metus. Lobortales tempor juirem convallis. Donec luctus molestie in faucibus risus sagittis ante nulla vitae. In leo donm eu lectus ac.
                            </p>

                            <div className="mt-6">
                                <p className="text-xs text-gray-400 uppercase mb-1">E-MAIL:</p>
                                <a href="mailto:kleinzlevator@gmail.com" className="text-white underline text-sm hover:text-cyan-400 transition-colors">
                                    kleinzlevator@gmail.com
                                </a>
                            </div>

                            <p className="text-xs text-gray-400 mt-4">
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="bg-white">
                        <div className="space-y-6">
                            {/* First Name and Last Name Row */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm text-gray-700 mb-2">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm text-gray-700 mb-2">
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            {/* Email and Phone Row */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                                        E-Mail <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                                        Phone Number (optional)
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            {/* User Type Dropdown */}
                            <div>
                                <label htmlFor="userType" className="block text-sm text-gray-700 mb-2">
                                    User Type
                                </label>
                                <select
                                    id="userType"
                                    name="userType"
                                    value={formData.userType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent appearance-none bg-white"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                                        backgroundPosition: 'right 0.5rem center',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: '1.5em 1.5em',
                                        paddingRight: '2.5rem'
                                    }}
                                >
                                    <option value="">Select user type</option>
                                    <option value="requester">Job Requester</option>
                                    <option value="contractor">Contractor</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            {/* Subject/Topic */}
                            <div>
                                <label htmlFor="subject" className="block text-sm text-gray-700 mb-2">
                                    Subject/Topic <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                onClick={handleSubmit}
                                className="w-full bg-gray-900 text-white py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;