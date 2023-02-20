import React from 'react';
import { CompanyBanner, CompanyNews } from '@/components/imports';
import {Container} from '../constant/imports';

function Company_Module() {
  return (
    <>
      <CompanyBanner />
      <section className="py-20 md:py-36 bg-[url('../../public/svg/whyusdiamond.svg')] bg-no-repeat bg-cover">
        <Container>          
          <CompanyNews />
        </Container>
      </section>
    </>
  )
}

export default Company_Module