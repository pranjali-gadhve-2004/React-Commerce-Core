// import { createContext, useState } from "react";

// export const UIContext = createContext();

// export function UIProvider({ children }) {
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   function showLoader() {
//     setLoading(true)
//   }

//   function hideLoader() {
//     setLoading(false)
//   }

//   function showMessage(text) {
//     setMessage(text)
//   }

//   return (
//     <UIContext.Provider
//       value={{
//         loading,
//         message,
//         showLoader,
//         hideLoader,
//         showMessage,
//       }}
//     >
//       {children}
//     </UIContext.Provider>
//   );
// }