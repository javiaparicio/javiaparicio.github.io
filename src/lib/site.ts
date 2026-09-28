import contact from '../data/contact.json';

export const SITE = {
  url: 'https://javiapariciofoto.ch',
  brand: 'Javi Aparicio Foto',
  legalName: contact.business_name,
  owner: contact.owner,
  email: contact.email,
  phone: contact.phone,
  che: contact.che,
  address: contact.address,
  street: contact.street,
  city: contact.city,
  postalCode: contact.postal_code,
  country: contact.country,
  priceRange: 'CHF 150-350',
  formspree: 'https://formspree.io/f/mjvnrpje',
  emailSubject: 'Nachricht von javiapariciofoto.ch',
  social: [
    { name: 'Pixelfed', url: 'https://pixelfed.social/javifoto' },
    { name: 'Instagram', url: 'https://instagram.com/javiapariciofoto' },
    { name: 'Telegram', url: 'https://t.me/javiapariciofoto' },
  ],
  whatsapp: `https://wa.me/${contact.phone.replace(/[^\d]/g, '')}`,
  facebookDomainVerification: '0b6g28oc3e1znqczd2e0t4pv8zkwoy',
  ahrefsSiteVerification:
    '4704889a5ffe2bdc50576fc6ddee24b63e59ac71720cf5536d7a8fa7ed7c1723',
} as const;

export { contact };
