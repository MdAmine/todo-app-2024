import React from "react";
import { render, waitFor } from "@testing-library/react";
import DevInfo from "../src/components/About/DevInfo/DevInfo";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        login: "oumaimaelmardi",
        id: 82413301,
        avatar_url: "https://avatars.githubusercontent.com/u/82413301?v=4",
      }),
    ok: true,
  })
);
test("renders user info if login exists", async () => {
  const { getByText } = render(
    <BrowserRouter>
      {" "}
      <DevInfo setIsLoggedIn={undefined} />
    </BrowserRouter>
  );

  await waitFor(() => {
    expect(getByText(/Developer Info/i)).toBeInTheDocument();
  });

  expect(getByText(/Developer Info/i)).toBeInTheDocument();
  expect(getByText(/ID: 82413301/)).toBeInTheDocument();

  expect(getByText(/Login: oumaimaelmardi/)).toBeInTheDocument();
});
