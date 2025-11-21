import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: LucideIcon;
  image: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface ProcessItem {
  step: string;
  title: string;
  description: string;
}

export enum FormStep {
  GOAL = 0,
  STATUS = 1,
  DETAILS = 2,
  COMPLETE = 3
}