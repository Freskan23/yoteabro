/**
 * GA4 Analytics Event Tracking
 * Configuración de eventos para YOTEABRO Cerrajeros Chamartín
 */

import { GA4_MEASUREMENT_ID } from "@/const";

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

// Event types for type safety
type PhoneButtonLocation =
  | "floating_desktop"
  | "floating_mobile"
  | "header"
  | "header_mobile"
  | "hero"
  | "contact_page"
  | "service_page"
  | "zone_page"
  | "footer"
  | "quick_contact_form";

type WhatsAppLocation = "floating_button" | "form_submit";

type EmailButtonLocation = "contact_page" | "footer";

type ExternalLinkType = "google_maps" | "google_reviews" | "social_media";

type NavigationLocation =
  | "header"
  | "header_mobile"
  | "footer"
  | "hero"
  | "mega_menu"
  | "breadcrumb"
  | "related_services";

type LinkType = "service" | "zone" | "page" | "external" | "blog";

type FormName = "quick_contact_form" | "contact_form";

type CTAType = "phone" | "whatsapp" | "form" | "navigation" | "price_calculator";

type ServiceType =
  | "apertura_puertas"
  | "cambio_cerraduras"
  | "cambio_bombin"
  | "urgencias_24h"
  | "amaestramiento"
  | "cerraduras_seguridad"
  | "puertas_antiokupa";

type ZoneType =
  | "el_viso"
  | "prosperidad"
  | "ciudad_jardin"
  | "hispanoamerica"
  | "nueva_espana"
  | "castilla"
  | "chamartin";

// Helper function to send events
const sendEvent = (eventName: string, params: Record<string, unknown> = {}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, {
      ...params,
      send_to: GA4_MEASUREMENT_ID,
    });
  }
};

// ==========================================
// PHONE CLICK EVENTS (CRITICAL)
// ==========================================

export const trackPhoneClick = (
  location: PhoneButtonLocation,
  additionalParams?: {
    page_path?: string;
    service_page?: ServiceType;
    zone_page?: ZoneType;
  }
) => {
  sendEvent("click_phone_button", {
    button_location: location,
    phone_number: "919932967",
    ...additionalParams,
  });

  // Also track as conversion
  sendEvent("generate_lead", {
    method: "phone_call",
    location: location,
  });
};

// ==========================================
// WHATSAPP CLICK EVENTS (CRITICAL)
// ==========================================

export const trackWhatsAppClick = (
  location: WhatsAppLocation,
  additionalParams?: {
    page_type?: string;
    zone_name?: ZoneType;
    service_name?: ServiceType;
    message_type?: "urgent" | "general" | "zone_specific" | "service_specific";
  }
) => {
  sendEvent("whatsapp_click", {
    whatsapp_location: location,
    ...additionalParams,
  });

  // Also track as conversion
  sendEvent("generate_lead", {
    method: "whatsapp",
    location: location,
  });
};

// ==========================================
// EMAIL CLICK EVENTS
// ==========================================

export const trackEmailClick = (
  location: EmailButtonLocation
) => {
  sendEvent("click_email_button", {
    button_location: location,
    email: "contacto@yoteabro.com",
  });

  sendEvent("generate_lead", {
    method: "email",
    location: location,
  });
};

// ==========================================
// FORM EVENTS (CRITICAL)
// ==========================================

export const trackFormStart = (formName: FormName) => {
  sendEvent("form_start", {
    form_name: formName,
  });
};

export const trackFormSubmit = (
  formName: FormName,
  params: {
    problem_selected?: string;
    delivery_method?: "whatsapp" | "email" | "phone";
    form_completion_time_ms?: number;
  }
) => {
  sendEvent("form_submit", {
    form_name: formName,
    ...params,
  });

  // Track as conversion
  sendEvent("generate_lead", {
    method: "form",
    form_name: formName,
  });
};

export const trackFormSuccess = (formName: FormName) => {
  sendEvent("form_success", {
    form_name: formName,
  });
};

export const trackFormError = (formName: FormName, errorMessage: string) => {
  sendEvent("form_error", {
    form_name: formName,
    error_message: errorMessage,
  });
};

// ==========================================
// NAVIGATION EVENTS
// ==========================================

export const trackNavigationClick = (
  destination: string,
  params: {
    link_location: NavigationLocation;
    link_type: LinkType;
    link_text?: string;
  }
) => {
  sendEvent("navigation_click", {
    link_destination: destination,
    ...params,
  });
};

export const trackMenuToggle = (action: "open" | "close") => {
  sendEvent("menu_toggle", {
    menu_type: "mobile_menu",
    action: action,
  });
};

export const trackMegaMenuHover = (menuItem: "servicios" | "zonas") => {
  sendEvent("mega_menu_hover", {
    menu_item: menuItem,
  });
};

// ==========================================
// CTA EVENTS
// ==========================================

export const trackCTAClick = (
  ctaText: string,
  params: {
    cta_location: string;
    cta_type: CTAType;
    destination?: string;
  }
) => {
  sendEvent("cta_click", {
    cta_text: ctaText,
    ...params,
  });
};

// ==========================================
// EXTERNAL LINK EVENTS
// ==========================================

export const trackExternalLinkClick = (
  destinationUrl: string,
  params: {
    link_type: ExternalLinkType;
    link_location: string;
  }
) => {
  sendEvent("external_link_click", {
    destination_url: destinationUrl,
    destination_domain: new URL(destinationUrl).hostname,
    ...params,
  });
};

// ==========================================
// SERVICE PAGE EVENTS
// ==========================================

export const trackServicePageView = (serviceName: ServiceType) => {
  sendEvent("view_service_page", {
    service_name: serviceName,
  });
};

export const trackRelatedServiceClick = (
  fromService: ServiceType,
  toService: ServiceType
) => {
  sendEvent("related_service_click", {
    from_service: fromService,
    to_service: toService,
  });
};

// ==========================================
// ZONE PAGE EVENTS
// ==========================================

export const trackZonePageView = (zoneName: ZoneType) => {
  sendEvent("view_zone_page", {
    zone_name: zoneName,
  });
};

// ==========================================
// PRICE CALCULATOR EVENTS
// ==========================================

export const trackPriceCalculatorStart = () => {
  sendEvent("price_calculator_start", {});
};

export const trackPriceCalculatorSubmit = (params: {
  service_selected: string;
  is_urgent: boolean;
  estimated_price: number;
}) => {
  sendEvent("price_calculator_submit", {
    ...params,
  });
};

// ==========================================
// FAQ EVENTS
// ==========================================

export const trackFAQExpand = (questionTopic: string, pageName: string) => {
  sendEvent("faq_expand", {
    question_topic: questionTopic,
    page_name: pageName,
  });
};

// ==========================================
// TESTIMONIALS EVENTS
// ==========================================

export const trackTestimonialsView = () => {
  sendEvent("testimonials_section_view", {});
};

export const trackGoogleReviewsClick = (location: string) => {
  sendEvent("google_reviews_click", {
    click_location: location,
  });

  trackExternalLinkClick("https://www.google.com/maps", {
    link_type: "google_reviews",
    link_location: location,
  });
};

// ==========================================
// COOKIE CONSENT EVENTS
// ==========================================

export const trackCookieConsent = (consentValue: "accepted" | "rejected") => {
  sendEvent("cookie_consent", {
    consent_value: consentValue,
  });
};

// ==========================================
// SCROLL DEPTH TRACKING
// ==========================================

export const trackScrollDepth = (depth: 25 | 50 | 75 | 90 | 100) => {
  sendEvent("scroll_depth", {
    percent_scrolled: depth,
  });
};

// ==========================================
// BLOG EVENTS
// ==========================================

export const trackBlogPostView = (postId: string, postTitle: string) => {
  sendEvent("blog_post_view", {
    post_id: postId,
    post_title: postTitle,
  });
};

export const trackBlogCategoryClick = (category: string) => {
  sendEvent("blog_category_click", {
    category: category,
  });
};

// ==========================================
// PAGE TIMING EVENTS
// ==========================================

export const trackPageLoadTime = (loadTimeMs: number) => {
  sendEvent("page_load_time", {
    load_time_ms: loadTimeMs,
  });
};

// ==========================================
// ERROR TRACKING
// ==========================================

export const trackError = (errorType: string, errorMessage: string) => {
  sendEvent("error_occurred", {
    error_type: errorType,
    error_message: errorMessage,
  });
};
