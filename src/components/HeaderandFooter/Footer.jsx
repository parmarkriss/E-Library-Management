import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-400 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    {/* Column 1 */}
                    <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
                        <h4 className="text-lg font-bold mb-4 text-center md:text-left">Open Library</h4>
                        <ul className="list-none text-center md:text-left">
                            <li><a href="#" className="text-gray-700 hover:text-blue-500">Vision</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-500">Volunteer</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-500">Partner With Us</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-500">Careers</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-500">Blog</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-500">Terms of Service</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-500">Donate</a></li>
                        </ul>
                    </div>
                    {/* Column 2 */}
                    <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
                        <h4 className="text-lg font-bold mb-4 text-center md:text-left">Discover</h4>
                        <ul className="list-none text-center md:text-left">
                            <li><a href="#" className="text-gray-700 hover:text-blue-500">Home</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-500">Books</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-500">Authors</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-500">Subjects</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-500">Collections</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-500">Advanced Search</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-500">Return to Top</a></li>
                        </ul>
                    </div>
                    {/* Column 3 */}
                    <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
                        <h4 className="text-lg font-bold mb-4 text-center md:text-left">Develop</h4>
                        <ul className="list-none text-center md:text-left">
                            <li><a href="#" className="text-gray-700 hover:text-blue-500">Developer Center</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-500">API Documentation</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-500">Bulk Data Dumps</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-500">Writing Bots</a></li>
                        </ul>
                    </div>
                    {/* Column 4 */}
                    <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
                        <h4 className="text-lg font-bold mb-4 text-center md:text-left">Connect</h4>
                        <ul className="list-none text-center md:text-left">
                            <li><a href="#" className="text-gray-700 hover:text-blue-500">Contact Us</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-500">Social Media</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-500">Support</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-2 text-center">
                    <p className="text-sm">© 2024 eBook Application. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
