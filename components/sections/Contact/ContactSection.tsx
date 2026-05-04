// components/sections/Contact/ContactSection.tsx

import ContactFormHead from "./ContactFormHead";
import ContactForm from "./ContactForm";
import ContactContent from "./ContactContent";

export default function ContactSection() {
  return (
    <section className="w-full bg-black py-12 md:py-32 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* 
            Main Grid: 
            Single column on mobile to respect 'order' classes.
            Two columns on LG screens.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          
          {/* 1. Header: Always First */}
          <div className="order-1 lg:col-start-1">
            <ContactFormHead />
          </div>

          {/* 
              2. Form: 
              Mobile: Order 2 (Middle)
              PC: Right Column (lg:col-start-2, lg:row-span-2)
          */}
          <div className="order-2 lg:col-start-2 lg:row-span-2">
            <ContactForm />
          </div>

          {/* 
              3. Content: 
              Mobile: Order 3 (Bottom)
              PC: Left Column, under Header (lg:col-start-1)
          */}
          <div className="order-3 lg:order-2 lg:col-start-1">
            <ContactContent />
          </div>

        </div>
      </div>
    </section>
  );
}