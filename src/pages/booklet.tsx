import { BookletModule } from "@/modules/imports";
import Head from "next/head";
import React from "react";

const Booklet = () => {
  return (
    <>
      <Head>
        <title>Booklet Info</title>
      </Head>
      <BookletModule />
    </>
  );
};

export default Booklet;
