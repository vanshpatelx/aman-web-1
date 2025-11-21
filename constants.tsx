import { 
  Briefcase, 
  Home, 
  TrendingUp, 
  RefreshCw, 
  Car, 
} from 'lucide-react';
import { NavItem, ServiceItem, ValueItem, ProcessItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '#home' },
  { label: 'Method', path: '#process' },
  { label: 'Services', path: '#services' },
  { label: 'About', path: '#about' },
  { label: 'Partner Portal', path: '/portal' },
];


export const STATS = [
  { label: "Loan Value Managed", value: "$250M+" },
  { label: "Strategies Built", value: "500+" },
  { label: "Lenders Compared", value: "40+" },
  { label: "Client Retention", value: "98%" },
];

export const PROCESS_STEPS: ProcessItem[] = [
  {
    step: "01",
    title: "Discovery & Diagnosis",
    description: "We deep-dive into your financials, tax structure, and long-term goals before discussing a single product."
  },
  {
    step: "02",
    title: "Strategic Modelling",
    description: "We present multiple lending structures, contrasting interest costs, tax implications, and flexibility."
  },
  {
    step: "03",
    title: "Execution",
    description: "We manage the bank process end-to-end, coordinating with your accountant to ensure clean approvals."
  },
  {
    step: "04",
    title: "Annual Review",
    description: "Finance is fluid. We review your rate and structure annually to ensure they still serve your evolving goals."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'self-employed',
    title: 'Self-Employed Lending',
    description: 'Specialist lending solutions built on deep financial analysis. We speak the language of tax returns and P&Ls.',
    details: [
      'Analysis of complex financials',
      'Cash flow interpretation',
      'Borrowing power optimization'
    ],
    icon: Briefcase,
    image: '' // No longer used
  },
  {
    id: 'owner-occupied',
    title: 'Home Loans',
    description: 'Structured home loan solutions focused on debt reduction. Turn your mortgage into a financial tool, not just a debt.',
    details: [
      'Cash flow optimisation',
      'Debt recycling preparation',
      'Smart structuring'
    ],
    icon: Home,
    image: '' // No longer used
  },
  {
    id: 'investment',
    title: 'Investment Loans',
    description: 'Strategic lending for new and experienced property investors. Scale your portfolio without hitting a borrowing wall.',
    details: [
      'Portfolio growth planning',
      'Accountant collaboration',
      'Long-term strategy alignment'
    ],
    icon: TrendingUp,
    image: '' // No longer used
  },
  {
    id: 'refinance',
    title: 'Strategic Refinancing',
    description: 'A full structural review rather than a simple rate comparison. Reset your loan life and unlock equity for future use.',
    details: [
      'Reduce interest costs',
      'Shorten loan life',
      'Increase flexibility'
    ],
    icon: RefreshCw,
    image: '' // No longer used
  },
  {
    id: 'asset',
    title: 'Asset Finance',
    description: 'Flexible lending options that fit your long-term plan. Finance vehicles and equipment without choking cash flow.',
    details: [
      'Vehicle and equipment finance',
      'Preserve cash flow',
      'Integrated strategy'
    ],
    icon: Car,
    image: '' // No longer used
  }
];

export const VALUES: ValueItem[] = [
  {
    title: "Clarity",
    description: "We translate complex financial data into clear, actionable pathways."
  },
  {
    title: "Strategy",
    description: "Every decision is made with the long-term horizon in mind, not just today's transaction."
  },
  {
    title: "Education",
    description: "We empower you with the knowledge to understand the 'why' behind the numbers."
  },
  {
    title: "Precision",
    description: "Accuracy is our baseline. We sweat the small details so you don't have to."
  },
  {
    title: "Integrity",
    description: "Honest advice, even when it means telling you not to borrow right now."
  },
  {
    title: "Partnership",
    description: "We are not one-off brokers; we are your long-term financial allies."
  }
];

export const TESTIMONIALS = [
  {
    quote: "Sumry didn't just get me a loan; they restructured my entire portfolio. The tax savings alone covered the interest.",
    author: "Michael T.",
    role: "Property Investor"
  },
  {
    quote: "Finally, a broker who speaks 'accountant'. The modelling gave me the confidence to expand my business.",
    author: "Sarah J.",
    role: "Business Owner"
  },
  {
    quote: "The clarity I gained after one session was worth more than the rate reduction. A true partner.",
    author: "David & Emma",
    role: "Home Buyers"
  }
];