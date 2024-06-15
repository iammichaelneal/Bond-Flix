import '../styles.css';

import type { ReactNode } from 'react';

// import { Header } from '../components/header';
// import { Footer } from '../components/footer';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();

  return (
    <div className="font-['Nunito']">
      <meta property="description" content={data.description} />
      <link rel="icon" type="image/png" href={data.icon} />
      {/*<Header />*/}
      <main className="">
        {children}
      </main>
      {/*<Footer />*/}
    </div>
  );
}

const getData = async () => {
  const data = {
    description: 'Bondflix - A Netflix Clone Project',
    icon: '/images/favicon.png',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
