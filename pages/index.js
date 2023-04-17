// import Head from 'next/head'
// import Header from '@components/Header'
// import Footer from '@components/Footer'
// import CalHeatmap from 'cal-heatmap';

// // Optionally import the CSS
// import 'cal-heatmap/cal-heatmap.css';

// const cal = new CalHeatmap();
// cal.paint({});

// export default function Home() {
//   return (
//     <div className="container">
//       <Head>
//         <title>Next.js Starter!</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         <Header title="Welcome to my app!" />
//         <div id="cal-heatmap"></div>
//       </main>

//       <Footer />
//     </div>
//   )
// }

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import CalHeatmap from 'cal-heatmap';
import { useEffect, useRef } from 'react';

// Optionally import the CSS
import 'cal-heatmap/cal-heatmap.css';

export default function Home() {
  const calHeatmapRef = useRef(null);

  useEffect(() => {
    if (calHeatmapRef.current) {
      const cal = new CalHeatmap();
      cal.paint(calHeatmapRef.current);
    }
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <div id="cal-heatmap" ref={calHeatmapRef}></div>
      </main>

      <Footer />
    </div>
  )
}

