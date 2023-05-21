import Marquee from "react-fast-marquee";

const PhotoGallery = () => {

    return (
        <div className="max-w-7xl h-full px-4 lg:px-10 mx-auto lg:pb-10 lg:my-20">
            <div className="text-center mb-8 w-full lg:w-1/2 mx-auto space-y-4">
                <h3 className="font-bold text-3xl text-[#333E48]">Latest Toy Images</h3>
                <p className="text-gray-600">Embark on an Imaginative Journey, Witness the Thrill of Sports Toys through a Gallery of Dynamic and Inspiring Images.</p>
            </div>

            <Marquee
                speed={100}
                pauseOnHover={true}
            >
                <div className="flex gap-5">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgk3k4SxDjqszV9dGHs7nI5VpefevwwSkAeQ&usqp=CAU" alt="" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgk3k4SxDjqszV9dGHs7nI5VpefevwwSkAeQ&usqp=CAU" alt="" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgk3k4SxDjqszV9dGHs7nI5VpefevwwSkAeQ&usqp=CAU" alt="" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgk3k4SxDjqszV9dGHs7nI5VpefevwwSkAeQ&usqp=CAU" alt="" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgk3k4SxDjqszV9dGHs7nI5VpefevwwSkAeQ&usqp=CAU" alt="" />
                </div>
            </Marquee>
        </div>
    );
};

export default PhotoGallery;