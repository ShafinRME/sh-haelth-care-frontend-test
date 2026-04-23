import { Search, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { HeroProps } from "@/types/heroProps";
import { LargeSparkleIcon, SparkleIcon } from "@/assets/icons/SparkleIcon";

export function Hero({
  badge = {
    text: "AI-Powered Healthcare",
  },
  heading = {
    line1: "Find Your Perfect",
    line2: "Doctor with AI",
  },
  description = [
    "Our advanced AI technology analyzes your symptoms, medical",
    "history, and preferences to match you with the best-fit doctors",
    "in seconds.",
  ],
  buttons = {
    primary: {
      text: "Find Your Doctor",
    },
    secondary: {
      text: "Book Appointment",
    },
  },
  stats = [
    { value: "50K+", label: "Patients Served" },
    { value: "1000+", label: "Expert Doctors" },
    {
      value: "4.9",
      label: "Patient Rating",
      icon: <Star className="size-6 fill-yellow-400 stroke-yellow-400" />,
    },
  ],
  formCard = {
    title: "AI Doctor Finder",
    symptomLabel: "What are your symptoms?",
    symptomPlaceholder: "e.g., headache, fever, cough",
    specialtyLabel: "Preferred specialty",
    specialtyOptions: [
      "General Physician",
      "Cardiologist",
      "Dermatologist",
      "Pediatrician",
      "Orthopedic",
    ],
    defaultSpecialty: "General Physician",
    submitText: "Get AI Recommendations",
    footerText:
      "✨ Powered by advanced AI algorithms for accurate doctor matching",
  },
}: HeroProps) {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Enhanced Gradient Background with Animation */}
      <div
        className="absolute inset-0 z-0 opacity-95"
        style={{
          background:
            "radial-gradient(130% 130% at 50% 100%, #ffffff 25%, #3b82f6 95%)",
        }}
      />
      
      {/* Decorative Elements */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-indigo-400/10 blur-3xl" />

      {/* Content Container */}
      <div className="relative w-full px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Hero Content */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Enhanced Badge */}
              <div className="inline-flex items-center gap-3 self-start rounded-full bg-white px-5 py-2.5 shadow-lg shadow-blue-500/10 ring-1 ring-blue-100 transition-all hover:shadow-xl hover:shadow-blue-500/20">
                <SparkleIcon />
                <span className="text-sm font-semibold text-blue-700">
                  {badge.text}
                </span>
              </div>

              {/* Heading with Gradient */}
              <div className="space-y-2">
                <h1 className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-5xl font-bold leading-tight text-transparent lg:text-6xl">
                  {heading.line1}
                </h1>
                <h1 className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-5xl font-bold leading-tight text-transparent lg:text-6xl">
                  {heading.line2}
                </h1>
              </div>

              {/* Description */}
              <div className="space-y-1 text-lg leading-relaxed text-gray-600">
                {description.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>

              {/* Enhanced Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                {buttons.primary && (
                  <Button
                    onClick={buttons.primary.onClick}
                    size="lg"
                    className="group h-auto gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-base font-semibold shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105"
                  >
                    <Search className="size-5 transition-transform group-hover:scale-110" />
                    {buttons.primary.text}
                  </Button>
                )}
                {buttons.secondary && (
                  <Button
                    onClick={buttons.secondary.onClick}
                    variant="outline"
                    size="lg"
                    className="h-auto gap-3 rounded-xl border-2 border-blue-600 bg-white px-8 py-4 text-base font-semibold text-blue-600 transition-all hover:bg-blue-50 hover:scale-105"
                  >
                    <Calendar className="size-5" />
                    {buttons.secondary.text}
                  </Button>
                )}
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group cursor-default space-y-2 transition-transform hover:scale-105"
                  >
                    <div className="flex items-center gap-2">
                      <p className="text-3xl font-bold text-gray-900 lg:text-4xl">
                        {stat.value}
                      </p>
                      {stat.icon && (
                        <span className="transition-transform group-hover:scale-110">
                          {stat.icon}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-gray-600">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Enhanced Form Card */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="group w-full max-w-xl rounded-3xl bg-white p-8 shadow-2xl shadow-blue-900/10 ring-1 ring-gray-100 transition-all hover:shadow-3xl hover:shadow-blue-900/15 lg:p-10">
                {/* Card Header */}
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {formCard.title}
                  </h2>
                  <div className="transition-transform group-hover:scale-110">
                    <LargeSparkleIcon />
                  </div>
                </div>

                {/* Form */}
                <form className="space-y-6">
                  {/* Symptoms Input */}
                  <div className="space-y-3">
                    <Label
                      htmlFor="symptoms"
                      className="text-sm font-semibold text-gray-700"
                    >
                      {formCard.symptomLabel}
                    </Label>
                    <Input
                      id="symptoms"
                      name="symptoms"
                      placeholder={formCard.symptomPlaceholder}
                      className="h-14 rounded-xl border-2 border-gray-200 bg-gray-50/50 px-4 text-base transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="h-14 w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-base font-semibold shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:scale-[1.02]"
                  >
                    {formCard.submitText}
                  </Button>
                </form>

                {/* Enhanced Footer */}
                <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50/50 px-4 py-3">
                  <p className="text-center text-sm font-medium leading-relaxed text-blue-700">
                    {formCard.footerText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
