export interface TabContent {
  id: string;
  label: string;
  number: string;
  title: string;
  description: string;
  cta: string;
  imageUrl: string;
}



export const TABS_DATA: TabContent[] = [
  {
    id: 'Modular architecture',
    label: 'Modular architecture',
    number: '01',
    title: 'Modular architecture',
    description: 'Explore equipment from leading OEMs including ASML, Applied Materials, Lam Research, TEL, and KLA.',
    cta: 'Learn More',
    imageUrl: '/asml.jpg'
  },
  {
    id: 'Opportunities',
    label: 'Opportunities',
    number: '02',
    title: 'Featured Opportunities',
    description: 'Access exclusive high-value listings, rare systems, and competitively priced, in-demand semiconductor tools.',
    cta: 'Learn More',
    imageUrl: '/indemandsemi.jpg'
  },
  {
    id: 'New Inventory',
    label: 'New Inventory',
    number: '03',
    title: 'New Arrivals',
    description: 'Discover the latest additions, from cutting-edge wafer tools to refurbished production-ready systems.',
    cta: 'Learn More',
    imageUrl: '/semiready.jpeg'
  }
  ,
  {
    id: 'Portal',
    label: 'Portal',
    number: '04',
    title: 'Customer Portal',
    description: 'Request quotes, manage POs, and streamline procurement with a unified customer workspace.',
    cta: 'Learn More',
    imageUrl: '/Po.jpeg'
  }
];