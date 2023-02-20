import Head from 'next/head';
import React from 'react';
import { Blog_Module } from '../modules/imports';

function Blog() {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Blog_Module />
    </>
  )
}

export default Blog