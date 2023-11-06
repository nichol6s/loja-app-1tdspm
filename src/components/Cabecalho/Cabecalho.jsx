import Link from "next/link"

export default function Cabecalho() {
  return (
    <header className="cabecalho ">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
        <Link href="/consumo/fruta-view">Frutas</Link>
        <Link href="/produtos/mamao">Mamão</Link>
        <Link href="/produtos/melao">Melão</Link>
        <Link href="/produtos/manga">Manga</Link>
      </nav>
    </header>
  )
}
