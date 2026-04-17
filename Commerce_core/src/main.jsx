import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { ProductProvider } from "./context/ProductProvider";
import { CartProvider } from "./context/Cardcontext";
import { AuthProvider } from "./context/AuthProvider";
import { OrderProvider } from "./context/OrderProvider";
import { UIProvider } from "./context/UIProvider";

ReactDOM.createRoot(document.getElementById("root")).render(

  <BrowserRouter>

    <UIProvider>

      <AuthProvider>

        <ProductProvider>

          <CartProvider>

            <OrderProvider>

              <App />

            </OrderProvider>

          </CartProvider>

        </ProductProvider>

      </AuthProvider>

    </UIProvider>

  </BrowserRouter>

);