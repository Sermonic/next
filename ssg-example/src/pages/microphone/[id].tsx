import { Microphone } from "../../../model/Microphone";
import { GetStaticProps, GetStaticPaths } from "next";
import { openDB } from "../../openDB";
import { useRouter } from 'next/router';

export type MicrophoneDetailProps = Microphone;

export default function MicrophoneDetail({ id, brand, model, price, imageUrl } : MicrophoneDetailProps) {
  const router = useRouter();

  if(router.isFallback) {
    return <div>Loading..</div>
  }
  
  return (
    <div>
      <div>{id}</div>
      <div>{brand}</div>
      <div>{model}</div>
      <div>{price}</div>
      <div>{imageUrl}</div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<MicrophoneDetailProps> = async ctx => {
  const id = ctx.params.id as string;
  const db = await openDB();
  const microphone = await db.get('select * from microphone where id = ?', +id)
  
  return { props: microphone };
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const db = await openDB();
  const microphones = await db.all('select * from microphone');
  const paths = microphones.map(a => {
    return { params: { id: a.id.toString() } }
  });
  
  return {
    fallback: true,
    paths 
  }
}
