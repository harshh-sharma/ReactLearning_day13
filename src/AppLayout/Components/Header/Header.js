import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartSlice from "../../../Slices/CartSlice";
const Header = () => {
    const item = useSelector((store) => store.cart.items);
    console.log(item);
    return(
        <div className="w-full h-70px bg-gray-900 flex items-center justify-around py-5 fixed top-0 left-0 z-50">
                <span className="text-orange-500 text-xl font-bold ">Logo</span>
                <ul className=" hidden md:flex text-orange-500 items-center justify-evenly">
                    <li className="px-10 text-lg md:text-xl  font-bold"><Link to='/'>Home</Link></li>
                    <li className="px-10 text-lg md:text-xl font-bold"><Link to='/about'>About us</Link></li>
                    <li className="px-10 text-lg md:text-xl  font-bold"><Link to='/contact'>Contact us</Link></li>
                    <li className="px-10 text-lg md:text-xl  font-bold"><Link to='/cart'>Cart (items {item.length})</Link></li>
                </ul>
                <GiHamburgerMenu className="flex md:hidden text-orange-500"/>
     </div>
    );
}

export default Header ;