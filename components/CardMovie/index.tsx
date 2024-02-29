'use client';

import React from 'react';
import Image from 'next/image';

function CardMovie({ url, title }: { url: string; title: string }) {
  return (
    <div className="relative w-full min-h-[128px] sm:min-h-[132px] lg:min-h-[160px] xl:min-h-[300px] ">
      <Image src={url} alt={title} sizes="400px" fill style={{ objectFit: 'contain' }} />
    </div>
  );
}

export default CardMovie;
