import { useSelector } from 'react-redux';

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className={theme}>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          theme === 'dark'
            ? 'bg-[#0f0f0f] text-yellow-100'   // Deep black background, soft yellow text
            : 'bg-gray-50 text-gray-900'       // Soft white background, black text
        }`}
      >
        {children}
      </div>
    </div>
  );
}
