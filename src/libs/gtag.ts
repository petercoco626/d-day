import { GaEventType } from '@/types/gaEvent';

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID; // 측정ID 설정: .env 파일로 관리해도된다.

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID as string, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GaEventType) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
