// ...rest of imports and code remain unchanged

export default function BlogPost() {
  // ...post fetching logic unchanged

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-950">
      <SiteHeader />
      <main className="container mx-auto max-w-3xl px-6 py-12 pt-28">
        <article className="bg-white dark:bg-indigo-900/80 p-8 rounded-2xl shadow-lg ring-1 ring-indigo-100 dark:ring-indigo-800">
          <BlogStructuredData post={post} />
          <div className="relative h-64 w-full mb-8">
            <Image
              src={post.image}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <h1 className="text-4xl font-extrabold mb-6 text-indigo-900 dark:text-indigo-200 drop-shadow-md">{post.title}</h1>
          <div className="flex items-center text-gray-600 dark:text-gray-300 mb-8">
            <span className="mr-4">{post.date}</span>
            <span>By {post.author}</span>
          </div>

          {/* SEO-optimized first paragraph */}
          <section className="mb-8">
            <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-100">
              Looking for personalized nutrition tailored specifically to you? <strong>AI Diet Calculator</strong> is a service that leverages cutting-edge artificial intelligence technology to provide tailored meal plans, aiming to make personalized nutrition accessible to everyone. Founded by a team of nutrition experts and AI enthusiasts, our platform believes a one-size-fits-all approach is outdated. We consider your unique preferences, dietary restrictions, and health goals to create meal plans that are as individual as you are. These plans are designed not only to meet your dietary needs but also to introduce variety and excitement to healthy eating.
            </p>
          </section>

          {/* Improved intro for this post */}
          <section className="mb-8">
            <p className="text-lg leading-relaxed text
