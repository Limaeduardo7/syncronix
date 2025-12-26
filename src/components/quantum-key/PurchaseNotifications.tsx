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
  minutesAgoText: string;
  notifications: Array<{ name: string; location: string }>;
}

const PurchaseNotifications = ({
  purchaseText,
  justNowText,
  minutesAgoText,
  notifications,
}: PurchaseNotificationsProps) => {
  const [activeNotification, setActiveNotification] = useState<Notification | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const showRandomNotification = () => {
      const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
      const minutesAgo = Math.floor(Math.random() * 10) + 1;
      const timeText = minutesAgo === 1 ? justNowText : `${minutesAgo} ${minutesAgoText}`;

      setActiveNotification({
        id: Date.now(),
        name: randomNotification.name,
        location: randomNotification.location,
        time: timeText,
      });
      setShowNotification(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    };

    // Show first notification after 3 seconds
    const initialTimeout = setTimeout(showRandomNotification, 3000);

    // Show new notification every 15-25 seconds
    const interval = setInterval(() => {
      showRandomNotification();
    }, Math.random() * 10000 + 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [notifications, justNowText, minutesAgoText]);

  if (!activeNotification) return null;

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ${
        showNotification
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-lg shadow-2xl flex items-start gap-4 max-w-sm border border-green-400/50 backdrop-blur-sm">
        <div className="flex-shrink-0 mt-1">
          <CheckCircle2 className="w-6 h-6 animate-pulse" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm mb-1">{activeNotification.name}</p>
          <p className="text-xs text-green-100 mb-1">{activeNotification.location}</p>
          <p className="text-xs font-semibold">{purchaseText}</p>
          <p className="text-xs text-green-200 mt-1">{activeNotification.time}</p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseNotifications;
