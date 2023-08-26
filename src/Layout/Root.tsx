import { Suspense } from "react";
import { Await, Outlet } from "react-router-dom";
import { homePageLoader } from "../Loaders";

export default function Root() {
  return (
    <section
      id="root-section-div"
      className="w-[100%] m-0 p-0 bg-background"
    >
      <Suspense fallback={<></>}>
        <Await
          resolve={homePageLoader}
          errorElement={<div className="w-full text-center">Error</div>}
        >
          <Outlet />
        </Await>
      </Suspense>
    </section>
  );
}
