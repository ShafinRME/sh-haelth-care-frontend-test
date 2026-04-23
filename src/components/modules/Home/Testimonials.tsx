import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Cardiac Patient",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=120&h=120&fit=crop&crop=face",
    quote:
      "I was terrified before my procedure, but the cardiologist walked me through every step. The follow-up care was exceptional — I've never felt more confident in a medical team.",
    rating: 5,
    tag: "Cardiology",
    accent: "#3b82f6",
  },
  {
    name: "James Okafor",
    role: "General Patient",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&h=120&fit=crop&crop=face",
    quote:
      "Booking took 2 minutes, the AI matched me with exactly the right specialist. I got a diagnosis within the same week. This platform completely changed how I think about healthcare.",
    rating: 5,
    tag: "AI Matching",
    accent: "#8b5cf6",
  },
  {
    name: "Priya Nair",
    role: "Paediatric Parent",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=120&h=120&fit=crop&crop=face",
    quote:
      "As a mother, finding the right pediatrician is everything. CureWave helped me find a specialist who genuinely listens. My daughter now actually looks forward to her check-ups!",
    rating: 5,
    tag: "Paediatrics",
    accent: "#10b981",
  },
];

const StarRow = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5 mb-5">
    {Array.from({ length: rating }).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);

const TestimonialCard = ({
  t,
  index,
}: {
  t: (typeof testimonials)[0];
  index: number;
}) => {
  const isMiddle = index === 1;

  return (
    <div
      className={`relative flex flex-col rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
        isMiddle
          ? "bg-blue-600 border-blue-500 text-white shadow-xl shadow-blue-500/25"
          : "bg-white dark:bg-card border-border"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)" }}
    >
      {/* Tag pill */}
      <div
        className={`absolute top-6 right-6 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide ${
          isMiddle
            ? "bg-white/20 text-white"
            : "text-white"
        }`}
        style={!isMiddle ? { background: t.accent } : {}}
      >
        {t.tag}
      </div>

      {/* Large quote mark */}
      <Quote
        className={`h-10 w-10 mb-4 opacity-20 ${
          isMiddle ? "text-white" : "text-blue-500"
        }`}
      />

      {/* Stars */}
      <StarRow rating={t.rating} />

      {/* Quote text */}
      <p
        className={`text-[15px] leading-relaxed flex-1 mb-8 ${
          isMiddle
            ? "text-blue-50"
            : "text-muted-foreground dark:text-muted-foreground"
        }`}
      >
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Author row */}
      <div
        className={`flex items-center gap-3 pt-5 border-t ${
          isMiddle ? "border-blue-500" : "border-border"
        }`}
      >
        <div className="relative">
          {/* Colored ring */}
          <div
            className="absolute -inset-0.5 rounded-full opacity-60"
            style={{ background: isMiddle ? "rgba(255,255,255,0.4)" : t.accent }}
          />
          <img
            src={t.image}
            alt={t.name}
            width={48}
            height={48}
            className="relative w-12 h-12 rounded-full object-cover"
          />
        </div>
        <div>
          <p
            className={`text-sm font-semibold ${
              isMiddle ? "text-white" : "text-foreground"
            }`}
          >
            {t.name}
          </p>
          <p
            className={`text-xs ${
              isMiddle ? "text-blue-200" : "text-muted-foreground"
            }`}
          >
            {t.role}
          </p>
        </div>

        {/* Verified checkmark */}
        <div className="ml-auto">
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center ${
              isMiddle ? "bg-white/20" : "bg-green-50 dark:bg-green-950"
            }`}
          >
            <svg
              className={`w-3.5 h-3.5 ${
                isMiddle ? "text-white" : "text-green-600"
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-28 bg-background">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 translate-x-1/3 translate-y-1/3 rounded-full bg-violet-500/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-950 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900">
            <Star className="h-3.5 w-3.5 fill-blue-700 dark:fill-blue-300" />
            Patient Stories
          </div>
          <h2 className="mb-3 text-3xl font-bold text-foreground lg:text-4xl leading-tight">
            Real people, real results
          </h2>
          <p className="text-base text-muted-foreground lg:text-lg leading-relaxed">
            Thousands of patients have found the right care through CureWave.
            Here&rsquo;s what some of them have to say.
          </p>
        </div>

        {/* Cards — middle card elevated */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-center">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={i === 1 ? "md:-mt-6 md:mb-6" : ""}
            >
              <TestimonialCard t={t} index={i} />
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="mt-16 mx-auto max-w-3xl">
          <div className="grid grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden shadow-sm">
            {[
              { value: "4.9/5", label: "Average rating", color: "text-blue-600" },
              { value: "10K+", label: "Happy patients", color: "text-violet-600" },
              { value: "98%", label: "Satisfaction rate", color: "text-emerald-600" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-card py-7 text-center"
              >
                <p className={`text-3xl font-bold lg:text-4xl mb-1 ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
