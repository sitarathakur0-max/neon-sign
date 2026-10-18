import { SignageItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Neon Sign Board',
  tagline: 'Make Your Business Impossible to Miss',
  category: 'Signage and illuminated signboards',
  phone: '+92 304 8888059',
  phoneRaw: '+923048888059',
  location: 'Nagina Chowk, Pakpattan, Punjab, Pakistan',
  city: 'Pakpattan',
  province: 'Punjab',
  country: 'Pakistan',
  serviceNotice: 'The business is publicly listed in connection with illuminated signage. Specific services, material options, and installation arrangements must be confirmed directly with the workshop for each project.',
};

export const SIGNAGE_ITEMS: SignageItem[] = [
  {
    id: 'concept-hero-storefront',
    title: 'Architectural Studio Signboard',
    category: 'shop',
    categoryLabel: 'Illuminated Shop Signs',
    image: '/src/assets/images/hero_illuminated_storefront_1792241080924.jpg',
    alt: 'Contemporary illuminated 3D storefront sign with warm white and violet halo glow',
    description: 'Dimensional channel letter sign with dual-temperature LED illumination and dark charcoal exterior cladding.',
    illuminationType: 'Dual-Zone Backlit & Frontlit LED',
    placement: 'Outdoor',
    isConcept: true,
  },
  {
    id: 'concept-aurora-shop',
    title: 'Boutique Facade Channel Letters',
    category: 'shop',
    categoryLabel: 'Illuminated Shop Signs',
    image: '/src/assets/images/sign_illuminated_shop_1792241081928.jpg',
    alt: 'Boutique storefront with warm white illuminated 3D channel letters',
    description: 'Precision-cut 3D dimensional lettering with uniform warm-white diffused illumination against dark textured masonry.',
    illuminationType: 'Warm White 3000K Diffused LED',
    placement: 'Outdoor',
    isConcept: true,
  },
  {
    id: 'concept-dreamer-neon',
    title: 'Script LED Neon Wall Sign',
    category: 'led',
    categoryLabel: 'LED Neon Lettering',
    image: '/src/assets/images/sign_led_lettering_1792241082397.jpg',
    alt: 'Custom cursive LED neon sign glowing in electric violet mounted on concrete',
    description: 'Flexible silicone LED neon formed into custom flowing cursive script, mounted onto dark textured architectural surface.',
    illuminationType: 'Electric Violet LED Neon Tubing',
    placement: 'Indoor',
    isConcept: true,
  },
  {
    id: 'concept-executive-reception',
    title: 'Corporate Reception Backlit Sign',
    category: 'reception',
    categoryLabel: 'Reception & Interior Signage',
    image: '/src/assets/images/sign_reception_interior_1792241082715.jpg',
    alt: 'Executive reception lobby featuring dimensional backlit lettering on dark wood paneling',
    description: 'Brushed metal finish dimensional typography with ambient halo backlighting on acoustic panel feature wall.',
    illuminationType: 'Ambient Halo Backlight 3500K',
    placement: 'Indoor',
    isConcept: true,
  },
  {
    id: 'concept-nexus-lightbox',
    title: 'Commercial Fascia Lightbox Sign',
    category: 'outdoor',
    categoryLabel: 'Outdoor Business Signs',
    image: '/src/assets/images/sign_outdoor_commercial_1792241083444.jpg',
    alt: 'High-visibility outdoor commercial lightbox signboard with bold typography',
    description: 'Weatherproof high-output commercial lightbox signboard engineered for street-facing multi-story business visibility.',
    illuminationType: 'High-Lumen Edge-Lit Commercial LED',
    placement: 'Outdoor',
    isConcept: true,
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Requirements & Sign Type Discussion',
    summary: 'Share your business name, intended display location, and initial idea.',
    details: 'We begin by discussing your signage requirements over the phone or at Nagina Chowk. Tell us your business type, whether the sign is meant for indoor interior display or street-facing outdoor exposure, and any preferred style or wording.',
  },
  {
    step: '02',
    title: 'Concept & Aesthetic Selection',
    summary: 'Review visual concepts and typography references suited to your brand.',
    details: 'Choose between 3D acrylic channel letters, flexible LED neon cursive scripts, executive reception backlighting, or high-visibility outdoor lightboxes based on your aesthetic preference.',
  },
  {
    step: '03',
    title: 'Dimension & Placement Confirmation',
    summary: 'Determine approximate dimensions and mounting conditions.',
    details: 'Sign size is critical for visibility. We review the physical space available on your storefront or wall, electrical power point proximity, and verify structural mounting requirements.',
  },
  {
    step: '04',
    title: 'Transparent Quotation & Order Review',
    summary: 'Receive an honest, customized quote based on verified specifications.',
    details: 'Because material costs, LED modules, acrylic gauge, and dimensions vary widely, every signboard is priced transparently per custom brief before fabrication commences.',
  },
  {
    step: '05',
    title: 'Production & Handover Arrangements',
    summary: 'Crafting the sign and arranging pickup or local delivery options.',
    details: 'Once approved, the sign is assembled with attention to clean wiring, tight joints, and safe illumination testing. Local pickup or handover arrangements in Pakpattan are finalized directly.',
  },
];

export const APPLICATION_AREAS = [
  {
    title: 'Retail Stores & Boutiques',
    description: 'Crisp storefront fascia signs that guide shoppers and establish a memorable brand presence from the street.',
    signTypes: 'Channel Letters · 3D Acrylic Boards · Window Illumination',
  },
  {
    title: 'Cafés & Hospitality Spaces',
    description: 'Ambient LED neon script and warm signage that enhances interior dining atmosphere and social media check-ins.',
    signTypes: 'Silicone LED Neon · Warm Backlit Signs · Accent Slogans',
  },
  {
    title: 'Corporate & Professional Offices',
    description: 'Understated, executive reception backdrops and entrance plaques that project established credibility to visiting clients.',
    signTypes: 'Brushed Acrylic · Halo-Lit Lettering · Boardroom Signs',
  },
  {
    title: 'Commercial Plazas & Service Centers',
    description: 'Durable, high-output outdoor signage built for clear legibility day and night along busy thoroughfares.',
    signTypes: 'Outdoor Lightboxes · Fascia Signboards · Directional Signs',
  },
];

export const FAQS = [
  {
    question: 'How do I obtain a quotation for a custom sign board?',
    answer: 'Submit our online quotation request form or call our direct line at +92 304 8888059. Provide your business name, sign style preference, approximate dimensions if known, and whether the sign is for indoor or outdoor use. We calculate pricing based on exact project parameters.',
  },
  {
    question: 'Are the designs in the gallery ready-made products?',
    answer: 'No. The gallery showcases curated conceptual styles and illumination possibilities to give you creative inspiration. Custom signage is manufactured bespoke according to your unique dimensions, branding, and verified specifications.',
  },
  {
    question: 'What is the difference between indoor and outdoor signage?',
    answer: 'Outdoor signs require weatherproof sealing, UV-resistant acrylic or metal enclosures, and water-resistant LED modules to withstand rain and dust. Indoor signs emphasize refined close-up finishes, softer ambient brightness, and lightweight mounting.',
  },
  {
    question: 'Can you work from my existing logo or font?',
    answer: 'Yes. If you have an existing logo, typeface, or handwritten style, discuss it with us during your inquiry. Custom channel letters and LED neon can be shaped to closely match your brand assets.',
  },
  {
    question: 'Do you provide on-site installation in Pakpattan?',
    answer: 'Installation capabilities and site availability depend on the specific location and sign dimensions. Please verify installation arrangements directly with our team when confirming your quote.',
  },
];
