import { useRouter } from 'next/router';

export default function BusinessDemo() {
  const router = useRouter();
  const { business } = router.query;

  return <div>Business route is working for: {business}</div>;
}
