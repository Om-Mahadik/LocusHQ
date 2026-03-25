import ContactFormSection from "@/components/sections/Contact/ContactFormSection";
import ContactInfo from "@/components/sections/Contact/ContactInfo";
import SocialHandles from "@/components/sections/Contact/SocialHandles";

export const metadata = {
  title: "Contact | Engineering Growth",
  description: "Ready to scale your business? Let's start the journey.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black pt-20 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section for Context */}
        <div className="mb-12 md:mb-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">
            Get in touch.
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl max-w-2xl">
            Have a project in mind? We engineer the systems that scale businesses. 
            Let&apos;s start the conversation.
          </p>
        </div>

        {/* PC Layout: Form (Left) | Info (Right) 
            Mobile Layout: Stacks (Form on top)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT: The Form Component */}
          <div className="order-1">
            <ContactFormSection />
          </div>

          {/* RIGHT: The Info Component */}
          <div className="order-2 lg:sticky lg:top-32">
            <ContactInfo />
            <SocialHandles />
          </div>

        </div>
      </div>
    </main>
  );
}