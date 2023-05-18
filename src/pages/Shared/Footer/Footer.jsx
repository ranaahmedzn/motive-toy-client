import { FaFacebook, FaHeadset, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-[#F8F8F8]">
            <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 max-w-7xl mx-auto px-4 lg:px-10 py-10 lg:py-20">
                <div className="lg:col-span-2">
                    <h3 className="text-4xl font-bold text-[#333E48]">Motive Toy</h3>
                    <div className="flex gap-6 items-center mt-5 mb-6">
                        <FaHeadset className="text-[#0787EA] text-5xl" />
                        <div>
                            <p>Got Questions ? Call us 24/7!</p>
                            <p className="text-3xl">(415) 555-6789</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-bold text-lg text-[#333E48]">Contact Info</p>
                        <p className="mb-4">1234 Oak Avenue Suite 5678 Metropolis, USA 98765</p>
                        <div className="flex gap-5">
                            <FaFacebook className="social-icon" />
                            <FaTwitter className="social-icon" />
                            <FaInstagram className="social-icon" />
                            <FaYoutube className="social-icon" />
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="text-xl font-bold mb-5 text-[#333E48]">Services</h4>
                    <div className="space-y-2.5 text-gray-600">
                        <p>Explore Toy Collection</p>
                        <p>Bestsellers</p>
                        <p>Trendy Toys</p>
                        <p>New Releases</p>
                        <p>Toy Categories</p>
                        <p>Discover Toys</p>
                    </div>
                </div>
                <div>
                    <h4 className="text-xl font-bold mb-5 text-[#333E48]">Navigate</h4>
                    <div className="space-y-2.5 text-gray-600">
                        <p>Home</p>
                        <p>All Toys</p>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                <div>
                    <h4 className="text-xl font-bold mb-5 text-[#333E48]">Customer Care</h4>
                    <div className="space-y-2 5 text-gray-600">
                        <p>Customer Support</p>
                        <p>Live Chat</p>
                        <p>Return Policy</p>
                        <p>FAQs</p>
                        <p>Feedback</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#EAEAEA] py-5">
                <div className="max-w-7xl mx-auto flex-col-reverse md:flex-row flex gap-4 justify-between px-4 lg:px-10">
                    <div className="text-[#333E48]">&copy;2023 <span className="font-bold">Motive Toy</span> || All Right Reserved</div>
                    <div className="text-[#333E48] flex gap-4">
                        <p><Link to='/terms'>Terms</Link></p>
                        <p>Privacy Policy</p>
                        <p>Help</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;