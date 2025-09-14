import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gem, Award, Palette, Heart, Sparkles, Crown, Star, Gift, Shield } from 'lucide-react';

export default function ProductCatalogFeatures1() {
  const features = [
    {
      icon: Gem,
      title: 'Ethically Sourced Gemstones',
      description:
        'Every precious stone is carefully selected from certified ethical suppliers who support fair mining practices.',
      badge: 'Ethical',
    },
    {
      icon: Award,
      title: 'Master Craftsmanship',
      description:
        'Each piece is handcrafted by skilled artisans with over 20 years of jewelry-making expertise.',
      badge: 'Quality',
    },
    {
      icon: Palette,
      title: 'Custom Design Service',
      description:
        'Transform your vision into reality with our bespoke jewelry design consultation and creation service.',
      badge: 'Personalization',
    },
    {
      icon: Heart,
      title: 'Heirloom Quality',
      description:
        'Built to last generations, our jewelry maintains its beauty and integrity through decades of wear.',
      badge: 'Durability',
    },
    {
      icon: Sparkles,
      title: 'Unique Collections',
      description:
        'Discover one-of-a-kind pieces that reflect your individual style and personality perfectly.',
      badge: 'Exclusivity',
    },
    {
      icon: Crown,
      title: 'Precious Metal Guarantee',
      description:
        'Only the finest 14k, 18k gold, and sterling silver are used in our handcrafted creations.',
      badge: 'Materials',
    },
    {
      icon: Star,
      title: 'Artisan Signature Series',
      description:
        'Limited edition pieces personally signed by our master jewelers, making each item truly special.',
      badge: 'Limited Edition',
    },
    {
      icon: Gift,
      title: 'Luxury Gift Packaging',
      description:
        'Every purchase arrives in our signature handcrafted wooden box with silk interior lining.',
      badge: 'Presentation',
    },
    {
      icon: Shield,
      title: 'Lifetime Craftsmanship Warranty',
      description:
        'We stand behind our work with comprehensive coverage for repairs and maintenance services.',
      badge: 'Warranty',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Artisan Excellence
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Why Choose Our
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Handcrafted Jewelry
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover the artistry, quality, and passion that goes into every piece of jewelry we
            create in our workshop.
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
          <p className="text-muted-foreground mb-4">Ready to discover your perfect piece?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Browse Collection
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Custom Design Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
