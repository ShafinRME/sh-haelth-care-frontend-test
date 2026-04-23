import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import samplePhoto from '../../../assets/images/hero-doctor.jpg';

const testimonials = [
  {
    name: 'Robert Fox',
    role: 'Patient',
    image: samplePhoto,
    quote: 'The care and professionalism I received were outstanding. The doctors were knowledgeable and the staff was incredibly supportive throughout my treatment.',
    rating: 5,
  },
  {
    name: 'Jane Cooper',
    role: 'Patient',
    image: samplePhoto,
    quote: 'A seamless experience from booking an appointment to the consultation. The use of technology for prescriptions and follow-ups is very convenient.',
    rating: 5,
  },
  {
    name: 'Wade Warren',
    role: 'Patient',
    image: samplePhoto,
    quote: 'I highly recommend their services. The specialists are top-notch, and they truly focus on preventive care which has greatly improved my health.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30 py-20 md:py-24 lg:py-28">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-indigo-400/5 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
            <Star className="h-4 w-4 fill-blue-700" />
            Testimonials
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-3xl font-bold text-transparent lg:text-4xl">
            What Our Client Says
          </h2>
          <p className="text-base text-muted-foreground lg:text-lg">
            We are committed to providing you with the best medical and healthcare services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <Card
              key={testimonial.name}
              className="group relative overflow-hidden border-2 bg-white transition-all duration-300 hover:border-blue-200 hover:shadow-2xl hover:-translate-y-2"
            >
              <CardContent className="relative p-8">
                {/* Quote Icon */}
                <div className="absolute -right-4 -top-4 opacity-5 transition-all duration-300 group-hover:opacity-10 group-hover:scale-110">
                  <Quote className="h-32 w-32 text-blue-600" />
                </div>

                {/* Quote Text */}
                <div className="relative z-10 mb-8">
                  <div className="mb-6 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400 transition-transform group-hover:scale-110"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground group-hover:text-gray-700">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="relative z-10 flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 opacity-0 blur transition-opacity duration-300 group-hover:opacity-30" />
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="relative rounded-full ring-2 ring-white transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-blue-400/5 transition-transform duration-500 group-hover:scale-150" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-3 gap-8 rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100">
          <div className="text-center">
            <p className="mb-1 text-3xl font-bold text-blue-600 lg:text-4xl">
              4.9/5
            </p>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="mb-1 text-3xl font-bold text-blue-600 lg:text-4xl">
              10K+
            </p>
            <p className="text-sm text-muted-foreground">Happy Patients</p>
          </div>
          <div className="text-center">
            <p className="mb-1 text-3xl font-bold text-blue-600 lg:text-4xl">
              98%
            </p>
            <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
