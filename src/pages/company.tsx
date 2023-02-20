import { Company_Module } from '@/modules/imports';
import Head from 'next/head';
import React from 'react'

function Company() {
  return (
    <>
      <Head>
        <title>Company Page</title>
      </Head>
      <Company_Module />
    </>
  )
}

export default Company