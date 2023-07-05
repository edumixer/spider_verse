import { StaticImageData } from "next/image";

import ImageSpiderWoman65 from "@public/spiders/spider-woman-65.png";
import ImageSpDr14512 from "@public/spiders/spider-dr-14512.png";
import ImageSpiderHam8311 from "@public/spiders/spider-ham-8311.png";
import ImageSpiderMan1610 from "@public/spiders/spider-man-1610.png";
import ImageSpiderMan616 from "@public/spiders/spider-man-616.png";
import ImageSpiderMan90214 from "@public/spiders/spider-man-90214.png";
import ImageSpiderMan928 from "@public/spiders/spider-man-928.png";
import ImageLadyDeadpool3010 from "@public/deadpools/deadpool-lady-3010.png";
import ImageDeadpool616 from "@public/deadpools/deadpool-616.png";
import ImageDeadpool1610 from "@public/deadpools/deadpool-1610.png";
import ImageVenompool from "@public/deadpools/deadpool-venompool.png";

const defaultImage: StaticImageData = ImageSpiderMan616;

const heroesImage: Record<string, StaticImageData> = {
  "spider-man-616": ImageSpiderMan616,
  "spider-woman-65": ImageSpiderWoman65,
  "spider-man-1610": ImageSpiderMan1610,
  "spider-dr-14512": ImageSpDr14512,
  "spider-ham-8311": ImageSpiderHam8311,
  "spider-man-90214": ImageSpiderMan90214,
  "spider-man-928": ImageSpiderMan928,

  "deadpool-lady-3010": ImageLadyDeadpool3010,
  "deadpool-616": ImageDeadpool616,
  "deadpool-1610": ImageDeadpool1610,
  "deadpool-venompool": ImageVenompool,
};

export { heroesImage, defaultImage };