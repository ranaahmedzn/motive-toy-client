import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import LoadingPage from "../LoadingPage/LoadingPage";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import { HiThumbUp } from "react-icons/hi";
import { BsFillPinAngleFill, BsFillCursorFill } from "react-icons/bs";
import { Helmet } from "react-helmet-async";

const BlogPage = () => {
    const { loading } = useContext(AuthContext)

    if (loading) {
        return <LoadingPage />
    }
    return (
        <div>
            <Helmet>
                <title>Motive Toy | Blog</title>
            </Helmet>
            <div className="lg:py-8">
                <Header></Header>
            </div>
            <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-3 mb-10">
                {/* blogs section  */}
                <section className="col-span-2 w-full flex flex-col items-center px-3">
                    <article className="p-6 flex flex-col my-4 border shadow rounded-lg overflow-hidden">
                        {/* <!-- Article Image --> */}

                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center mb-5">
                                <img src="https://i.ibb.co/QHfKVfL/profile2.jpg" alt="" className="h-[50px] rounded-full" />
                                <div>
                                    <h4 className="text-2xl font-bold">Tom John</h4>
                                    <p>November 8, 2022</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <span className="bg-[#f0f0f0] p-2 rounded-full text-xl">
                                    <HiThumbUp />
                                </span>
                                <span className="bg-[#f0f0f0] p-2 rounded-full">
                                    <BsFillPinAngleFill/>
                                </span>
                            </div>
                        </div>

                        <div className="bg-white flex flex-col justify-start space-y-5">
                            <h2 className="text-4xl font-semibold">
                                What is an access token and refresh token? How do they work and where should we store them on the client-side?
                            </h2>

                            <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=2" className="rounded-lg h-[300px]" />

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsa dolores saepe id pariatur et architecto sequi nihil iste voluptates, quasi, ea, necessitatibus accusantium voluptate? Similique a sapiente debitis fugit dicta quis. Tempore cupiditate, architecto voluptate consectetur hic facilis perspiciatis ipsum quos ipsam natus ex ullam dolore? Blanditiis, quibusdam tenetur hic rerum, aperiam placeat eum sit quisquam maxime quas odio reiciendis! Fugit amet inventore necessitatibus distinctio voluptates debitis voluptatibus aliquid. Ipsa ullam asperiores temporibus debitis!
                            </p>
                        </div>
                    </article>

                    <article className="p-6 flex flex-col my-4 border shadow rounded-lg overflow-hidden">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center mb-5">
                                <img src="https://i.ibb.co/QHfKVfL/profile2.jpg" alt="" className="h-[50px] rounded-full" />
                                <div>
                                    <h4 className="text-2xl font-bold">Tom John</h4>
                                    <p>November 8, 2022</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <span className="bg-[#f0f0f0] p-2 rounded-full text-xl">
                                    <HiThumbUp />
                                </span>
                                <span className="bg-[#f0f0f0] p-2 rounded-full">
                                    <BsFillPinAngleFill/>
                                </span>
                            </div>
                        </div>

                        <div className="bg-white flex flex-col justify-start space-y-5">
                            <h2 className="text-4xl font-semibold">
                                Compare SQL and NoSQL databases?
                            </h2>

                            <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=3" className="rounded-lg h-[300px]" />

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsa dolores saepe id pariatur et architecto sequi nihil iste voluptates, quasi, ea, necessitatibus accusantium voluptate? Similique a sapiente debitis fugit dicta quis. Tempore cupiditate, architecto voluptate consectetur hic facilis perspiciatis ipsum quos ipsam natus ex ullam dolore? Blanditiis, quibusdam tenetur hic rerum, aperiam placeat eum sit quisquam maxime quas odio reiciendis! Fugit amet inventore necessitatibus distinctio voluptates debitis voluptatibus aliquid. Ipsa ullam asperiores temporibus debitis!
                            </p>
                        </div>
                    </article>
                    <article className="p-6 flex flex-col my-4 border shadow rounded-lg overflow-hidden">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center mb-5">
                                <img src="https://i.ibb.co/QHfKVfL/profile2.jpg" alt="" className="h-[50px] rounded-full" />
                                <div>
                                    <h4 className="text-2xl font-bold">Tom John</h4>
                                    <p>November 8, 2022</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <span className="bg-[#f0f0f0] p-2 rounded-full text-xl">
                                    <HiThumbUp />
                                </span>
                                <span className="bg-[#f0f0f0] p-2 rounded-full">
                                    <BsFillPinAngleFill/>
                                </span>
                            </div>
                        </div>

                        <div className="bg-white flex flex-col justify-start space-y-5">
                            <h2 className="text-4xl font-semibold">
                                What is express JS? What is Nest JS
                            </h2>

                            <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=3" className="rounded-lg h-[300px]" />

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsa dolores saepe id pariatur et architecto sequi nihil iste voluptates, quasi, ea, necessitatibus accusantium voluptate? Similique a sapiente debitis fugit dicta quis. Tempore cupiditate, architecto voluptate consectetur hic facilis perspiciatis ipsum quos ipsam natus ex ullam dolore? Blanditiis, quibusdam tenetur hic rerum, aperiam placeat eum sit quisquam maxime quas odio reiciendis! Fugit amet inventore necessitatibus distinctio voluptates debitis voluptatibus aliquid. Ipsa ullam asperiores temporibus debitis!
                            </p>
                        </div>
                    </article>

                    <article className="p-6 flex flex-col my-4 border shadow rounded-lg overflow-hidden">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center mb-5">
                                <img src="https://i.ibb.co/QHfKVfL/profile2.jpg" alt="" className="h-[50px] rounded-full" />
                                <div>
                                    <h4 className="text-2xl font-bold">Tom John</h4>
                                    <p>November 8, 2022</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <span className="bg-[#f0f0f0] p-2 rounded-full text-xl">
                                    <HiThumbUp />
                                </span>
                                <span className="bg-[#f0f0f0] p-2 rounded-full">
                                    <BsFillPinAngleFill/>
                                </span>
                            </div>
                        </div>

                        <div className="bg-white flex flex-col justify-start space-y-5">
                            <h2 className="text-4xl font-semibold">
                                What is MongoDB aggregate and how does it work?
                            </h2>

                            <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=3" className="rounded-lg h-[300px]" />

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsa dolores saepe id pariatur et architecto sequi nihil iste voluptates, quasi, ea, necessitatibus accusantium voluptate? Similique a sapiente debitis fugit dicta quis. Tempore cupiditate, architecto voluptate consectetur hic facilis perspiciatis ipsum quos ipsam natus ex ullam dolore? Blanditiis, quibusdam tenetur hic rerum, aperiam placeat eum sit quisquam maxime quas odio reiciendis! Fugit amet inventore necessitatibus distinctio voluptates debitis voluptatibus aliquid. Ipsa ullam asperiores temporibus debitis!
                            </p>
                        </div>
                    </article>
                </section>

                {/* <!-- Sidebar Section --> */}
                <div className="w-full flex flex-col items-center px-3 sticky top-0 z-50">
                    <div className="w-full bg-white  flex flex-col my-4 p-6 border rounded-lg">
                        <p className="text-xl font-semibold pb-5">More Blogs</p>
                        <div className="grid grid-cols-3 gap-3">
                            <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=1" />
                            <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=2" />
                            <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=3" />
                            <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=4" />
                            <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=5" />
                            <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=6" />
                            <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=7" />
                            <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=8" />
                            <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=9" />
                        </div>
                        <a href="#" className="w-full bg-[#0787EA] text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6">
                            Follow us for more
                        </a>
                    </div>
                    <div className="w-full bg-white flex flex-col my-4 p-6 border rounded-lg">
                        <p className="text-xl font-semibold pb-5">About Us</p>
                        <p className="pb-2">Step into a world of toys that captivate, inspire, and ignite the imagination. Our website is a haven for all toy enthusiasts, offering a carefully curated selection of timeless classics and cutting-edge treasures. From cuddly companions to brain-teasing puzzles, each toy holds the potential for endless hours of joy and discovery. Embrace the magic of play and explore a universe where dreams come true, one toy at a time.</p>
                        <button className="w-full bg-[#0787EA] text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex gap-2 items-center justify-center px-2 py-3 mt-4">
                            <BsFillCursorFill className="text-xl" />
                            <span>Subscribe</span>
                        </button>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BlogPage;