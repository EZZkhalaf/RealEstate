import { Icon } from "@iconify/react";

const WebsiteAdvantages = () => {
  return (
    <div className="w-full flex justify-around px-10 text-white mb-6">
      {/* Expert Guidance */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
          <Icon
            icon="mdi:account-tie" // changed to mdi:
            width="24"
            height="24"
            color="white"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg">Expert Guidance</h3>
          <p className="text-xs">
            Professional investment advisors with 10+ years experience
          </p>
        </div>
      </div>

      {/* Secure Investments */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
          <Icon
            icon="mdi:shield-check" // changed to mdi:
            width="24"
            height="24"
            color="white"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg">Secure Investments</h3>
          <p className="text-xs">
            Thoroughly vetted properties with guaranteed returns
          </p>
        </div>
      </div>

      {/* Proven Results */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
          <Icon
            icon="mdi:chart-line-variant" // changed to mdi:
            width="24"
            height="24"
            color="white"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg">Proven Results</h3>
          <p className="text-xs">
            Average 8.5% ROI across our investment portfolio
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebsiteAdvantages;
