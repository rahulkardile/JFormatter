import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from '../Interfaces/IUser';

const userSchema: Schema = new Schema(
    {
        email: { type: String, required: true, unique: true, lowercase: true },
        username: { type: String, unique: true, sparse: true },
        password: { type: String, required: true, minlength: 8 },
        role: {
            type: String,
            enum: ['Admin', 'User', 'Student', 'Job Seeker', 'Employer', 'Freelancer', 'Business Owner'],
            default: 'User',
        },
        isVerified: { type: Boolean, default: false },
        multiFactorEnabled: { type: Boolean, default: false },
        fullName: { type: String, required: true },
        profilePicture: { type: String, default: '' },
        company: { type: String, default: '' },
        jobTitle: { type: String, default: '' },
        industry: { type: String, default: '' },
        department: { type: String, default: '' },
        accountStatus: { type: String, enum: ['Active', 'Suspended', 'Deactivated'], default: 'Active' },
        lastLogin: { type: Date, default: null },
        failedLoginAttempts: { type: Number, default: 0 },
        ipAddress: { type: String, default: '' },
        geolocation: {
            country: { type: String, default: '' },
            city: { type: String, default: '' },
        },
        devices: [
            {
                deviceId: String,
                deviceType: String,
                lastUsed: { type: Date, default: Date.now },
            },
        ],
        sessionTokens: [{ type: String }],
        phone: { type: String, unique: true, sparse: true },
        emailVerified: { type: Boolean, default: false },
        phoneVerified: { type: Boolean, default: false },
        linkedInProfile: { type: String, default: '' },
        githubProfile: { type: String, default: '' },
        portfolioWebsite: { type: String, default: '' },
        preferredLanguage: { type: String, default: 'en' },
        themePreference: { type: String, enum: ['dark', 'light'], default: 'light' },
        communicationPreferences: {
            email: { type: Boolean, default: true },
            sms: { type: Boolean, default: false },
            pushNotifications: { type: Boolean, default: true },
        },
        timezone: { type: String, default: 'UTC' },
        currencyPreference: { type: String, default: 'INR' },
        referralSource: { type: String, default: '' },
        loginFrequency: { type: Number, default: 0 },
        activityScore: { type: Number, default: 0 },
        workEmail: { type: String, unique: true, sparse: true },
        team: { type: String, default: '' },
        apiKeys: [{ key: String, createdAt: { type: Date, default: Date.now } }],
        customDomain: { type: String, default: '' },
        dateOfBirth: { type: Date, default: null },
        securityQuestions: [{ question: String, answer: String }],
    },
    { timestamps: true }
);

export default mongoose.model<IUser>('User', userSchema);
