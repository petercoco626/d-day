import Head from 'next/head';
//
interface Props {
  title: string;
  description: string;
  url: string;
  image?: string;
  keywords: string;
}

export default function HeadMeta({
  title,
  description,
  url,
  image,
  keywords,
}: Props) {
  return (
    <Head>
      <title>{title}</title>
      {/* <link rel="icon" href="/favicons/favicon.ico" /> */}
      {/* <link rel="shortcut icon" href="/favicons/favicon.ico" /> */}
      <meta name="description" content={description} />
      <meta name="canoical" content={url} />
      <meta name="author" content="zizzi Inc" />
      <meta name="keywords" content={keywords} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      {/* <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta name="og:description" content={description} />
      <meta property="og:url" content={url} /> */}
      {/* <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/favicons/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/favicons/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/favicons/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicons/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/favicons/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/favicons/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/favicons/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/favicons/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicons/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicons/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" /> */}
      {/* NAVER SEO */}
      <meta
        name="naver-site-verification"
        content="a2991169cde6ad6c2d353014fded364a1fd6c243"
      />
      {/* google ads */}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3558716632638870"
        crossOrigin="anonymous"
      ></script>
      <meta name="theme-color" content="#ffffff"></meta>
    </Head>
  );
}
