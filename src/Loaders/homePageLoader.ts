import { defer, json } from "react-router-dom";

interface ApiResponse {
  status: number;
  message: string;
  res: object;
}

function simulateAPICall(): Promise<ApiResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        message: "Success",
        res: {},
      });
    }, 2000);
  });
}

async function loader(): Promise<ApiResponse> {
  try {
    const homePageApiRes = await simulateAPICall();
    return homePageApiRes;
  } catch (e) {
    throw json({
      status: 500,
      message: "Sorry something went wrong , please try again ",
      res: {},
    });
  }
}

const homePageLoader = () => {
  return defer({
    common: loader(),
  });
};

export default homePageLoader;
