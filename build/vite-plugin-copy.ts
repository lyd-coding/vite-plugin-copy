import { Plugin } from "vite";
import path from "path";
import fse from "fs-extra";
import { globSync } from "glob";

export type CopyType = {
  src: string;
  target: string;
};

function VitePluginCopy(copyList: CopyType[]): Plugin {
  return {
    name: "vite-plugin-copy",
    buildStart() {
      copyList.forEach(({ src, target }: CopyType) => {
        // console.log(path.relative('root',target));
        const files = globSync(src);
        // console.log(files);
        const _src = "node_modules\\cesium\\Build\\Cesium\\Cesium.js";
        console.log(path.normalize(_src), path.relative("root", target));

        // files.forEach((file) => {
          fse
            .copySync(path.relative("root", target), path.normalize(_src))
        // });
      });
    },
  };
}

export default VitePluginCopy;
