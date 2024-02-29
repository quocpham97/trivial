import { NextResponse } from 'next/server';
import { client } from '@/utils/axios';

export async function GET(request: Request) {
  try {
    const params = new URL(request.url).searchParams.toString();

    const { data } = await client.get(`/titles?${params}`, {
      headers: {
        'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_API_KEY}`,
        'X-RapidAPI-Host': `${process.env.NEXT_PUBLIC_API_HOST}`,
      },
    });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return new NextResponse(`${error}`, { status: 500 });
  }
}
