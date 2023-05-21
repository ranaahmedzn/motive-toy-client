import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import LoadingPage from "../LoadingPage/LoadingPage";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import { HiThumbUp } from "react-icons/hi";
import { BsFillPinAngleFill, BsFillCursorFill } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

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
            <div className="lg:py-8 overflow-hidden">
                <Header></Header>
            </div>
            <div className="max-w-7xl mx-auto py-10 lg:py-0 px-4 lg:px-10 grid lg:gap-6 grid-cols-1 lg:grid-cols-3 mb-10">
                {/* blogs section  */}
                <section className="col-span-2 mb-6 w-full flex flex-col items-center">
                    <article className="p-6 flex flex-col my-4 border shadow rounded-lg overflow-hidden">
                        {/* <!-- Article Image --> */}

                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center mb-5">
                                <img src="https://i.ibb.co/QHfKVfL/profile2.jpg" alt="" className="h-[50px] rounded-full" />
                                <div>
                                    <h4 className="text-2xl font-bold text-[#333E48]">Mr. Smith</h4>
                                    <p>November 8, 2022</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <span className="bg-[#f0f0f0] cursor-pointer p-2 rounded-full text-xl">
                                    <HiThumbUp />
                                </span>
                                <span className="bg-[#f0f0f0] cursor-pointer p-2 rounded-full">
                                    <BsFillPinAngleFill/>
                                </span>
                            </div>
                        </div>

                        <div className="bg-white flex flex-col justify-start space-y-5">
                            <h2 className="text-4xl font-semibold text-[#333E48]">
                                What is an access token and refresh token? How do they work and where should we store them on the client-side?
                            </h2>

                            <img className="rounded-lg h-[320px]" src="https://img.freepik.com/free-vector/isometric-devops-illustration_52683-84175.jpg?w=740&t=st=1684651315~exp=1684651915~hmac=9ae510a4b1b81ba23ef6ac211284b12622569be2a67d1fd1e4e9e697b026b74d" />

                            <p className="text-gray-700">
                            Access token is a secure string that a client uses to access protected resources. An instance issues access tokens to clients that have a valid authorization grant.  The access token typically has a limited lifespan and is used to authenticate subsequent API requests to the server. It contains information like the user&apos;s identity, scope of access, expiration time etc.</p>
                            <p className="text-gray-700">Refresh Token is a credential which is used by a client to obtain new access tokens without requiring additional user authorization. Refresh token is a long-lived credential also issued by the authentication server during the initial authentication process. </p>
                            <p>Typically, Access token is stored in memory or in a client-side storage mechanism, such as a browser&apos;s local storage, session storage or a mobile app&apos;s secure storage. Refresh token can be stored as an HTTP-only secure cookie. It should be stored securely to minimize the risk of unauthorized access.</p>
                        </div>
                    </article>

                    <article className="p-6 flex flex-col my-4 border shadow rounded-lg overflow-hidden">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center mb-5">
                                <img src="https://i.ibb.co/QHfKVfL/profile2.jpg" alt="" className="h-[50px] rounded-full" />
                                <div>
                                    <h4 className="text-2xl font-bold text-[#333E48]">Watson</h4>
                                    <p>February 16, 2023</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <span className="bg-[#f0f0f0] cursor-pointer p-2 rounded-full text-xl">
                                    <HiThumbUp />
                                </span>
                                <span className="bg-[#f0f0f0] cursor-pointer p-2 rounded-full">
                                    <BsFillPinAngleFill/>
                                </span>
                            </div>
                        </div>

                        <div className="bg-white flex flex-col justify-start space-y-5">
                            <h2 className="text-4xl font-semibold text-[#333E48]">
                                Compare SQL and NoSQL databases?
                            </h2>

                            <img src="https://img.freepik.com/free-vector/gradient-sql-illustration_23-2149247491.jpg?w=826&t=st=1684651557~exp=1684652157~hmac=7c9abc0221708fe31489f26bfdc0f549da67829471b2dd1e9add6d32d05e75f6" className="rounded-lg h-[300px]" />

                            <p className="text-gray-700">SQL databases define and manipulate data based on the structured query language (SQL) or relational data model. They use tables with predefined schemas, where data is organized in rows and columns.  SQL requires us to use predefined schemas to determine the structure of our data before we work with it. Also, all of our data must follow the same structure.</p>
                            <p className="text-gray-700">A NoSQL database has a dynamic schema for unstructured data. In the NoSQL databases Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based, or organized as a key-value store. NoSQL databases provide a more flexible and dynamic data model. This flexibility means that documents can be created without having a defined structure first.</p>
                        </div>
                    </article>
                    <article className="p-6 flex flex-col my-4 border shadow rounded-lg overflow-hidden">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center mb-5">
                                <img src="https://i.ibb.co/QHfKVfL/profile2.jpg" alt="" className="h-[50px] rounded-full" />
                                <div>
                                    <h4 className="text-2xl font-bold text-[#333E48]">Tom John</h4>
                                    <p>May 2, 2023</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <span className="bg-[#f0f0f0] cursor-pointer p-2 rounded-full text-xl">
                                    <HiThumbUp />
                                </span>
                                <span className="bg-[#f0f0f0] cursor-pointer p-2 rounded-full">
                                    <BsFillPinAngleFill/>
                                </span>
                            </div>
                        </div>

                        <div className="bg-white flex flex-col justify-start space-y-5">
                            <h2 className="text-4xl font-semibold text-[#333E48]">
                                What is express JS? And What is Nest JS?
                            </h2>

                            <img src="https://img.freepik.com/premium-photo/high-angle-view-various-computer-equipment-with-programming-code-screens-table-dark-room-cyber-security-concept-copy-space_236854-23137.jpg" className="rounded-lg h-[300px]" />

                            <p className="text-gray-700">Express is a Node.js web application framework that provides a wide range of functionality for constructing web and mobile applications. Express.js focuses on providing a thin layer of features and middleware to handle routing, request handling, and response generation. Express.js is a good choice for smaller projects or when we require the maximum flexibility.</p>
                            <p className="text-gray-700">NestJS is an open-source Node.js framework for building server-side applications. It is based on TypeScript and JavaScript. It combines elements from various frameworks and design patterns, including Express.js, Angular, and TypeScript, to provide a robust and structured development experience. It has a simple design with 3 main components: controllers, modules and providers.</p>
                        </div>
                    </article>

                    <article className="p-6 flex flex-col my-4 border shadow rounded-lg overflow-hidden">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center mb-5">
                                <img src="https://i.ibb.co/QHfKVfL/profile2.jpg" alt="" className="h-[50px] rounded-full" />
                                <div>
                                    <h4 className="text-2xl font-bold text-[#333E48]">Herbert Spencer</h4>
                                    <p>January 25, 2023</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <span className="bg-[#f0f0f0] cursor-pointer p-2 rounded-full text-xl">
                                    <HiThumbUp />
                                </span>
                                <span className="bg-[#f0f0f0] cursor-pointer p-2 rounded-full">
                                    <BsFillPinAngleFill/>
                                </span>
                            </div>
                        </div>

                        <div className="bg-white flex flex-col justify-start space-y-5">
                            <h2 className="text-4xl font-semibold text-[#333E48]">
                                What is MongoDB aggregate and how does it work?
                            </h2>

                            <img src="https://images.unsplash.com/photo-1658204238967-3a81a063d162?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=862&q=80" className="rounded-lg h-[300px]" />

                            <p className="text-gray-700">In MongoDB the aggregation operations process the data records and return computed results. It collects values from various documents and groups them together and then performs different types of operations on that grouped data like arithmetic operations, conditional expressions, string operations, array operations, and more. The aggregate function works in four stages like Matching stage, Projection stage, Aggregation stage, and The final Output stage. It provides a wide range of powerful operators and expressions that can be used within each stage to manipulate and transform data. We can perform complex data analysis, grouping, filtering, sorting, and transformation operations directly within the database by using the MongoDB aggregate function and its stages.</p>
                        </div>
                    </article>
                </section>

                {/* <!-- Sidebar Section --> */}
                <div className="w-full flex flex-col items-center sticky top-0 z-50">
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
                        <Link className="w-full bg-[#0787EA] text-white font-bold text-sm uppercase rounded hover:bg-blue-600 flex items-center justify-center px-2 py-3 mt-6">
                            Follow us for more
                        </Link>
                    </div>
                    <div className="w-full bg-white flex flex-col my-4 p-6 border rounded-lg">
                        <p className="text-xl font-semibold pb-5">About Us</p>
                        <p className="pb-2">Step into a world of toys that captivate, inspire, and ignite the imagination. Our website is a haven for all toy enthusiasts, offering a carefully curated selection of timeless classics and cutting-edge treasures. From cuddly companions to brain-teasing puzzles, each toy holds the potential for endless hours of joy and discovery. Embrace the magic of play and explore a universe where dreams come true, one toy at a time.</p>
                        <button className="w-full bg-[#0787EA] text-white font-bold text-sm uppercase rounded hover:bg-blue-600 flex gap-2 items-center justify-center px-2 py-3 mt-4">
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