import React from 'react';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="A modern Airbnb clone built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-2xl font-bold text-blue-600">
          Welcome to ALX Listing App
        </h1>
        <p className="mt-4 text-gray-600">
          This is a starter template for the Airbnb clone project.
        </p>
      </main>
    </div>
  );
};

export default Home;