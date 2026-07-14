declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

type EventName =
  | "page_view"
  | "whatsapp_click"
  | "cta_click"
  | "plan_click"
  | "portfolio_click"
  | "faq_open"
  | "scroll_depth";

function analytics(event: EventName, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", event, params);

  window.clarity?.("event", event);
}

export function trackPageView() {
  analytics("page_view");
}

export function trackWhatsApp(location: string) {
  analytics("whatsapp_click", {
    location,
  });
}

export function trackCTA(location: string) {
  analytics("cta_click", {
    location,
  });
}

export function trackPlan(plan: string) {
  analytics("plan_click", {
    plan,
  });
}

export function trackPortfolio(project: string) {
  analytics("portfolio_click", {
    project,
  });
}

export function trackFAQ(question: string) {
  analytics("faq_open", {
    question,
  });
}

export function trackScroll(depth: number) {
  analytics("scroll_depth", {
    depth,
  });
}
