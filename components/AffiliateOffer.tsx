interface AffiliateOfferProps {
  title: string;
  description: string;
  link: string;
}

export function AffiliateOffer({ title, description, link }: AffiliateOfferProps) {
  return (
    <div className="my-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-100 shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-purple-900 mb-2">{title}</h3>
          <p className="text-lg text-purple-800 mb-4">{description}</p>
          <a
            href={link}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
