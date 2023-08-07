import Marquee from "react-fast-marquee";
import './PhotoGallery.css'

const PhotoGallery = () => {

    return (
        <div className="max-w-7xl h-full px-4 lg:px-10 mx-auto mt-8 py-10">
            <div className="text-center mb-8 w-full lg:w-1/2 mx-auto space-y-4">
                <h3 className="font-bold text-3xl text-[#333E48]">Explore Our Latest Toys</h3>
                <p className="text-gray-600">Embark on an Imaginative Journey, Witness the Thrill of Sports Toys through a Gallery of Dynamic and Inspiring Images.</p>
            </div>

            <Marquee
                speed={150}
                pauseOnHover={true}
            >
                <div className="gallery-container flex gap-5">
                    <img src="https://i.ibb.co/qySRcdn/Roller-Skates.png" alt="" />
                    <img src="https://i.ibb.co/hg2LxQb/Baseball-Set.jpg" alt="" />
                    <img src="https://i.ibb.co/zSHQ7Sz/Mini-Football.png" alt="" />
                    <img src="https://i.ibb.co/2st7mpd/JumpRope.png" alt="" />
                    <img src="https://i.ibb.co/VBmLpJX/Sreadboard.png" alt="" />
                    <img src="https://i.ibb.co/Fxg7jXS/Mini-Soccer-Ball.jpg" alt="" />
                    <img src="https://i.ibb.co/tMn60BS/Dartboard-Set.jpg" alt="" />
                    <img src="https://i.ibb.co/Lds4NW4/Hoccy-Stick.png" alt="" />
                    <img src="https://i.ibb.co/b21xHLr/Volleyball-Set.png" alt="" />
                </div>
            </Marquee>
        </div>
    );
};

export default PhotoGallery;