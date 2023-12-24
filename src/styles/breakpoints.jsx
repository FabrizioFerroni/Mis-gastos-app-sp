const sizes = {
  mobile: "576px",
  tablet: "768px",
  laptop: "992px",
  desktop: "1200px",
  widescreen: "1400px",
  fullhd: "1600px",
};

export const Device = {
  mobile: `(min-width: ${sizes.mobile})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`,
  widescreen: `(min-width: ${sizes.widescreen})`,
  fullhd: `(min-width: ${sizes.fullhd})`,
};
