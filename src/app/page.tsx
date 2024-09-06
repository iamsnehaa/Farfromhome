import Image from "next/image";
import { data } from "@/lib/data/data";
import { backgroundImage } from "@/lib/data/data";

export default function Home() {
  return (
    <div className="bg-green-50 min-h-screen">
      {/* Hero Section */}
      <div className="flex justify-center items-center mt-0 py-8">
  <div
    className="relative bg-cover bg-center bg-no-repeat max-w-2xl w-full h-72 p-6 rounded-lg shadow-lg border border-earthy-brown"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* Brown overlay for agriculture theme */}
    <div className="absolute inset-0 bg-earthy-brown opacity-40 rounded-lg"></div>
  </div>
</div>
 
      {/* Products Section */}
      <div className="py-14 bg-green-50">
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl px-4 mx-auto">
            {data.map((product, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-200"
              >
                <div className="h-40 w-full bg-green-100 flex items-center justify-center rounded-md mb-4 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h2 className="text-xl font-semibold text-green-800">{product.name}</h2>
                <p className="text-green-600 mb-2">Price: {product.price}</p>
                <p className="text-green-600">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-14 bg-white mx-5">
        <main className="container mx-auto px-4">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h2>
            <p className="text-green-600">
              At Far From Home, our mission is to connect contractors and farmers across regions, fostering collaboration, growth, and sustainable development. We believe in empowering local communities by bridging the gap between agriculture and modern contracting services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Our Story</h2>
            <p className="text-green-600">
              Established in 2024, Far From Home was born out of a need to address the challenges faced by both farmers and contractors in finding reliable partnerships. We saw the potential for a platform that could bring these two groups together, and thus, our journey began.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-800 mb-4">What We Offer</h2>
            <p className="text-green-600">
              Our platform provides a comprehensive solution for contractors and farmers to connect, collaborate, and succeed. Whether you&apos;re looking for skilled labor, equipment, or agricultural expertise, Far From Home is your go-to resource.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Why Choose Us?</h2>
            <p className="text-green-600">
              We are committed to delivering a seamless and reliable experience. Our platform is built with the latest technologies, ensuring security, performance, and ease of use. We prioritize the needs of our users and continually improve our services based on their feedback.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Meet the Team</h2>
            <p className="text-green-600">
              Far From Home is powered by a dedicated team of professionals with a passion for agriculture and technology. Our diverse backgrounds in farming, contracting, and software development allow us to create innovative solutions that truly make a difference.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Get in Touch</h2>
            <p className="text-green-600">
              We&apos;d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us via our contact page or follow us on social media.
            </p>
          </section>
        </main>
      </div>

      {/* Contact Section */}
      <div className="bg-green-50 py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-green-800 mb-4">Contact Us</h1>
          <p className="text-green-600">Email: one@gmail.com</p>
          <p className="text-green-600">Phone number: 123456789</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Far From Home. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
