import CinnamonImage from '../../../assets/cinnamon-rolls.png';
import DoughnutImage from '../../../assets/doughnut.png';
import BunsRaisinsImage from '../../../assets/buns-with-raisins.png';
import SausageImage from '../../../assets/sausage-rolls.png';


export type ImageImport = {
    default: string;
};

export const ImageMap: Record<string, string> = {
    "sausage-rolls.png": SausageImage as string,
    "cinnamon-rolls.png": CinnamonImage as string,
    "buns-with-raisins.png": BunsRaisinsImage as string,
    "doughnut.png": DoughnutImage as string, 
};