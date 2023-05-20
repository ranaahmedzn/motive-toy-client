import { ProgressBar } from "react-loader-spinner";

const LoadingPage = () => {
    return (
        <div className="w-full h-screen bg-white flex justify-center items-center">
            <ProgressBar
                height="80"
                width="80"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor='#333E48'
                barColor='#0787EA'
            />
        </div>
    );
};

export default LoadingPage;