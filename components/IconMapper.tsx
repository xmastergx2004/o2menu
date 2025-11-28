import {
    FaMugHot,
    FaGlassWater,
    FaIceCream,
    FaCookie,
    FaLeaf,
    FaBreadSlice,
    FaWineGlass
} from "react-icons/fa6";
import { BiSolidCoffeeBean } from "react-icons/bi";
import { GiCoffeeCup, GiSodaCan } from "react-icons/gi";

export const iconMap: { [key: string]: React.ReactNode } = {
    "FaMugHot": <FaMugHot />,
    "FaGlassWater": <FaGlassWater />,
    "FaIceCream": <FaIceCream />,
    "FaCookie": <FaCookie />,
    "FaLeaf": <FaLeaf />,
    "FaBreadSlice": <FaBreadSlice />,
    "FaWineGlass": <FaWineGlass />,
    "BiSolidCoffeeBean": <BiSolidCoffeeBean />,
    "GiCoffeeCup": <GiCoffeeCup />,
    "GiSodaCan": <GiSodaCan />
};

export default function IconMapper({ iconName }: { iconName: string }) {
    return <>{iconMap[iconName] || null}</>;
}
