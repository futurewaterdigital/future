// components/CollectScript.js
import { useEffect } from "react";

const CollectScript = () => {
  useEffect(() => {
    // Script to be injected
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://collectcdn.com/launcher.js";
    script.onload = () => {
      window.CollectId = "676ead2a8272c8d2e7e3772a";
    };

    // Append script to the document head
    document.head.appendChild(script);

    // Cleanup function to remove the script when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default CollectScript;
