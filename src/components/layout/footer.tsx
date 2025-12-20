import { BriefcaseBusiness } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <BriefcaseBusiness className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">TalentHub</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} TalentHub. All rights reserved.
          </p>
          {/* Add social links here if needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
