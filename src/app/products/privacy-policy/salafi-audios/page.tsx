import React from 'react';
import { LegalPage, type LegalConfig } from "@/features-products/components/privacy-policy";

const cfg: LegalConfig = {
  appName: "Salafi Audios",
  serviceProvider: "Basma Labs",
  effectiveDate: "23 September 2025",
  contactEmail: "ofarooqdev@gmail.com",
  jurisdiction: {
    country: "Kingdom of Saudi Arabia",
    courts: "the courts of Saudi Arabia",
  },
};

function Page() {
  return <LegalPage cfg={ cfg } />;
}

export default Page;
