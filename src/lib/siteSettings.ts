import { getPayload } from "payload";

import type { SiteSetting } from "@/payload-types";
import config from "@/payload.config";

export type SiteSettingsView = {
  siteName: string;
  siteDescription: string;
  defaultSeo: {
    title: string;
    description: string;
    image: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  socialLinks: {
    facebook: string;
    linkedin: string;
    instagram: string;
  };
  footer: {
    description: string;
    newsletterTitle: string;
    newsletterDescription: string;
    copyrightText: string;
  };
};

const fallbackSiteSettings: SiteSettingsView = {
  siteName: "Zenticsys",
  siteDescription:
    "Zenticsys builds innovative software, cloud, and data solutions to help businesses scale with confidence.",
  defaultSeo: {
    title: "Zenticsys | Modern Software Solutions",
    description:
      "Zenticsys builds innovative software, cloud, and data solutions to help businesses scale with confidence.",
    image: "",
  },
  contact: {
    email: "",
    phone: "",
    address: "",
  },
  socialLinks: {
    facebook: "https://www.facebook.com/zenticsys/",
    linkedin: "https://www.linkedin.com/company/zenticsys/",
    instagram: "https://www.instagram.com/zentic.sys",
  },
  footer: {
    description:
      "We are a software development company dedicated to creating innovative solutions that transform businesses and drive digital success.",
    newsletterTitle: "Newsletter",
    newsletterDescription: "Stay updated with our latest insights and news.",
    copyrightText: "(c) 2024 Zenticsys. All rights reserved.",
  },
};

const getMediaURL = (media: SiteSetting["defaultSeo"]["image"]) => {
  if (typeof media === "object" && media?.url) {
    return media.url;
  }

  return "";
};

const toViewSettings = (settings: SiteSetting): SiteSettingsView => ({
  siteName: settings.siteName || fallbackSiteSettings.siteName,
  siteDescription:
    settings.siteDescription || fallbackSiteSettings.siteDescription,
  defaultSeo: {
    title: settings.defaultSeo?.title || fallbackSiteSettings.defaultSeo.title,
    description:
      settings.defaultSeo?.description ||
      fallbackSiteSettings.defaultSeo.description,
    image:
      getMediaURL(settings.defaultSeo?.image) ||
      settings.defaultSeo?.imageUrl ||
      fallbackSiteSettings.defaultSeo.image,
  },
  contact: {
    email: settings.contact?.email || fallbackSiteSettings.contact.email,
    phone: settings.contact?.phone || fallbackSiteSettings.contact.phone,
    address: settings.contact?.address || fallbackSiteSettings.contact.address,
  },
  socialLinks: {
    facebook:
      settings.socialLinks?.facebook ||
      fallbackSiteSettings.socialLinks.facebook,
    linkedin:
      settings.socialLinks?.linkedin ||
      fallbackSiteSettings.socialLinks.linkedin,
    instagram:
      settings.socialLinks?.instagram ||
      fallbackSiteSettings.socialLinks.instagram,
  },
  footer: {
    description:
      settings.footer?.description || fallbackSiteSettings.footer.description,
    newsletterTitle:
      settings.footer?.newsletterTitle ||
      fallbackSiteSettings.footer.newsletterTitle,
    newsletterDescription:
      settings.footer?.newsletterDescription ||
      fallbackSiteSettings.footer.newsletterDescription,
    copyrightText:
      settings.footer?.copyrightText ||
      fallbackSiteSettings.footer.copyrightText,
  },
});

export const getSiteSettings = async (): Promise<SiteSettingsView> => {
  try {
    const payload = await getPayload({ config });
    const settings = await payload.findGlobal({
      slug: "siteSettings",
      depth: 1,
    });

    return toViewSettings(settings);
  } catch {
    return fallbackSiteSettings;
  }
};
