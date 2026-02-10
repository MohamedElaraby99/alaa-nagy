import React from "react";
import { FaAndroid, FaDownload } from "react-icons/fa";

const APK_URL = "/app-release.apk";
const APK_FILENAME = "منصة-مستر-علاء-ناجي.apk";

const DownloadApp = ({ className = "" }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = APK_URL;
    link.download = APK_FILENAME;
    link.target = "_blank";

    if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
      window.open(APK_URL, "_blank");
    } else {
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section
      className={`py-16 px-4 lg:px-8 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 ${className}`}
      dir="rtl"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-10 bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
          {/* Icon & Text */}
          <div className="flex items-center gap-6 text-center md:text-right">
            <div className="flex-shrink-0 w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
              <FaAndroid className="text-4xl text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                حمّل تطبيق أندرويد
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                استخدم المنصة من جوالك - حمّل التطبيق واستمتع بالتعلم أينما كنت
              </p>
            </div>
          </div>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <FaDownload className="text-xl" />
            <span>تحميل التطبيق (APK)</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
