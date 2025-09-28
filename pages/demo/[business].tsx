import { useRouter } from 'next/router';
import payloads from '../../data/abacus_payloads.json';

export default function BusinessDemo() {
  const router = useRouter();
  const { business } = router.query;

  if (!router.isReady) return <div>Loading...</div>;

  const demo = payloads.find(
    (item) =>
      item.business_name.toLowerCase().replace(/\s+/g, '-') === business
  );

  if (!demo) {
    return <div>No demo found for: {business}</div>;
  }

  return (
    <div>
      <h1>{demo.business_name}</h1>
      <p>{demo.script}</p>
      <p>
        <strong>Website:</strong>{' '}
        <a href={demo.website} target="_blank" rel="noopener noreferrer">
          {demo.website}
        </a>
      </p>
      <p>
        <strong>Email:</strong> {demo.email}
      </p>
      <p>
        <strong>Phone:</strong> {demo.phone}
      </p>
      <video src={`/videos/${business}.mp4`} controls width="600" />
      <p>{demo.video_elements.call_to_action}</p>
    </div>
  );
}
