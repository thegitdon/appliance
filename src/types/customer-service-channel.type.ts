export interface CustomerServiceChannelType {
    brandName: string;
    emergencyNumber: string;
    technicalPhones: PhoneNumber[];
    whatsappNumber: string;
    whatsappCountryCode: string;
}

interface PhoneNumber {
    city: string;
    number: string;
    formattedNumber: string;
}
