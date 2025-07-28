// Import client logos
import client1 from "@/assets/logos/client-1.png";
import client2 from "@/assets/logos/client-2.png";
import globalReader from "@/assets/logos/global-reader.png";
import shieldRepublic from "@/assets/logos/shield-republic.png";
import client5 from "@/assets/logos/client-5.png";
import client6 from "@/assets/logos/client-6.png";
import client7 from "@/assets/logos/client-7.png";
import client8 from "@/assets/logos/client-8.png";
import client9 from "@/assets/logos/client-9.png";
import client10 from "@/assets/logos/client-10.png";

const ClientLogos = () => {
  // Real client logos from invozone.com
  const clients = [
    { name: "Client 1", logo: client1 },
    { name: "Client 2", logo: client2 },
    { name: "Global Reader", logo: globalReader },
    { name: "Shield Republic", logo: shieldRepublic },
    { name: "Client 5", logo: client5 },
    { name: "Client 6", logo: client6 },
    { name: "Client 7", logo: client7 },
    { name: "Client 8", logo: client8 },
    { name: "Client 9", logo: client9 },
    { name: "Client 10", logo: client10 },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Single-line stats with blue accent */}
        <div className="text-center mb-10">
          <span className="text-lg md:text-xl font-medium text-gray-700">
            <span className="text-[#0070f3] font-bold">400+</span> Products Developed For <span className="text-[#0070f3] font-bold">300+</span> Customers Across <span className="text-[#0070f3] font-bold">120+</span> Countries.
          </span>
        </div>
        {/* Logos in two rows, centered, with proper spacing */}
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 w-full">
            {clients.slice(0, 5).map((client, idx) => (
              <div key={idx} className="flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 md:h-16 object-contain filter grayscale hover:grayscale-0 transition duration-300"
                  style={{ maxWidth: '120px' }}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 w-full">
            {clients.slice(5, 10).map((client, idx) => (
              <div key={idx} className="flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 md:h-16 object-contain filter grayscale hover:grayscale-0 transition duration-300"
                  style={{ maxWidth: '120px' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;