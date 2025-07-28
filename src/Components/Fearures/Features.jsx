import { AiFillCheckCircle } from "react-icons/ai";


const Features = ({feature}) => {
    
    return (
        <div>
            <p className="flex items-center"><AiFillCheckCircle className="text-green-500"></AiFillCheckCircle>{feature}</p>
        </div>
    );
};

export default Features;