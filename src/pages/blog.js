import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import Head from '@components/Head';
import BackgroundStars from '@components/BackgroundStars';
import BlogPage from '@scenes/BlogPage';

const Blog = () => {
  const title = 'Blog - Halo Lab';
  const description = `If you would like to find some useful articles about digital products - welcome to our blog page. Here we tell you about design and development, we share our case studies with you, and we talk about logos and branding.`;

  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head title={title} description={description}></Head>
        <BlogPage />
      </Layout>
    </Providers>
  );
};

export default Blog;
