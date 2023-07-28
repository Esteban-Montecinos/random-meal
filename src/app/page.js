import ObtenerComida from "./obtener-comida";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-5xl mx-auto flex-col gap-2 items-center justify-center p-4">
      <h1 className='text-3xl'>¿Tienes hambre?</h1>
      <span>Consiga una comida al azar haciendo clic a continuación.</span>
      <ObtenerComida/>
    </main>
  )
}
