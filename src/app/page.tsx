"use client";

import Layout from "@/components/layouts/Layout";
import { decrement, increment, selectCount } from "@/stores/couterSlice";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import Link from "next/link";

export default function Home() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <Layout>
      <div className="mt-[150px] flex flex-col justify-center items-center">
        <div className="flex">
          <Link href={"/test"} className="text-blue-500 mr-2">
            /test Layout test page
          </Link>
          {`<- click`}
        </div>
        <div className="flex items-center mt-48 ">
          <span className="w-10 text-center mr-5 text-lg font-semibold">
            {count}
          </span>
          <button
            className=" btn text-white bg-blue-500 py-1 px-2 rounded-md mr-2 hover:opacity-80 active:opacity-60"
            onClick={() => dispatch(increment())}
          >
            up
          </button>
          <button
            className=" btn text-white bg-red-500 py-1 px-2 rounded-md mr-2 hover:opacity-80 active:opacity-60"
            onClick={() => dispatch(decrement())}
          >
            down
          </button>
        </div>
      </div>
    </Layout>
  );
}
