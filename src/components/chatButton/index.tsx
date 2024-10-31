import { useState, useEffect } from 'react';
import { tw } from 'twind';

interface ChatButtonProps {
  delay?: number;
  tooltipDuration?: number;
}

const ChatButton: React.FC<ChatButtonProps> = ({
  delay = 3000,
  tooltipDuration = 5000
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const buttonTimer = setTimeout(() => {
      setIsVisible(true);
      setShowTooltip(true);
    }, delay);

    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, delay + tooltipDuration);

    return () => {
      clearTimeout(buttonTimer);
      clearTimeout(tooltipTimer);
    };
  }, [delay, tooltipDuration]);

  if (!isVisible) return null;

  return (
    <div className={tw`fixed bottom-8 right-8 z-50 md:bottom-12 md:right-12`}>
      {showTooltip && (
        <div className={tw`absolute top-1/2 right-full -translate-y-1/2 mr-2 rounded-lg bg-white px-4 py-2 shadow-lg`}>
          <p className={tw`text-sm text-gray-700 whitespace-nowrap`}>
            Задайте любой вопрос ИИ чат-боту
          </p>
          <div className={tw`absolute top-1/2 -right-1.5 h-3 w-3 -translate-y-1/2 rotate-45 bg-white`} />
        </div>
      )}

      <a
        href="http://ai.comfortstroy.pro/"
        target="_blank"
        rel="noopener noreferrer"
        className={tw`flex h-14 w-14 items-center justify-center rounded-full bg-[#E87317] shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2`}
      >
        <svg
          className={tw`h-6 w-6 text-white`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </a>
    </div>
  );
};

export default ChatButton;