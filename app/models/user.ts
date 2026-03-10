import { SystemSetting } from './system';

// Enums (mirror Prisma schema UserStatus; avoid $Enums when client is generated without it)
export const UserStatus = {
  INACTIVE: 'INACTIVE',
  ACTIVE: 'ACTIVE',
  BLOCKED: 'BLOCKED',
} as const;
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];

// Simple user types for UI display only
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

// Mock data for development
export const MOCK_USER: User = {
  id: '1',
  email: 'demo@kt.com',
  name: 'Demo User',
  avatar: '/media/avatars/300-2.png'
};


export interface UserRole {
  id: string;
  slug: string;
  name: string;
  description?: string | null;
  isTrashed: boolean;
  createdByUserId?: string | null;
  createdAt: Date;
  isProtected: boolean;
  isDefault: boolean;
  createdByUser?: User | null;
  users?: User[];
  permissions?: UserRolePermission[];
  settings?: SystemSetting[];
}

export interface UserPermission {
  id: string;
  slug: string;
  name: string;
  description?: string | null;
  createdByUserId?: string | null;
  createdAt: Date;
  createdByUser?: User | null;
  roles?: UserRolePermission[];
}

export interface UserRolePermission {
  id: string;
  roleId: string;
  permissionId: string;
  assignedAt: Date;
  role?: UserRole;
  permission?: UserPermission;
}

export interface UserAddress {
  id: string;
  userId: string;
  addressLine: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
  user?: User;
}
export interface Account {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string | null;
  access_token?: string | null;
  expires_at?: number | null;
  token_type?: string | null;
  scope?: string | null;
  id_token?: string | null;
  session_state?: string | null;
  user?: User;
}

export interface Session {
  id: string;
  sessionToken: string;
  userId: string;
  expires: Date;
  user?: User;
}

export interface VerificationToken {
  identifier: string;
  token: string;
  expires: Date;
}
