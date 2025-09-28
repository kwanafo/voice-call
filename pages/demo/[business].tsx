import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function BusinessDemo() {
  const router = useRouter();
  const { business } = router.query;
  const [demo, setDemo] = useState(null);

  useEffect(() => {
    if (!router.isReady) return;

    fetch('/data/abacus_payloads.json')
      .then((res) => res.json())
      .then((payloads) => {
        const match = payloads.find(
          (item) =>
            item.business_name.toLowerCase().replace(/\s+/g, '-') === business
        );
        setDemo(match);
      });
  }, [router.isReady, business]);

  if (!demo) return <div>No demo found for: {business}</div>;

  return (
    <div>
      <h1>{demo.business_name}</h1>
      <p>{demo.description}</p>
      <p>{demo.call_to_action}</p>
      <p>{demo.call_to_return}</p>
    </div>
  );
}
 