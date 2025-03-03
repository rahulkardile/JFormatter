import { Document } from 'mongoose';

export interface IUser extends Document {
    email: string;
    username?: string;
    password: string;
    role: 'Admin' | 'User' | 'Student' | 'Job Seeker' | 'Employer' | 'Freelancer' | 'Business Owner';
    isVerified: boolean;
    multiFactorEnabled: boolean;
    fullName: string;
    profilePicture?: string;
    company?: string;
    jobTitle?: string;
    industry?: string;
    department?: string;
    accountStatus: 'Active' | 'Suspended' | 'Deactivated';
    lastLogin?: Date;
    failedLoginAttempts: number;
    ipAddress?: string;
    geolocation?: {
      country?: string;
      city?: string;
    };
    devices?: {
      deviceId: string;
      deviceType: 'Mobile' | 'Desktop' | 'Tablet';
      lastUsed: Date;
    }[];
    sessionTokens?: string[];
    phone?: string;
    emailVerified: boolean;
    phoneVerified: boolean;
    linkedInProfile?: string;
    githubProfile?: string;
    portfolioWebsite?: string;
    preferredLanguage: string;
    themePreference: 'dark' | 'light';
    communicationPreferences: {
      email: boolean;
      sms: boolean;
      pushNotifications: boolean;
    };
    timezone: string;
    currencyPreference: string;
    referralSource?: string;
    loginFrequency: number;
    activityScore: number;
    workEmail?: string;
    team?: string;
    apiKeys?: { key: string; createdAt: Date }[];
    customDomain?: string;
    dateOfBirth?: Date;
    securityQuestions?: { question: string; answer: string }[];
  }