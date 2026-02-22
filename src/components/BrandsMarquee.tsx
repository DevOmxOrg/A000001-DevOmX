const brands = ["Shopify", "Figma", "Webflow", "Notion", "Stripe", "Vercel", "Adobe", "Slack"];

const BrandsMarquee = () => {
  return (
    <section className="py-12 border-y border-border bg-background overflow-hidden">
      <p className="text-center text-sm text-muted-foreground mb-8">
        Built with trusted tools for modern websites
      </p>
      <div className="relative">
        <div className="flex marquee whitespace-nowrap">
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <span
              key={i}
              className="mx-10 text-xl font-semibold text-muted-foreground/40 tracking-wide font-sans"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsMarquee;
