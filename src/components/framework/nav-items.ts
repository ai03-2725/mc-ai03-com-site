export type NavEntry = {
  type: "LEAF";
  title: string;
  url: string;
} | {
  type: "LIST";
  title: string;
  children: NavEntry[];
} | {
  type: "DIVIDER";
}

// For desktop, truncate at 4 first entries at top + rest as a dropdown under "Other"
export const NAV_ENTRIES_ROOT: NavEntry = {

  type: "LIST",
  title: "",
  children: [

    // Home
    {
      type: "LEAF",
      title: "Home",
      url: "/"
    },

    // Features
    {
      type: "LEAF",
      title: "Features",
      url: "/features"
    },

    // Invites
    {
      type: "LEAF",
      title: "Invites",
      url: "/invites"
    },

    // Rules
    {
      type: "LEAF",
      title: "Rules",
      url: "/rules"
    },

    // Map
    {
      type: "LEAF",
      title: "Map",
      url: "https://mc-dynmap.ai03.com/?worldname=mc2&mapname=flat&zoom=4&x=0&y=64&z=0"
    },

    // Back
    {
      type: "LEAF",
      title: "Back to ai03.com",
      url: "https://ai03.com"
    },

  ]
}