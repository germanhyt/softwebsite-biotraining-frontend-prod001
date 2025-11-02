import { i as isESMImportedImage, b as baseService } from './generic_oAZlwVM_.mjs';
import './astro/server_Bg0Qo1bg.mjs';
import './index_DcV6kM1H.mjs';
import 'deterministic-object-hash';

const qualityTable = {
  low: 25,
  mid: 50,
  high: 80,
  max: 100
};
function sharedValidateOptions(options, serviceConfig, mode) {
  const vercelImageOptions = serviceConfig;
  const configuredWidths = vercelImageOptions.sizes.sort((a, b) => a - b);
  if (!options.width) {
    const src = options.src;
    if (isESMImportedImage(src)) {
      const nearestWidth = configuredWidths.reduce((prev, curr) => {
        return Math.abs(curr - src.width) < Math.abs(prev - src.width) ? curr : prev;
      });
      options.inputtedWidth = src.width;
      options.width = nearestWidth;
    } else {
      throw new Error(`Missing \`width\` parameter for remote image ${options.src}`);
    }
  } else {
    if (!configuredWidths.includes(options.width)) {
      const nearestWidth = configuredWidths.reduce((prev, curr) => {
        return Math.abs(curr - options.width) < Math.abs(prev - options.width) ? curr : prev;
      });
      options.inputtedWidth = options.width;
      options.width = nearestWidth;
    }
  }
  if (options.widths) {
    options.widths = options.widths.filter((w) => configuredWidths.includes(w));
    if (options.widths.length === 0) {
      options.widths = [options.width];
    }
  }
  if (options.quality && typeof options.quality === "string") {
    options.quality = options.quality in qualityTable ? qualityTable[options.quality] : void 0;
  }
  if (!options.quality) {
    options.quality = 100;
  }
  return options;
}

const service = {
  ...baseService,
  validateOptions: (options, serviceOptions) => sharedValidateOptions(options, serviceOptions.service.config),
  getHTMLAttributes(options) {
    const { inputtedWidth, ...props } = options;
    if (inputtedWidth) {
      props.width = inputtedWidth;
    }
    let targetWidth = props.width;
    let targetHeight = props.height;
    if (isESMImportedImage(props.src)) {
      const aspectRatio = props.src.width / props.src.height;
      if (targetHeight && !targetWidth) {
        targetWidth = Math.round(targetHeight * aspectRatio);
      } else if (targetWidth && !targetHeight) {
        targetHeight = Math.round(targetWidth / aspectRatio);
      } else if (!targetWidth && !targetHeight) {
        targetWidth = props.src.width;
        targetHeight = props.src.height;
      }
    }
    const { src, width, height, format, quality, densities, widths, formats, ...attributes } = options;
    return {
      ...attributes,
      width: targetWidth,
      height: targetHeight,
      loading: attributes.loading ?? "lazy",
      decoding: attributes.decoding ?? "async"
    };
  },
  getURL(options) {
    if (isESMImportedImage(options.src) && options.src.format === "svg") {
      return options.src.src;
    }
    const fileSrc = isESMImportedImage(options.src) ? removeLeadingForwardSlash(options.src.src) : options.src;
    const searchParams = new URLSearchParams();
    searchParams.append("url", fileSrc);
    options.width && searchParams.append("w", options.width.toString());
    options.quality && searchParams.append("q", options.quality.toString());
    return "/_vercel/image?" + searchParams;
  },
  // Adapted from the base service's getSrcSet, but always returning widths that are valid for Vercel,
  // meaning they're in the list of configured sizes. See sharedValidateOptions in shared.ts for more info.
  getSrcSet(options, imageConfig) {
    const { inputtedWidth, densities, widths, ...props } = options;
    if (inputtedWidth) {
      props.width = inputtedWidth;
    }
    let targetWidth = props.width;
    let targetHeight = props.height;
    if (isESMImportedImage(props.src)) {
      const aspectRatio = props.src.width / props.src.height;
      if (targetHeight && !targetWidth) {
        targetWidth = Math.round(targetHeight * aspectRatio);
      } else if (targetWidth && !targetHeight) {
        targetHeight = Math.round(targetWidth / aspectRatio);
      } else if (!targetWidth && !targetHeight) {
        targetWidth = props.src.width;
        targetHeight = props.src.height;
      }
    }
    const {
      width: transformWidth,
      height: transformHeight,
      ...transformWithoutDimensions
    } = options;
    const vercelConfig = imageConfig.service.config;
    const configuredWidths = (vercelConfig.sizes ?? []).sort((a, b) => a - b);
    let allWidths = [];
    if (densities) {
      const densityValues = densities.map((density) => {
        if (typeof density === "number") {
          return density;
        } else {
          return parseFloat(density);
        }
      });
      const calculatedWidths = densityValues.sort((a, b) => a - b).map((density) => Math.round(targetWidth * density));
      const sortedDensityValues = densityValues.sort((a, b) => a - b);
      allWidths = calculatedWidths.map((width, index) => {
        if (configuredWidths.includes(width)) {
          return {
            width,
            descriptor: `${sortedDensityValues[index]}x`
          };
        }
        const nearestWidth = configuredWidths.reduce((prev, curr) => {
          return Math.abs(curr - width) < Math.abs(prev - width) ? curr : prev;
        });
        return {
          width: nearestWidth,
          descriptor: `${sortedDensityValues[index]}x`
        };
      });
      const widthToDescriptors = /* @__PURE__ */ new Map();
      for (const { width, descriptor } of allWidths) {
        if (!widthToDescriptors.has(width)) {
          widthToDescriptors.set(width, []);
        }
        widthToDescriptors.get(width).push(descriptor);
      }
      allWidths = Array.from(widthToDescriptors.entries()).map(([width, descriptors]) => ({
        width,
        descriptor: descriptors[0]
      }));
    } else if (widths?.length) {
      allWidths = widths.map((width) => ({
        width,
        descriptor: `${width}w`
      }));
    }
    return allWidths.map(({ width, descriptor }) => {
      const transform = { ...transformWithoutDimensions, width };
      return {
        transform,
        descriptor
      };
    });
  }
};
function removeLeadingForwardSlash(path) {
  return path.startsWith("/") ? path.substring(1) : path;
}
var build_service_default = service;

export { build_service_default as default };
