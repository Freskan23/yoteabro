import { AlertCircle, X } from "lucide-react";
import { useState } from "react";
import { useDynamicPricing, getWarningMessage } from "@/hooks/useDynamicPricing";

export default function PricingWarningBanner() {
  const { showWarning, minutesUntilChange, isNormalHours } = useDynamicPricing();
  const [dismissed, setDismissed] = useState(false);

  if (!showWarning || dismissed || minutesUntilChange === null) {
    return null;
  }

  const message = getWarningMessage(minutesUntilChange, isNormalHours);

  return (
    <div className="bg-amber-500 text-white py-3 px-4 relative animate-pulse">
      <div className="container flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <p className="text-sm md:text-base font-semibold">
            {message}
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="p-1 hover:bg-amber-600 rounded transition-colors"
          aria-label="Cerrar aviso"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

