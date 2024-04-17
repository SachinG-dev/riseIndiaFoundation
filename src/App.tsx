import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { router } from "./routes/allRoutes";
import { Toasts } from "./components/atom/Toasts/Toasts";
import { store, persistor } from "./redux/configureStore";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        <Toasts />
      </PersistGate>
    </Provider>
  );
}

export default App;