// Image assets. Some are exported directly from the Figma file and are
// temporary URLs that expire ~7 days after export; swap for a hosted copy
// before shipping to production:
//   heroBackground -> hero/night crowd shot used behind the hero + ministers section (hosted locally)
//   videoThumbnail -> small looping clip preview next to the event details
//   logo           -> Holy Ghost Convention crest, used in the nav bar
//   speakerPhoto   -> placeholder minister portrait (same image reused in the source design)
export const ASSETS = {
  heroBackground: "/images/hero-background.png",
  videoThumbnail:
    "https://images.unsplash.com/photo-1760367121608-79219f1c9d2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  logo: "https://www.figma.com/api/mcp/asset/f9d81f94-ddf1-49a7-bc23-00ba568a6507",
  speakerPhoto: "https://www.figma.com/api/mcp/asset/53443a4e-b1c9-4ea3-81ff-ee0da174d21b",
  clockIcon: "https://www.figma.com/api/mcp/asset/7216e716-30d1-4d33-ac67-4dd8352a358e",
  arrowIcon: "https://www.figma.com/api/mcp/asset/e3e3cb9f-e918-4084-b8ad-df44a153f622",
};
