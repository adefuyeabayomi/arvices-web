export const UserFieldId = {
  Email: "email",
  FullName: "fullName",
  Username: "username",
  Address: "address",
  Password: "password",
  PhoneNumber: "phoneNumber",
  Picture: "picture",
  BusinessName: "businessName",
  Position: "position",
  Rating: "rating",
  NumberOfRating: "numberOfRating",
  AllRating: "allRating",
  MeanRating: "meanRating",
  AccountCreationDate: "accountCreationDate",
  AccountDisable: "accountDisable",
  AccountVerified: "accountVerified",
  Type: "type",
  Showcase: "showcase",
  ServiceRequests: "serviceRequests",
  Category: "category",
  Review: "review",
  ReviewedUser: "reviewedUser",
  Wallet: "wallet",
  Specialties: "specialties",
} as const;

export interface ServiceOfferingPayload {
  title: string;
  price: string; // e.g. "10000" (₦10,000)
  description: string;
  duration: string; // e.g. "2"
  timeUnit: string; // e.g. "hours", "days", etc.
  id: number;
}

interface profileData {
  // Personal Info
  fullName: string;
  profileImage: string;
  bio: string;
  profession: string;
  location: string;
  phone: string;
  email: string;
  website: string;

  // Professional Details
  experience: string;
  specialties: string[];
  languages: string[];

  // Availability
  workingHours: {
    [key: string]: { start: string; end: string; available: boolean };
  };
  bookingAdvance: string;
  mobileService: boolean;
  serviceRadius: string;

  // Business Settings
  depositRequired: boolean;
  depositPercentage: string;
  cancellationPolicy: string;
  autoConfirm: boolean;
}
