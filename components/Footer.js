import { applicationData } from 'data/config';
import ContactForm from './ContactForm';

export const Footer = () => {
  return (
    <div className="px-4 pt-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-2">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              {applicationData.navbar.header}
            </span>
          </a>
        </div>
        {/* <ContactForm /> */}
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Phone:</p>
            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              {applicationData.contacts.phone}
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              {applicationData.contacts.email}
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              {applicationData.contacts.officeAddress}
            </a>
          </div>
        </div>
      </div>
      <div className="pt-5 pb-10 border-t">
        <p className="text-sm text-center text-gray-600">
          © Copyright 2022 SAS Techno solutions. All rights reserved.
        </p>
      </div>
    </div>
  );
};
