import Image from "next/image"

export default function NotFound() {
  return (
    <div>
        <h1>OOPS!</h1>
        <div>
          <figure>
            <Image src="https://http.cat/images/404.jpg" alt="Gato 404" width={750} height={600}/>
          </figure>
        </div>
        <h2>Essa página não foi encontrada</h2>
    </div>
  )
}
