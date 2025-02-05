import Home from './home'

import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Havion Solutions Pvt Ltd | Work With Us.",
  description: "Havion Solutions specializes in providing a comprehensive range of IT solutions designed to enhance business operations and digital presence. Our services are tailored to meet the unique needs of each client, utilizing the latest tools and techniques to deliver effective and efficient IT solutions.",
  alternates: {
    canonical: 'https://havionsolutions/',
  },
};


export default function App() {

  return (
    <Home/>
  );
}

