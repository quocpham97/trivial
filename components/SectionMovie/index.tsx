import React from 'react';
import { unstable_noStore as noStore } from 'next/cache';
import { Genre, Movie } from '@/types/movie';
import { ResponseAPI } from '@/types/common';
import { fetchApi } from '@/utils/fetchApi';
import CardMovie from '../CardMovie';

async function SectionMovie({ genre }: { genre: Genre }) {
  noStore();
  const movies = await fetchApi(`limit=6&year=2022&genre=${genre}`).then(
    (res) => res as ResponseAPI<Movie>,
  );

  return (
    <div>
      <p className="text-lg uppercase font-semibold">{genre}</p>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
        {movies.results.map((movie) => (
          <div key={movie._id}>
            <CardMovie url={movie.primaryImage?.url || ''} title={movie.titleText.text} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionMovie;
