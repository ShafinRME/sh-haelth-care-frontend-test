import { HeartPulse, Brain, Bone, Baby } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

const specialists = [
  {
    name: 'Cardiology',
    icon: HeartPulse,
    bgColor: 'bg-red-50',
    iconColor: 'text-red-500',
    hoverColor: 'hover:bg-red-500',
    description: 'Heart & cardiovascular care',
  },
  {
    name: 'Neurology',
    icon: Brain,
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-500',
    hoverColor: 'hover:bg-blue-500',
    description: 'Brain & nervous system',
  },
  {
    name: 'Orthopedic',
    icon: Bone,
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-500',
    hoverColor: 'hover:bg-purple-500',
    description: 'Bones & joint treatment',
  },
  {
    name: 'Pediatric',
    icon: Baby,
    bgColor: 'bg-green-50',
    iconColor: 'text-green-500',
    hoverColor: 'hover:bg-green-500',
    description: 'Children\'s healthcare',
  }
];

const Specialities = () => {
  return (
    <section className="py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div className="max-w-2xl">
            <h2 className="mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-3xl font-bold text-transparent lg:text-4xl">
              Our Specialist
            </h2>
            <p className="text-base text-muted-foreground lg:text-lg">
              Access to medical experts across all major specialities with years of experience.
            </p>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-base font-semibold text-primary transition-all hover:gap-3"
          >
            View All
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
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specialists.map((specialist) => (
            <Card
              key={specialist.name}
              className={cn(
                'group relative overflow-hidden border-2 transition-all duration-300 cursor-pointer',
                'hover:border-transparent hover:shadow-2xl hover:-translate-y-2',
                specialist.hoverColor
              )}
            >
              <CardContent className="relative p-8 text-center">
                {/* Icon Container */}
                <div
                  className={cn(
                    'mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl transition-all duration-300',
                    specialist.bgColor,
                    'group-hover:scale-110 group-hover:bg-white group-hover:shadow-lg'
                  )}
                >
                  <specialist.icon
                    className={cn(
                      specialist.iconColor,
                      'transition-all duration-300 group-hover:scale-125 group-hover:text-white'
                    )}
                    size={40}
                  />
                </div>

                {/* Text Content */}
                <h3 className="mb-2 text-xl font-bold text-foreground transition-colors group-hover:text-white">
                  {specialist.name}
                </h3>
                <p className="text-sm text-muted-foreground transition-colors group-hover:text-white/90">
                  {specialist.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/5 transition-transform duration-500 group-hover:scale-150" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialities;
