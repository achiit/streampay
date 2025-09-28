import { z } from "zod";

// Frontend-only types (no database schemas needed)
export type User = {
  id: number;
  userId: string; // Firebase Auth UID
  email: string;
  organizationName: string;
  logoUrl: string;
  description?: string;
  phone?: string;
  address?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Client = {
  id: number;
  clientId: string;
  userId: string; // Reference to freelancer user_id
  name: string;
  companyName: string;
  email: string;
  phone?: string;
  address?: string;
  createdAt: Date;
};

export type Contract = {
  id: number;
  contractId: string;
  userId: string; // Reference to freelancer user_id
  templateType: string; // 'service' | 'project' | 'nda' | 'sow'
  status: string; // 'draft' | 'sent' | 'signed' | 'completed' | 'expired'
  clientInfo: any;
  projectDetails: any;
  deliverables: any;
  paymentTerms: any;
  legalClauses: any;
  signatures?: any;
  accessToken?: string;
  createdAt: Date;
  updatedAt: Date;
  sentAt?: Date;
  signedAt?: Date;
};

// Insert types for forms
export type InsertUser = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;
export type InsertClient = Omit<Client, 'id' | 'createdAt'>;
export type InsertContract = Omit<Contract, 'id' | 'createdAt' | 'updatedAt' | 'sentAt' | 'signedAt'>;

// Enums and specific types
export enum TemplateType {
  SERVICE = 'service',
  PROJECT = 'project',
  NDA = 'nda',
  SOW = 'sow'
}

export enum ContractStatus {
  DRAFT = 'draft',
  SENT = 'sent',
  SIGNED = 'signed',
  COMPLETED = 'completed',
  EXPIRED = 'expired'
}

export enum PaymentType {
  FIXED = 'fixed',
  HOURLY = 'hourly',
  MILESTONE = 'milestone'
}

// Type definitions matching the jsonb columns
export type ClientInfo = {
  clientId?: string;
  name: string;
  companyName: string;
  email: string;
  phone?: string;
  address?: string;
};

export type ProjectDetails = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  scope: string;
  outOfScope?: string;
};

export type Deliverable = {
  name: string;
  description: string;
  dueDate?: string;
};

export type PaymentTerms = {
  type: PaymentType;
  amount: number;
  currency: string;
  schedule?: string;
  deposit?: number;
};

export type Signature = {
  signature: string; // base64 image
  date: string;
};

export type Signatures = {
  freelancer?: Signature;
  client?: Signature;
};
// Firebase/Firestore specific types for Web3 integration
export interface Milestone {
  name: string;
  description: string;
  amount: number;
  dueDate?: string;
}

export interface OnchainData {
  chainId: number;
  escrow: string;
  idHex: string;
  token: string;
  autoReleaseAt: number;
}

export interface InvoiceOnchainData {
  chainId: number;
  escrow: string;
  idHex: string;
  token: string;
  amount: string;
  state: 'created' | 'funded' | 'paid';
  fundTx?: string;
  releaseTx?: string;
  payer?: string;
  payee: string;
}

export interface AuditEntry {
  action: string;
  timestamp: string;
  details?: any;
}

export interface InvoiceItem {
  name: string;
  description: string;
  amount: number;
  status: 'pending' | 'funded' | 'paid';
}

export interface FirebaseInvoice {
  invoiceId: string;
  contractId: string;
  userId: string;
  clientId: string;
  currency: string;
  amount: number;
  status: 'sent' | 'funded' | 'paid';
  payLinkToken: string;
  onchain: InvoiceOnchainData;
  items?: InvoiceItem[];
  audit: AuditEntry[];
  createdAt: string;
  updatedAt: string;
  sentAt?: string;
  fundedAt?: string;
  paidAt?: string;
}

export interface FirebaseContract {
  contractId: string;
  userId: string;
  templateType: string;
  status: string;
  clientInfo: ClientInfo;
  projectDetails: ProjectDetails;
  deliverables: Deliverable[];
  paymentTerms: PaymentTerms & {
    tokenAddress?: string;
    decimals?: number;
    chainId?: number;
    payeeWallet?: string;
    milestones?: Milestone[];
  };
  legalClauses: any;
  signatures?: Signatures;
  accessToken?: string;
  onchain?: OnchainData;
  audit?: AuditEntry[];
  createdAt: string;
  updatedAt: string;
  sentAt?: string;
  signedAt?: string;
}