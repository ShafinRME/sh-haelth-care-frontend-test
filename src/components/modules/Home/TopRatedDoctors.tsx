import { Star, Award, Clock } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import cardioDoc from '../../../assets/images/doctor-cardiologist.jpg';
import neurolDoc from '../../../assets/images/doctor-neurologist.jpg';
import orthoDoc from '../../../assets/images/doctor-orthopedic.jpg';

const doctors = [
  {
    name: 'Dr. Cameron Williamson',
    specialty: 'Cardiologist',
    rating: 4.9,
    reviews: 23,
    image: cardioDoc,
    experience: '15+ years',
    availability: 'Available Today',
  },
  {
    name: 'Dr. Leslie Alexander',
    specialty: 'Neurologist',
    rating: 4.8,
    reviews: 45,
    image: neurolDoc,
    experience: '12+ years',
    availability: 'Available Today',
  },
  {
    name: 'Dr. Robert Fox',
    specialty: 'Orthopedic',
    rating: 4.9,
    reviews: 32,
    image: orthoDoc,
    experience: '18+ years',
    availability: 'Available Tomorrow',
  },
];

const DoctorCard = ({ doctor }: { doctor: typeof doctors[0] }) => {
  return (
    <Card className="group relative overflow-hidden border-2 transition-all duration-300 hover:border-blue-200 hover:shadow-2xl hover:-translate-y-2">
      {/* Verified Badge */}
      <div className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
        <Award className="h-3 w-3" />
        Verified
      </div>

      <CardHeader className="relative bg-gradient-to-br from-blue-50 via-blue-50/50 to-indigo-50/30 p-8">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-blue-400/10 blur-2xl" />
          <div className="absolute bottom-0 left-0 h-32 w-32 translate-y-1/2 -translate-x-1/2 rounded-full bg-indigo-400/10 blur-2xl" />
        </div>

        {/* Doctor Image */}
        <div className="relative mx-auto">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-40" />
          <Image
            src={doctor.image}
            alt={doctor.name}
            width={120}
            height={120}
            className="relative rounded-full border-4 border-white shadow-xl transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </CardHeader>

      <CardContent className="space-y-4 p-6">
        {/* Doctor Info */}
        <div className="text-center">
          <h3 className="mb-1 text-xl font-bold text-foreground transition-colors group-hover:text-blue-600">
            {doctor.name}
          </h3>
          <p className="mb-3 inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
            {doctor.specialty}
          </p>
        </div>

        {/* Stats */}
        <div className="space-y-3 border-y border-gray-100 py-4">
          {/* Rating */}
          <div className="flex items-center justify-center gap-2 text-sm">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-bold text-foreground">{doctor.rating}</span>
            </div>
            <span className="text-muted-foreground">
              ({doctor.reviews} reviews)
            </span>
          </div>

          {/* Experience */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Award className="h-4 w-4" />
            <span>{doctor.experience} experience</span>
          </div>

          {/* Availability */}
          <div className="flex items-center justify-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-green-500" />
            <span className="font-semibold text-green-600">
              {doctor.availability}
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="grid grid-cols-2 gap-3 p-6 pt-0">
        <Button
          variant="outline"
          className="group/btn border-2 transition-all hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600"
        >
          View Profile
        </Button>
        <Button className="group/btn bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40">
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};

const TopRatedDoctors = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20 py-20 md:py-24 lg:py-28">
      {/* Decorative Elements */}
      <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-blue-400/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 translate-y-1/2 -translate-x-1/2 rounded-full bg-indigo-400/5 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
            <Star className="h-4 w-4 fill-blue-700" />
            Top Rated
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-3xl font-bold text-transparent lg:text-4xl">
            Our Top Rated Doctor
          </h2>
          <p className="text-base text-muted-foreground lg:text-lg">
            Access to medical experts from various specialities, ready to provide you with top-notch medical services.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.name} doctor={doctor} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="group h-auto gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-base font-semibold shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105"
          >
            View All Doctors
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Browse through our network of 1000+ certified medical professionals
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopRatedDoctors;
