import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gem, Shield, Truck, Heart, Award, Palette, Sparkles, Users, Clock } from 'lucide-react';

export default function HomeFeatures() {
  const features = [
    {
      icon: Gem,
      title: 'Authentic Gemstones',
      description:
        'Each piece features carefully selected genuine gemstones sourced from trusted artisan miners worldwide.',
      badge: 'Quality',
    },
    {
      icon: Sparkles,
      title: 'Handcrafted Excellence',
      description:
        'Every jewelry piece is meticulously handcrafted by skilled artisans using traditional techniques passed down through generations.',
      badge: 'Craftsmanship',
    },
    {
      icon: Palette,
      title: 'Custom Designs',
      description:
        'Work directly with our artisans to create personalized jewelry pieces that reflect your unique style and story.',
      badge: 'Personalization',
    },
    {
      icon: Shield,
      title: 'Lifetime Warranty',
      description:
        'We stand behind our craftsmanship with comprehensive lifetime warranty on all handmade jewelry pieces.',
      badge: 'Guarantee',
    },
    {
      icon: Truck,
      title: 'Secure Shipping',
      description:
        'Complimentary insured shipping with elegant gift packaging and tracking for all orders over $150.',
      badge: 'Delivery',
    },
    {
      icon: Award,
      title: 'Certified Authenticity',
      description:
        'Each piece comes with detailed certification documenting gemstone authenticity and artisan provenance.',
      badge: 'Certification',
    },
    {
      icon: Heart,
      title: 'Ethically Sourced',
      description:
        'Supporting fair trade practices and sustainable mining while empowering artisan communities globally.',
      badge: 'Ethics',
    },
    {
      icon: Users,
      title: 'Artisan Stories',
      description:
        'Discover the talented craftspeople behind each piece and learn about their cultural heritage and techniques.',
      badge: 'Community',
    },
    {
      icon: Clock,
      title: 'Heirloom Quality',
      description:
        'Built to last generations with timeless designs that become treasured family heirlooms.',
      badge: 'Legacy',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Why Choose Artisan Gems
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Exceptional Jewelry
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Crafted with Love
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover the artistry and passion behind every handcrafted piece in our collection. Each
            jewelry item tells a unique story of tradition, skill, and timeless beauty.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to discover your perfect handcrafted piece?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Browse Collection
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Meet Our Artisans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
