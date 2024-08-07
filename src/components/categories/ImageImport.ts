import CinnamonImage from '../../assets/cinnamon-rolls.png';
import GlazedDoughnutImage from '../../assets/glazed-doughnut.png';
import BunsRaisinsImage from '../../assets/buns-with-raisins.png';
import SausageImage from '../../assets/sausage-rolls.png';
import SpringrollImage from "../../assets/spring-rolls.png";
import IcedDoughtnutImage from "../../assets/iced-doughnut.png";
import RaisinBreadImage from "../../assets/raisin-bread.png";
import DoughtnutsImage from "../../assets/doughtnuts.png";
import ButterCookiesImage from "../../assets/butter-cookies.png";
import CroissantImage from "../../assets/croissant.png"


export type ImageImport = {
    default: string;
};

export const ImageMap: Record<string, string> = {
    "sausage-rolls.png": SausageImage as string,
    "cinnamon-rolls.png": CinnamonImage as string,
    "buns-with-raisins.png": BunsRaisinsImage as string,
    "glazed-doughnut.png": GlazedDoughnutImage as string,
    "spring-rolls.png": SpringrollImage as string,
    "iced-doughnut.png": IcedDoughtnutImage as string,
    "raisin-bread.png" : RaisinBreadImage as string,
    "doughtnuts.png" : DoughtnutsImage as string,
    "butter-cookies.png" : ButterCookiesImage as string,
    "croissant.png" : CroissantImage as string
};