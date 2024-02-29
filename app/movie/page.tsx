import React, { Suspense } from 'react';
import { unstable_noStore as noStore } from 'next/cache';
import Loading from '@/components/Loading';
import SectionMovie from '@/components/SectionMovie';
import { fetchApi } from '@/utils/fetchApi';
import { ListMovieCategories } from '@/constants/movie';
import { Genre } from '@/types/movie';

export default async function MoviePage() {
  noStore();
  await fetchApi(`limit=6&year=2022`, 5);

  return (
    <div>
      <div className="flex justify-center py-2 bg-white">
        <p className="font-bold text-3xl text-gray-700">MOVIE</p>
      </div>
      <div className="flex flex-col justify-center items-center py-4 bg-black">
        <div className="max-w-[1440px] w-[320px] sm:w-[600px] md:w-[680px] lg:w-[800px] xl:w-[1400px] flex flex-col gap-10">
          {ListMovieCategories.map((category) => (
            <Suspense key={category} fallback={<Loading genre={category as Genre} />}>
              <SectionMovie genre={category as Genre} />
            </Suspense>
          ))}
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  );
}
