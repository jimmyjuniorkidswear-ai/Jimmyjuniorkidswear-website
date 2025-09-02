// pages/index.js
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const categories = [
    {
      name: "Boys",
      href: "#boys",
      img: "https://images.unsplash.com/photo-1619785292559-7f3f9b6b1b2a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Girls",
      href: "#girls",
      img: "https://images.unsplash.com/photo-1519455953755-af066f52f1ea?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Baby",
      href: "#baby",
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Accessories",
      href: "#accessories",
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const currencies = ["INR ₹", "USD $", "AED د.إ"];
  const languages = ["English", "हिंदी", "اردو"];

  return (
    <>
      <Head>
        <title>Jimmy Junior Kidswear</title>
        <meta
          name="description"
          content="Trendy & comfy kidswear for Boys, Girls & Baby. Shop Jimmy Junior Kidswear."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Top bar */}
      <div className="w-full bg-black text-white text-xs md:text-sm">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-2">
          <p className="truncate">Free shipping on orders over ₹999</p>
          <div className="flex items-center gap-2">
            <select className="bg-black border border-white/20 rounded px-2 py-1">
              {languages.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
            <select className="bg-black border border-white/20 rounded px-2 py-1">
              {currencies.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
          <Link href="/" className="font-extrabold text-2xl">
            Jimmy <span className="text-pink-600">Junior</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#boys" className="hover:text-pink-600">Boys</a>
            <a href="#girls" className="hover:text-pink-600">Girls</a>
            <a href="#baby" className="hover:text-pink-600">Baby</a>
            <a href="#accessories" className="hover:text-pink-600">Accessories</a>
          </div>
          <a
            href="https://wa.me/919999999999?text=Hi%20Jimmy%20Junior,%20I%20want%20to%20shop%20kidswear"
            className="rounded-2xl px-4 py-2 text-white bg-green-600 hover:bg-green-700 text-sm"
          >
            WhatsApp
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-6 items-center py-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Trendy. Comfy. <span className="text-pink-600">Kidswear</span>.
            </h1>
            <p className="mt-4 text-gray-600">
              Premium outfits for boys, girls & babies—perfect for playtime and parties.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#categories"
                className="rounded-2xl px-5 py-3 bg-pink-600 text-white hover:bg-pink-700 text-sm"
              >
                Shop Categories
              </a>
              <a
                href="mailto:hello@jimmyjunior.com"
                className="rounded-2xl px-5 py-3 border text-sm"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1495462911434-be47104d70fa?q=80&w=1600&auto=format&fit=crop"
              alt="Kidswear banner"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold">Shop by Category</h2>
          <a href="#new" className="text-pink-600 text-sm">View New Arrivals →</a>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((c) => (
            <a
              key={c.name}
              href={c.href}
              className="group rounded-2xl overflow-hidden border hover:shadow-lg transition"
            >
              <div className="relative">
                <img
                  src={c.img}
                  alt={c.name}
                  className="h-44 w-full object-cover group-hover:scale-105 transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white font-semibold">
                  {c.name}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Highlight strip */}
      <section className="bg-gray-50 border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 grid md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="font-semibold">Soft, Skin-Friendly Fabrics</p>
            <p className="text-sm text-gray-600">Perfect for delicate baby skin</p>
          </div>
          <div>
            <p className="font-semibold">Easy Returns</p>
            <p className="text-sm text-gray-600">Hassle-free 7 day policy</p>
          </div>
          <div>
            <p className="font-semibold">COD Available</p>
            <p className="text-sm text-gray-600">Pay when it arrives</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="font-extrabold text-xl">Jimmy <span className="text-pink-600">Junior</span></div>
            <p className="mt-3 text-gray-600">Quality kidswear for every moment.</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Shop</p>
            <ul className="space-y-1 text-gray-600">
              <li><a href="#boys">Boys</a></li>
              <li><a href="#girls">Girls</a></li>
              <li><a href="#baby">Baby</a></li>
              <li><a href="#accessories">Accessories</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Support</p>
            <ul className="space-y-1 text-gray-600">
              <li><a href="mailto:hello@jimmyjunior.com">Email</a></li>
              <li><a href="tel:+919999999999">Call</a></li>
              <li><a href="#">Shipping & Returns</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Follow</p>
            <ul className="space-y-1 text-gray-600">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 pb-6">
          © {new Date().getFullYear()} Jimmy Junior Kidswear. All rights reserved.
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919999999999?text=Hi%20Jimmy%20Junior,%20I%20want%20to%20shop%20kidswear"
        className="fixed bottom-5 right-5 rounded-full shadow-lg bg-green-600 text-white px-5 py-3"
        aria-label="Chat on WhatsApp"
      >
        Chat on WhatsApp
      </a>
    </>
  );
}
