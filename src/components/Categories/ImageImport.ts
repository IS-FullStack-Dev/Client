import SausageRollImage from "../../assets/sausage-roll.png";
import CinnamonRollsImage from "../../assets/cinnamon-rolls.png";
import BunsWithRaisinsImage from "../../assets/Buns-with-Raisins.png";
import SausageDoughImage from "../../assets/sausages-dough-isolated.png";

export type ImageImport = {
  default: string;
};

export const ImageMap: Record<string, string> = {
  "sausage-roll.png": SausageRollImage as string,
  "cinnamon-rolls.png": CinnamonRollsImage as string,
  "Buns-with-Raisins.png": BunsWithRaisinsImage as string,
  "sausages-dough-isolated.png": SausageDoughImage as string,
};
