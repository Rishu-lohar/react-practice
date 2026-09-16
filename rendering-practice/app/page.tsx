export default async function News() {

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      next: {
        revalidate: 300,
      },
    }
  );

  const news = await response.json();

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <h1 className="mb-6 text-3xl font-bold text-black">
        News
      </h1>

      <div className="space-y-4">
        {news.slice(0, 5).map(
          (item: { id: number; title: string }) => (
            <div
              key={item.id}
              className="rounded-lg bg-white p-5 shadow"
            >
              <h2 className="text-lg font-semibold text-black">
                {item.title}
              </h2>
            </div>
          )
        )}
      </div>

    </main>
  );
}