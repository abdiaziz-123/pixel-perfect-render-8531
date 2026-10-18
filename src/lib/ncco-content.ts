export const navigation = [
  { label: "About NCCO", to: "/about" },
  { label: "Cancer care", to: "/cancer-care" },
  { label: "Programmes", to: "/programmes" },
  { label: "Research & data", to: "/research" },
  { label: "Get involved", to: "/get-involved" },
] as const;
export type PageContent = {
  title: string;
  eyebrow: string;
  intro: string;
  sections: { title: string; text: string }[];
  note?: string;
  action?: string;
  subject?: string;
};
export const pages = {
  about: {
    title: "People at the heart of cancer care.",
    eyebrow: "About NCCO",
    intro:
      "Northern Cancer Care Organization (NCCO) is a proposed national non-profit organization committed to reducing the burden of cancer through prevention, early detection, patient navigation, support, research, data and strategic partnerships.",
    sections: [
      {
        title: "Our vision",
        text: "A cancer-free and informed Northern Kenya where every person has access to timely prevention, early detection, quality care and support. As NCCO expands, its vision is to contribute to improved cancer outcomes nationally and develop meaningful international partnerships.",
      },
      {
        title: "Our mission",
        text: "To reduce the burden of cancer through prevention, early detection, patient-centered support, specialist connectivity, research, reliable data, education and strategic partnerships.",
      },
      {
        title: "Our core values",
        text: "Compassion — patients, families and communities at the centre of our work. Equity — fair access to cancer information, navigation and support. Integrity — transparent and responsible operations. Collaboration — cancer control requires partnerships. Innovation — practical, responsible approaches. Evidence — programmes informed by reliable evidence and data. Dignity — every person affected by cancer deserves respect.",
      },
      {
        title: "Our approach",
        text: "NCCO works across the full cancer continuum — prevention, early detection, diagnosis, treatment, supportive care, survivorship and palliative care — alongside existing healthcare systems, never replacing hospitals, doctors or licensed providers. Clinical decisions remain with appropriately qualified healthcare professionals.",
      },
      {
        title: "Strategic objectives 2027–2029",
        text: "Promote cancer prevention and public awareness; support early detection and screening awareness; improve patient navigation and psychosocial support; connect patients with verified specialists and services; strengthen cancer-related research and data; build healthcare-professional collaboration; and develop strategic partnerships across government, healthcare and international organisations.",
      },
      {
        title: "Proposed governance & accountability",
        text: "The profile proposes a Board of Directors or Trustees providing oversight, an Executive Director and Deputy Executive Director, and five core departments: Cancer Programs & Patient Support; Medical & Clinical Affairs; Finance & Administration; Partnerships & Resource Mobilization; and Research, Data & Communications. Regional and county coordinators and community cancer champions would support local engagement. A seven-person founding committee is proposed; individual appointments have not been confirmed.",
      },
      {
        title: "A sustainable organisation",
        text: "NCCO’s sustainability strategy combines strong governance, diversified funding, partnerships, measurable impact, community ownership and responsible technology. Institutional capacity will be developed so programmes do not depend on one donor or one individual.",
      },
    ],
    note: "NCCO is a proposed organization in its establishment phase. Registration details, head office and founding committee names will be published once formally confirmed.",
    action: "Connect with NCCO",
    subject: "About NCCO",
  },
  "cancer-care": {
    title: "Understanding cancer. Finding your next step.",
    eyebrow: "Cancer care & information",
    intro:
      "Clear information can help you ask questions, understand your options and take the next step with a qualified healthcare professional.",
    sections: [
      {
        title: "Prevention & awareness",
        text: "Learn about cancer risk factors and speak with a healthcare professional about prevention appropriate to your circumstances. Awareness supports informed choices and reduces stigma.",
      },
      {
        title: "Screening & early detection",
        text: "Screening recommendations depend on age, health history and cancer type. Ask a qualified clinician which screening services are appropriate for you. Seek medical advice about new or persistent symptoms.",
      },
      {
        title: "Treatment information",
        text: "Cancer care is individual. Your clinical team can explain your diagnosis, available treatments, expected benefits and possible side effects. NCCO navigation is not a substitute for clinical assessment.",
      },
      {
        title: "Survivorship",
        text: "After treatment, discuss follow-up, recovery, emotional wellbeing and ongoing support with your care team. Survivorship needs may change over time.",
      },
      {
        title: "Palliative & supportive care",
        text: "Supportive and palliative care focus on quality of life, symptom relief and the needs of patients and families. Ask your treating team about available services.",
      },
    ],
    note: "Educational information only. This website does not provide medical advice, diagnosis or treatment. For urgent concerns, contact a healthcare facility or your local emergency service.",
    action: "Ask about care navigation",
    subject: "Cancer care navigation enquiry",
  },
  "patient-navigation": {
    title: "A more connected path to care.",
    eyebrow: "Patient navigation",
    intro:
      "Finding the right cancer service can feel overwhelming. The NCCO navigation framework is designed to connect people with appropriate services and referral support.",
    sections: [
      {
        title: "01 · Understand your needs",
        text: "Start with a general enquiry about navigation. Availability and next steps must be confirmed with NCCO. Do not send diagnoses, medical records or other sensitive health information through ordinary email.",
      },
      {
        title: "02 · Identify appropriate services",
        text: "The proposed navigation process identifies suitable cancer services and specialist connections based on individual needs and service availability.",
      },
      {
        title: "03 · Coordinate referrals",
        text: "Referral assistance is intended to help patients understand where to go and how to connect with the appropriate healthcare provider. Clinical decisions remain with qualified professionals.",
      },
      {
        title: "04 · Follow up with care",
        text: "The framework includes follow-up and recording outcomes with appropriate consent, privacy safeguards and authorised access.",
      },
    ],
    note: "A verified service directory and secure online navigation requests are planned. This public website does not collect patient records or operate a referral portal.",
    action: "Enquire about navigation",
    subject: "Patient navigation — general enquiry",
  },
  programmes: {
    title: "Five flagship programmes. One connected mission.",
    eyebrow: "NCCO flagship programmes",
    intro:
      "NCCO’s 2027–2029 strategy is built around five connected flagship programmes: Prevent, Detect, Support, CancerConnect, and Research & Data.",
    sections: [
      {
        title: "Program 1 · NCCO Prevent",
        text: "Planned cancer prevention and public awareness activities include community cancer education, awareness campaigns, health education materials, community forums, youth and school-based awareness where appropriate, evidence-based prevention measures and cancer risk-factor education.",
      },
      {
        title: "Program 2 · NCCO Detect",
        text: "Early detection and screening navigation. Working with qualified healthcare providers and facilities to promote appropriate screening: public education on early warning signs, screening-awareness campaigns, referral navigation, community outreach and follow-up after screening where appropriate.",
      },
      {
        title: "Program 3 · NCCO Support",
        text: "Planned patient, caregiver and survivor support includes patient navigation, caregiver education, patient education, psychosocial and social-support referrals, survivorship support, and palliative and supportive-care referrals. NCCO intends to establish partnerships with qualified professionals, not provide specialised clinical services without appropriate licensing.",
      },
      {
        title: "Program 4 · NCCO CancerConnect",
        text: "A patient and specialist connectivity platform — one of NCCO’s major long-term initiatives. The proposed model connects patients to verified healthcare facilities, professionals and appropriate specialist services, with follow-up and support.",
      },
      {
        title: "Program 5 · NCCO Research & Data",
        text: "Supporting the development of reliable cancer-related information: cancer-service mapping, community needs assessments, programme monitoring and research partnerships.",
      },
      {
        title: "Professional Cancer Network",
        text: "NCCO plans to bring together qualified oncologists, surgeons, pathologists, radiologists, oncology nurses, pharmacists, psychologists, nutrition professionals, palliative-care professionals, public-health specialists and researchers. The proposed network would support referral collaboration, professional education, multidisciplinary working, research and cancer-awareness initiatives.",
      },
      {
        title: "Patient & Survivor Advisory Group",
        text: "A proposed advisory group will give people affected by cancer a voice in programme development. Feedback would cover patient experience, barriers to care, navigation, support services, cancer information, digital-platform development and community needs.",
      },
      {
        title: "2027 · Foundation",
        text: "The proposed first year focuses on governance, policies and procedures, organisational identity, initial partnerships, community needs assessment, programme design, CancerConnect requirements, fundraising systems and recruitment of key volunteers and staff.",
      },
      {
        title: "2028 · Pilot & expansion",
        text: "The proposed second year moves towards implementation: expanded awareness campaigns, patient-navigation and CancerConnect pilots, a healthcare-professional network, hospital partnerships, research and data initiatives, and stronger donor relationships.",
      },
      {
        title: "2029 · Scale & national collaboration",
        text: "The proposed third year expands successful programmes into additional counties, strengthens CancerConnect and the professional network, publishes reports, develops international partnerships and fundraising, evaluates the strategy and prepares the next five-year strategic plan.",
      },
    ],
    note: "This is the proposed 2027–2029 implementation plan, not a schedule of live services. Programme locations, activity dates and enrolment details have not yet been confirmed.",
    action: "Ask about programmes",
    subject: "Programme availability enquiry",
  },
  research: {
    title: "Better evidence. Better cancer care.",
    eyebrow: "Research & data",
    intro:
      "NCCO’s research and data programme aims to turn responsible evidence into a better understanding of cancer-care access and service gaps.",
    sections: [
      {
        title: "Research collaboration",
        text: "The framework sets out a research pathway from a question and proposal through ethics approval, data collection, analysis and publication.",
      },
      {
        title: "Cancer-service mapping & needs assessment",
        text: "Planned activities include mapping cancer services, community needs assessments and programme monitoring — revealing where care is needed most.",
      },
      {
        title: "Monitoring & evaluation",
        text: "The proposed indicators include people reached through cancer education, awareness campaigns conducted, patients supported through navigation, healthcare facilities partnered with, verified professionals participating, referrals facilitated, counties reached, healthcare workers engaged or trained, research projects supported, partnerships established, funds mobilized and patient or user satisfaction. Baseline measurements must be established before final numerical targets are set.",
      },
      {
        title: "Reports & publications",
        text: "Verified publications, approved datasets and cancer reports will be listed when available. No public research datasets or published NCCO reports have been provided yet.",
      },
      {
        title: "NCCO Cancer Data Observatory · Planned",
        text: "The profile’s long-term ambition is a future platform helping stakeholders understand cancer-service needs and gaps across different regions. Proposed work includes data analysis, service-gap identification, reports and collaboration with universities and research institutions. No observatory or public data platform is currently available on this website.",
      },
    ],
    note: "The Data Observatory and dashboards are planned. Patient information must not be published or shared without appropriate authorisation and safeguards.",
    action: "Discuss research collaboration",
    subject: "Research collaboration enquiry",
  },
  partners: {
    title: "Progress through partnership.",
    eyebrow: "Partners & collaboration",
    intro:
      "NCCO’s partnership strategy spans government, healthcare, community and international organisations — because cancer control requires collaboration.",
    sections: [
      {
        title: "Government & public institutions",
        text: "National health institutions, county governments and relevant public-health agencies are central to the proposed collaboration ecosystem.",
      },
      {
        title: "Healthcare providers",
        text: "Public hospitals, private hospitals, cancer centres and specialist clinics — collaboration around service information, patient navigation and appropriate referral pathways.",
      },
      {
        title: "Research & academia",
        text: "Universities and research institutions can help develop ethical studies, strengthen evidence and understand unmet cancer-care needs.",
      },
      {
        title: "Corporate & technology partners",
        text: "Technology companies, corporate social responsibility programmes, and pharmaceutical and healthcare organizations — subject to appropriate safeguards.",
      },
      {
        title: "International partners",
        text: "Cancer organizations, international NGOs, foundations and global health organizations are part of NCCO’s long-term partnership vision.",
      },
      {
        title: "Strategic funding priorities 2027–2029",
        text: "NCCO seeks partners and donors for community cancer awareness, early detection and screening navigation, patient support, CancerConnect development, research and data, healthcare-professional engagement, training, monitoring and evaluation, organisational development, and county and community expansion. A detailed budget is to be developed after the initial needs assessment and implementation design; no funding amount has been confirmed.",
      },
    ],
    note: "Confirmed partners have not yet been supplied. No institutional affiliation or endorsement is implied.",
    action: "Start a partnership conversation",
    subject: "Partnership enquiry",
  },
  "get-involved": {
    title: "Be part of a more caring future.",
    eyebrow: "Get involved",
    intro:
      "Bring your time, expertise or support to a shared ambition: connecting people with better cancer care.",
    sections: [
      {
        title: "Volunteer",
        text: "Express your interest in supporting community awareness, organisational work or patient-support activities. Roles and availability must be confirmed with NCCO.",
      },
      {
        title: "Partner with us",
        text: "Explore collaboration as a healthcare provider, community organisation, institution or supporter.",
      },
      {
        title: "Support NCCO",
        text: "The proposed funding strategy includes competitive and research grants, foundations, corporate and institutional partnerships, individual donations, fundraising campaigns and events. Funding must follow governance, financial and conflict-of-interest policies. Contact NCCO for verified donation arrangements; online donations are not yet available on this website.",
      },
      {
        title: "Collaborate on research",
        text: "Discuss research questions, approved evidence and opportunities for responsible collaboration.",
      },
    ],
    action: "Express your interest",
    subject: "Get involved with NCCO",
  },
  cancerconnect: {
    title: "Connecting the cancer-care community.",
    eyebrow: "CancerConnect · Planned",
    intro:
      "CancerConnect is NCCO’s proposed digital and patient-navigation platform — designed to help patients find appropriate cancer-related services and connect with verified healthcare professionals and support services, locally and, where appropriate, internationally.",
    sections: [
      {
        title: "The proposed model",
        text: "Patient → NCCO CancerConnect → Verified healthcare facility or professional → Appropriate specialist or service → Follow-up and support.",
      },
      {
        title: "Potential features",
        text: "Proposed features include cancer information, healthcare-facility and verified-professional directories, referral navigation, appointment requests, specialist connectivity, appropriate teleconsultation partnerships, a support-service directory, follow-up tools, patient resources, and data and monitoring functions. These are potential features, not services currently offered by this website.",
      },
      {
        title: "International connectivity · Proposed",
        text: "Where appropriate and legally permitted, CancerConnect could facilitate connections with specialists and institutions outside Kenya. Any future arrangements must meet consent, professional-verification, privacy and clinical-governance requirements; no international referral service is currently live here.",
      },
      {
        title: "Built on trust",
        text: "The system is designed around patient consent, confidentiality, data protection, professional verification, appropriate clinical governance, secure technology and clear accountability.",
      },
      {
        title: "Privacy by design",
        text: "CancerConnect must be developed with qualified software, health-informatics and data-protection expertise, consent procedures and appropriate access controls.",
      },
    ],
    note: "CancerConnect is not live. There is no patient login, online referral tracking or secure messaging on this public website. It is not intended to replace hospital medical records.",
    action: "Ask about CancerConnect",
    subject: "CancerConnect enquiry",
  },
  contact: {
    title: "Let’s connect.",
    eyebrow: "Contact NCCO",
    intro:
      "For general enquiries, programme information, partnerships or research conversations, contact Northern Cancer Care Organization.",
    sections: [
      { title: "General enquiries", text: "info@northerncancercare.org" },
      {
        title: "Your privacy matters",
        text: "Keep your first enquiry general. Do not include medical records, diagnoses, identification documents or other sensitive personal information in ordinary email.",
      },
    ],
    note: "NCCO’s telephone number, WhatsApp account and office address have not been supplied. The listed email comes from the organisation’s digital-infrastructure document; mailbox availability still needs confirmation.",
    action: "Email NCCO",
    subject: "General enquiry",
  },
  privacy: {
    title: "Respect for every person’s privacy.",
    eyebrow: "Privacy & patient information",
    intro:
      "This public website provides information and links to email. It does not operate a patient portal or collect medical records.",
    sections: [
      {
        title: "Contacting NCCO",
        text: "Email links open your email application. Any information you choose to send is handled by your email provider and the recipient. Avoid sending sensitive health or identity information through ordinary email.",
      },
      {
        title: "Future patient services",
        text: "Before patient-data services launch, NCCO’s framework calls for consent procedures, data retention and access policies, breach response, confidentiality agreements and research-data governance.",
      },
      {
        title: "Formal policies",
        text: "A final organisation-approved privacy policy and relevant data-protection procedures are required before secure patient workflows become available.",
      },
    ],
    note: "This notice is not a claim of regulatory certification. NCCO’s framework recognises Kenya’s Data Protection Act, 2019.",
  },
} satisfies Record<string, PageContent>;
export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title: `${title} | NCCO` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | Northern Cancer Care Organization` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
