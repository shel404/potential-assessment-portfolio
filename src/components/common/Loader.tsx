import { FC } from "react";

const Loader: FC = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-black-800 z-50 flex flex-col items-center justify-center gap-8 transition-opacity duration-300">
      <div className="relative">
        <img
          src="/src/assets/images/logo-symbol.png"
          alt="Profile"
          className="w-20 h-20 rounded-full"
        />
        <div className="absolute inset-[-10px] border-4 border-gray-200 dark:border-gray-700 border-t-orange-500 dark:border-t-orange-500 rounded-full animate-spin"></div>
      </div>
      <p className="text-black-900 dark:text-white text-xl font-medium">
        Loading...
      </p>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        Press{" "}
        <kbd className="px-2 py-1 bg-gray-100 dark:bg-black-700 rounded">
          Ctrl
        </kbd>{" "}
        +{" "}
        <kbd className="px-2 py-1 bg-gray-100 dark:bg-black-700 rounded">
          Alt
        </kbd>{" "}
        +{" "}
        <kbd className="px-2 py-1 bg-gray-100 dark:bg-black-700 rounded">D</kbd>{" "}
        to toggle theme
      </p>
    </div>
  );
};

export default Loader;
