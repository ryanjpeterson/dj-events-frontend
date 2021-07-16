import { useRouter } from 'next/router';
import Layout from '../components/Layout';

export default function EventPage() {
  const router = useRouter();
  const slug = router.query.slug;

  return (
    <Layout title={`${slug} | DJ Events`}>
      <h1>Event Page</h1>
      <h3>{slug}</h3>
      <button onClick={() => router.push('/')}>Click</button>
    </Layout>
  );
}
