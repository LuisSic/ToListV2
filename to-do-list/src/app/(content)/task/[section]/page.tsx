export default async function Home({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  return <div>My Post: {section}</div>;
}
