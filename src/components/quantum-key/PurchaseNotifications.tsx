import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

interface Notification {
  id: number;
  name: string;
  location: string;
  time: string;
}

interface PurchaseNotificationsProps {
  purchaseText: string;
  justNowText: string;
  notifications: Array<{ name: string; location: string }>;
}

const PurchaseNotifications = ({
  purchaseText,
  justNowText,
  notifications,
}: PurchaseNotificationsProps) => {
  const [activeNotification, setActiveNotification] = useState<Notification | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const showRandomNotification = () => {
      const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];

      setActiveNotification({
        id: Date.now(),
        name: randomNotification.name,
        location: randomNotification.location,
        time: justNowText,
      });
      setShowNotification(true);

      // Hide after 6 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 6000);
    };

    // Show first notification after 2 seconds
    const initialTimeout = setTimeout(showRandomNotification, 2000);

    // Show new notification every 10-18 seconds
    const interval = setInterval(() => {
      showRandomNotification();
    }, Math.random() * 8000 + 10000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [notifications, justNowText]);

  if (!activeNotification) return null;

  return (
    <div
      className={`fixed bottom-2 left-2 md:bottom-6 md:left-6 z-50 transition-all duration-700 ease-out ${
        showNotification
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-8 opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-2 py-2 md:px-6 md:py-4 rounded-lg md:rounded-xl shadow-2xl flex items-start gap-2 md:gap-4 max-w-[200px] md:max-w-sm border md:border-2 border-green-400/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
        <div className="flex-shrink-0 mt-0.5">
          <CheckCircle2 className="w-4 h-4 md:w-7 md:h-7 animate-pulse drop-shadow-lg" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-[10px] md:text-base mb-0.5 md:mb-1 truncate">{activeNotification.name}</p>
          <p className="text-[8px] md:text-xs text-green-100 mb-1 md:mb-2 truncate">{activeNotification.location}</p>
          <p className="text-[9px] md:text-sm font-semibold">{purchaseText}</p>
          <p className="text-[8px] md:text-xs text-green-200 mt-0.5 md:mt-1 font-medium">{activeNotification.time}</p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseNotifications;
