// pages/index.js
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { shop_id, auth_code } = router.query;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Redirecionamento Shopee funcionando!</h1>
      {shop_id && auth_code ? (
        <>
          <p><strong>Shop ID:</strong> {shop_id}</p>
          <p><strong>Auth Code:</strong> {auth_code}</p>
          <p>Agora você pode usar esses dados para obter o access_token.</p>
        </>
      ) : (
        <p>Aguardando parâmetros da Shopee...</p>
      )}
    </div>
  );
}
