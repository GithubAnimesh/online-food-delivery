import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStrore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button");
  expect(loginButton).toBeInTheDocument();
});

it("Should load Header Component with cart items login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByText("Cart (0 items)");
  expect(loginButton).toBeInTheDocument();
});

it("Should fully cover the handleToggle function", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Select the login button
  const loginButton = screen.getByRole("button", { name: "Login" });

  // Verify initial state
  expect(loginButton.textContent).toBe("Login");
  const offlineStatus = screen.getByText("Online Status: ❌");
  expect(offlineStatus).toBeInTheDocument();

  // Simulate a click to toggle to "LogOut"
  fireEvent.click(loginButton);
  expect(loginButton.textContent).toBe("LogOut");
  const onlineStatus = screen.getByText("Online Status: ✅");
  expect(onlineStatus).toBeInTheDocument();

  // Simulate another click to toggle back to "Login"
  fireEvent.click(loginButton);
  expect(loginButton.textContent).toBe("Login");
  const updatedOfflineStatus = screen.getByText("Online Status: ❌");
  expect(updatedOfflineStatus).toBeInTheDocument();
});
