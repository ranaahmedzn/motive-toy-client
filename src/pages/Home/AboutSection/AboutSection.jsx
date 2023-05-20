
const AboutSection = () => {
    return (
        <div className="max-w-7xl mx-auto px-10 py-10 flex gap-12 justify-center items-center mb-16">
            <img
            data-aos="fade"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="linear" className="rounded-lg w-1/2" src="https://img.freepik.com/free-photo/excited-little-boy-standing-showing-okay-gesture_171337-16369.jpg?w=740&t=st=1684596543~exp=1684597143~hmac=1f398ca9f6bcac3ded374bde92bcdc8889cdc9b701ba9f592ace281157b66042" alt="" />

            <div className="w-1/2">
                <p className="font-bold text-lg text-[#333E48]">
                    About Us
                </p>
                <h3 className="text-5xl leading-[55px] font-bold text-[#333E48] mb-3">Fueling Active Fun <br /> and Imaginative Play</h3>
                <p className="text-gray-600 mb-5">Experience the power of active fun and imaginative play with Motive Toy! We are passionate about providing an exceptional range of sports toys that ignite your imagination and get you moving.</p>
                <p className="text-gray-600 mb-5">
                    At Motive Toy, we believe in the transformative power of play. Our carefully curated collection of sports toys offers a world of exciting possibilities, from basketball hoops to soccer sets and more. Let Motive Toy be your companion in unleashing the joy of play.
                </p>
                <button className="primary-btn">Add Toy</button>
            </div>
        </div>
    );
};

export default AboutSection;