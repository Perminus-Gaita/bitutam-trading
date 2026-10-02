import Image from "next/image";
import Nav from "@/components/nav";
import {
  ArrowIcon,
  BadgeIcon,
  BoltIcon,
  BoxIcon,
  BrickIcon,
  ClipboardIcon,
  EyeIcon,
  GlobeIcon,
  HandshakeIcon,
  HardHatIcon,
  LayersIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  RoadIcon,
  ScaleIcon,
  SearchIcon,
  ShieldIcon,
  SolarIcon,
  TargetIcon,
  TruckIcon,
  UsersIcon,
} from "@/components/icons";

const PHONE = "+254 720 447 964";
const PHONE_HREF = "tel:+254720447964";
const EMAIL = "info@bitutam.co.ke";

/* ---------------------------------- bits ---------------------------------- */

function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`mb-3 flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.28em] ${
        light ? "text-[#e9a13b]" : "text-[#b8791d]"
      }`}
    >
      <span className={`h-px w-8 ${light ? "bg-[#e9a13b]" : "bg-[#b8791d]"}`} />
      {children}
    </p>
  );
}

function SectionTitle({
  children,
  light,
  className = "",
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={`font-display text-4xl font-bold uppercase leading-[1.08] tracking-tight sm:text-5xl ${
        light ? "text-white" : "text-[#0f1417]"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

/* ---------------------------------- hero ---------------------------------- */

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[#0f1417]">
      <Image
        src="/img/hero-site.jpg"
        alt="A large active construction site with crews and materials laid out across the slab"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f1417] via-[#0f1417]/85 to-[#0f1417]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1417] via-transparent to-[#0f1417]/70" />

      <Nav />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-24 pt-32 sm:px-8">
        <div className="max-w-3xl reveal">
          <p className="mb-5 inline-flex items-center gap-2 border border-[#e9a13b]/40 bg-[#e9a13b]/10 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.24em] text-[#e9a13b]">
            <PinIcon className="h-4 w-4" /> Kenya &amp; the wider region
          </p>
          <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
            Bitutam
            <br />
            International
          </h1>
          <p className="mt-5 font-display text-xl uppercase tracking-[0.12em] text-[#e9a13b] sm:text-2xl">
            Integrated Trading, Procurement &amp; Supply Solutions
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Building reliable supply chains. Delivering practical solutions. We source, procure and deliver
            construction materials, solar equipment and general merchandise to specification.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 bg-[#e9a13b] px-8 py-4 font-display font-semibold uppercase tracking-wider text-[#0f1417] transition-colors hover:bg-[#f5b841]"
            >
              Request a Quotation
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2.5 border border-white/30 px-8 py-4 font-display font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
            >
              Our Services
            </a>
          </div>
        </div>

        <div className="mt-16 grid max-w-4xl grid-cols-2 gap-px border border-white/15 bg-white/10 sm:mt-20 sm:grid-cols-4">
          {[
            [BrickIcon, "Construction"],
            [RoadIcon, "Bitumen"],
            [SolarIcon, "Solar"],
            [BoxIcon, "Merchandise"],
          ].map(([Icon, label]) => {
            const I = Icon as (p: { className?: string }) => React.ReactElement;
            return (
              <div key={label as string} className="flex items-center gap-3 bg-[#0f1417]/80 px-5 py-5 backdrop-blur-sm">
                <I className="h-6 w-6 shrink-0 text-[#e9a13b]" />
                <span className="font-display text-sm font-semibold uppercase tracking-wider text-white sm:text-base">
                  {label as string}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- proposition ------------------------------ */

const proposition = [
  {
    icon: BrickIcon,
    title: "Construction Supply",
    copy: "Supply of key construction inputs including cement, ballast, building blocks and bitumen, subject to client specifications and project requirements.",
    img: "/img/rebar-site.jpg",
    alt: "Steel reinforcement being fixed on a construction site",
  },
  {
    icon: SolarIcon,
    title: "Solar Solutions",
    copy: "Sourcing and supply of solar equipment and related components for residential, commercial and institutional applications.",
    img: "/img/solar-rooftop.jpg",
    alt: "A large rooftop solar array at sunset",
  },
  {
    icon: BoxIcon,
    title: "General Merchandising",
    copy: "Flexible sourcing of a broad range of goods based on client specifications, quantities, timelines and budget.",
    img: "/img/warehouse-pallets.jpg",
    alt: "A busy distribution warehouse stacked with palletised goods",
  },
  {
    icon: TruckIcon,
    title: "Procurement & Logistics",
    copy: "Supplier coordination, quotation comparison, order management and delivery coordination to simplify purchasing.",
    img: "/img/truck-delivery.jpg",
    alt: "A haulage truck on the road carrying a delivery",
  },
];

function Proposition() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Eyebrow>Our Proposition</Eyebrow>
          <SectionTitle>Dependable sourcing, competitive value, reliable delivery</SectionTitle>
          <p className="mt-5 text-lg leading-relaxed text-[#6a7580]">
            Our capabilities span construction materials, solar equipment and general merchandise, with a
            practical focus on meeting project and operational requirements.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {proposition.map(({ icon: Icon, title, copy, img, alt }) => (
            <article key={title} className="group relative overflow-hidden bg-[#0f1417]">
              <Image
                src={img}
                alt={alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1417] via-[#0f1417]/75 to-[#0f1417]/15" />
              <div className="relative flex min-h-[20rem] flex-col justify-end p-8 sm:min-h-[22rem] sm:p-10">
                <span className="grid h-13 w-13 place-items-center bg-[#e9a13b] p-3 text-[#0f1417]">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
                  {title}
                </h3>
                <p className="mt-3 max-w-md leading-relaxed text-white/75">{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ introduction ------------------------------ */

function Introduction() {
  return (
    <section id="about" className="bg-[#f5f3ef] py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/img/store-racking.jpg"
            alt="Racked storage bays holding building materials in a supply store"
            width={1600}
            height={1067}
            sizes="(min-width: 1024px) 24vw, 50vw"
            className="h-72 w-full object-cover sm:h-96"
          />
          <div className="grid gap-4">
            <Image
              src="/img/worker-portrait.jpg"
              alt="A supply coordinator in a hard hat on site"
              width={1600}
              height={1067}
              sizes="(min-width: 1024px) 24vw, 50vw"
              className="h-34 w-full object-cover sm:h-46"
            />
            <Image
              src="/img/earthworks.jpg"
              alt="Aerial view of excavators working an earthworks site"
              width={1600}
              height={1067}
              sizes="(min-width: 1024px) 24vw, 50vw"
              className="h-34 w-full object-cover sm:h-46"
            />
          </div>
        </div>

        <div>
          <Eyebrow>Introduction</Eyebrow>
          <SectionTitle>A dependable partner for procurement and supply</SectionTitle>
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-[#6a7580]">
            <p>
              Welcome to Bitutam International, a Kenya-based general merchandising and supply business
              focused on helping clients access essential products through reliable sourcing and delivery.
            </p>
            <p>
              Our approach is built around understanding what the client needs, identifying suitable supply
              options, coordinating procurement and ensuring that the required goods are delivered in line
              with agreed specifications and timelines.
            </p>
            <p>
              From construction materials and solar equipment to general merchandise, we serve businesses,
              contractors, institutions and other organizations that value responsiveness, practical
              problem-solving and dependable supply.
            </p>
          </div>
          <p className="mt-8 border-l-4 border-[#e9a13b] pl-5 font-display text-2xl uppercase tracking-wide text-[#0f1417]">
            Reliable Supply. Practical Solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- background & values -------------------------- */

const values = [
  { icon: ShieldIcon, title: "Integrity", copy: "Conduct business transparently and build relationships based on trust and accountability." },
  { icon: BadgeIcon, title: "Reliability", copy: "Honor agreed specifications, timelines and communication commitments." },
  { icon: ScaleIcon, title: "Value", copy: "Seek competitive sourcing options without compromising required quality." },
  { icon: BoltIcon, title: "Responsiveness", copy: "Move quickly when clients have urgent or changing procurement requirements." },
];

function Background() {
  return (
    <section className="relative overflow-hidden bg-[#0f1417] py-24 sm:py-32">
      <Image src="/img/towers-bw.jpg" alt="" fill sizes="100vw" className="object-cover opacity-20" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1417] via-[#0f1417]/92 to-[#0f1417]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Eyebrow light>Business Background &amp; Vision</Eyebrow>
          <SectionTitle light>From sourcing to delivery</SectionTitle>
          <p className="mt-5 text-lg leading-relaxed text-white/75">
            Bitutam International was established to participate in the supply of essential goods and project
            inputs, with experience in general merchandising, construction supplies and solar equipment. The
            business is oriented toward building dependable supplier relationships and responding quickly to
            client requirements.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="border border-white/12 bg-white/[0.04] p-8 sm:p-10">
            <span className="grid h-14 w-14 place-items-center bg-[#e9a13b] text-[#0f1417]">
              <EyeIcon className="h-7 w-7" />
            </span>
            <h3 className="mt-6 font-display text-3xl font-bold uppercase tracking-wide text-white">Vision</h3>
            <p className="mt-3 leading-relaxed text-white/75">
              To be a trusted and versatile supply partner in Kenya and the wider region, recognized for
              reliability, responsiveness, value and integrity.
            </p>
          </div>
          <div className="border border-white/12 bg-white/[0.04] p-8 sm:p-10">
            <span className="grid h-14 w-14 place-items-center bg-[#e9a13b] text-[#0f1417]">
              <TargetIcon className="h-7 w-7" />
            </span>
            <h3 className="mt-6 font-display text-3xl font-bold uppercase tracking-wide text-white">Mission</h3>
            <p className="mt-3 leading-relaxed text-white/75">
              To source and deliver quality products efficiently, while providing clients with responsive
              procurement support and practical solutions that contribute to the success of their projects
              and operations.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, copy }) => (
            <div key={title} className="border-t-2 border-[#e9a13b] bg-white/[0.04] p-7">
              <Icon className="h-7 w-7 text-[#e9a13b]" />
              <h4 className="mt-4 font-display text-xl font-bold uppercase tracking-wide text-white">{title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ target market ----------------------------- */

const segments = [
  "Construction companies and contractors requiring regular or project-based supply.",
  "Property developers and real-estate projects requiring construction materials and related inputs.",
  "Commercial and institutional organizations with recurring procurement needs.",
  "Businesses seeking solar equipment and components for energy projects.",
  "Traders, distributors and organizations requiring sourcing of specified goods.",
  "Government, NGO and other institutional buyers, subject to applicable procurement requirements.",
];

const scope = [
  { icon: HardHatIcon, title: "Project-Based Supply", copy: "Supply planning around project quantities, specifications, schedules and delivery points." },
  { icon: ClipboardIcon, title: "Recurring Procurement", copy: "Support for repeat orders and ongoing operational requirements." },
  { icon: SearchIcon, title: "Specialized Sourcing", copy: "Identification and coordination of products not readily available through a client's usual suppliers." },
  { icon: TruckIcon, title: "Delivery Coordination", copy: "Organization of transport and delivery arrangements according to the agreed order." },
];

function TargetMarket() {
  return (
    <section id="market" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>Target Market &amp; Client Segmentation</Eyebrow>
            <SectionTitle>Serving diverse procurement needs</SectionTitle>
            <p className="mt-5 text-lg leading-relaxed text-[#6a7580]">
              Our services are designed for clients who require dependable access to construction inputs,
              energy products and general merchandise.
            </p>
            <ul className="mt-9 space-y-4">
              {segments.map((s) => (
                <li key={s} className="flex items-start gap-3.5">
                  <span className="mt-1.5 grid h-5 w-5 shrink-0 place-items-center bg-[#e9a13b] text-[10px] font-bold text-[#0f1417]">
                    ✓
                  </span>
                  <span className="leading-relaxed text-[#2c3841]">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 self-start">
            <Image
              src="/img/boardroom.jpg"
              alt="An institutional procurement team meeting in a boardroom"
              width={1600}
              height={1067}
              sizes="(min-width: 1024px) 24vw, 50vw"
              className="h-52 w-full object-cover sm:h-64"
            />
            <Image
              src="/img/highrise.jpg"
              alt="Commercial high-rise towers viewed from street level"
              width={1600}
              height={1067}
              sizes="(min-width: 1024px) 24vw, 50vw"
              className="h-52 w-full object-cover sm:h-64"
            />
            <Image
              src="/img/solar-field.jpg"
              alt="A ground-mounted solar array under a clear sky"
              width={1600}
              height={1067}
              sizes="(min-width: 1024px) 24vw, 50vw"
              className="h-52 w-full object-cover sm:h-64"
            />
            <Image
              src="/img/office-open.jpg"
              alt="An open-plan commercial office"
              width={1600}
              height={1067}
              sizes="(min-width: 1024px) 24vw, 50vw"
              className="h-52 w-full object-cover sm:h-64"
            />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-[#0f1417]">
            Scope of Services
          </h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {scope.map(({ icon: Icon, title, copy }) => (
              <div key={title} className="border-t-2 border-[#0f1417] bg-[#f5f3ef] p-7">
                <Icon className="h-7 w-7 text-[#b8791d]" />
                <h4 className="mt-4 font-display text-lg font-bold uppercase tracking-wide text-[#0f1417]">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#6a7580]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- core supply services ------------------------- */

const services = [
  {
    n: "01",
    title: "Construction Materials",
    copy: "Cement, ballast, building blocks and other construction inputs sourced according to project specifications and required quantities.",
    img: "/img/rebar-site.jpg",
    alt: "Reinforcement steel and formwork on a construction site",
  },
  {
    n: "02",
    title: "Bitumen & Related Inputs",
    copy: "Sourcing and supply of bitumen and selected road/construction-related materials for approved project requirements.",
    img: "/img/earthworks.jpg",
    alt: "Excavators grading a road corridor",
  },
  {
    n: "03",
    title: "Solar Equipment",
    copy: "Sourcing and supply of solar equipment and components for residential, commercial and institutional applications.",
    img: "/img/solar-aerial.jpg",
    alt: "Aerial view of solar panels installed on open ground",
  },
  {
    n: "04",
    title: "General Merchandising",
    copy: "Flexible sourcing of goods across categories based on client specifications, budget and delivery requirements.",
    img: "/img/warehouse-aisle.jpg",
    alt: "A high-bay warehouse aisle stacked with stock",
  },
  {
    n: "05",
    title: "Procurement Support",
    copy: "Supplier identification, quotation coordination, order processing and delivery follow-up.",
    img: "/img/signing.jpg",
    alt: "A purchase agreement being signed",
  },
  {
    n: "06",
    title: "Logistics Coordination",
    copy: "Coordination of transportation and delivery to project sites, business premises or other agreed destinations.",
    img: "/img/truck-highway.jpg",
    alt: "A cargo truck travelling a highway route",
  },
];

function Services() {
  return (
    <section id="services" className="bg-[#f5f3ef] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Eyebrow>Scope of Services</Eyebrow>
          <SectionTitle>Core trading &amp; supply services</SectionTitle>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ n, title, copy, img, alt }) => (
            <article key={n} className="group overflow-hidden bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-xl">
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={img}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1417]/70 to-transparent" />
                <span className="absolute left-0 top-0 bg-[#e9a13b] px-4 py-2 font-display text-xl font-bold text-[#0f1417]">
                  {n}
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-[#0f1417]">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#6a7580]">{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- products & capability ----------------------- */

const products = [
  {
    icon: BrickIcon,
    title: "Construction Materials",
    items: ["Cement", "Ballast", "Building blocks", "Bitumen", "Other project-specific construction inputs"],
    img: "/img/renovation.jpg",
    alt: "Building works underway inside a structure being renovated",
  },
  {
    icon: SolarIcon,
    title: "Solar Equipment",
    items: ["Solar panels", "Inverters", "Batteries", "Charge controllers", "Balance-of-system components, subject to specification"],
    img: "/img/solar-ground.jpg",
    alt: "Solar panels mounted in an open field",
  },
  {
    icon: BoxIcon,
    title: "General Merchandise",
    items: ["Client-specified goods sourced through our supplier and trading network"],
    img: "/img/warehouse-pallets.jpg",
    alt: "Palletised general goods in a distribution centre",
  },
  {
    icon: HandshakeIcon,
    title: "Procurement & Supplier Network",
    items: ["Supplier identification", "Comparison", "Coordination", "Order follow-up"],
    img: "/img/handshake.jpg",
    alt: "Two parties shaking hands over a supply agreement",
  },
  {
    icon: TruckIcon,
    title: "Transport & Delivery",
    items: ["Delivery coordination for construction sites, business premises and other agreed locations"],
    img: "/img/port-cranes.jpg",
    alt: "Container cranes loading freight at a port",
  },
  {
    icon: LayersIcon,
    title: "Project Support",
    items: ["Commercial coordination around quantities, timelines, specifications and documentation"],
    img: "/img/planning.jpg",
    alt: "Project drawings being reviewed at a desk",
  },
];

function Products() {
  return (
    <section id="products" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Eyebrow>Products &amp; Supply Capability</Eyebrow>
          <SectionTitle>What we can source and supply</SectionTitle>
        </div>

        <div className="mt-14 space-y-6">
          {products.map(({ icon: Icon, title, items, img, alt }, i) => (
            <article
              key={title}
              className={`grid overflow-hidden bg-[#f5f3ef] lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>figure]:order-2" : ""}`}
            >
              <figure className="relative h-60 lg:h-auto lg:min-h-[17rem]">
                <Image
                  src={img}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </figure>
              <div className="p-8 sm:p-10">
                <span className="grid h-13 w-13 place-items-center bg-[#0f1417] p-3 text-[#e9a13b]">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-wide text-[#0f1417] sm:text-3xl">
                  {title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                  {items.map((it) => (
                    <li key={it} className="border border-[#0f1417]/15 bg-white px-3.5 py-1.5 text-sm text-[#2c3841]">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ supply process ---------------------------- */

const steps = [
  "Understand the requirement and specifications.",
  "Source and compare suitable supply options.",
  "Confirm price, quantity, quality and delivery terms.",
  "Coordinate procurement, logistics and delivery.",
  "Follow up to support satisfactory completion of the order.",
];

function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-[#0f1417] py-24 sm:py-32">
      <Image src="/img/port-aerial.jpg" alt="" fill sizes="100vw" className="object-cover opacity-20" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1417] via-[#0f1417]/92 to-[#0f1417]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Eyebrow light>Our Supply Process</Eyebrow>
          <SectionTitle light>Five steps from enquiry to delivery</SectionTitle>
        </div>

        <ol className="mt-14 grid gap-px bg-white/12 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s} className="bg-[#0f1417] p-7">
              <span className="font-display text-5xl font-bold text-[#e9a13b]/35">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-3 leading-relaxed text-white/85">{s}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------- portfolio ------------------------------- */

const portfolio = [
  { title: "Construction Supply", copy: "Cement, ballast, building blocks and bitumen for project requirements.", img: "/img/store-racking.jpg", alt: "Building materials stored in racked supply bays" },
  { title: "Solar Supply", copy: "Solar equipment and related components sourced to specification.", img: "/img/solar-rooftop.jpg", alt: "A commercial rooftop solar installation" },
  { title: "Commercial Trading", copy: "General merchandise sourced according to client requirements.", img: "/img/warehouse-aisle.jpg", alt: "A stocked warehouse aisle" },
  { title: "Site Delivery", copy: "Coordination of movement of supplied goods to the agreed destination.", img: "/img/truck-delivery.jpg", alt: "A delivery truck en route to site" },
];

function Portfolio() {
  return (
    <section className="bg-[#f5f3ef] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Eyebrow>Portfolio / Previous Work</Eyebrow>
          <SectionTitle>Experience and market participation</SectionTitle>
          <p className="mt-5 text-lg leading-relaxed text-[#6a7580]">
            Bitutam International has experience in general merchandising and in supplying
            construction-related products and solar equipment, coordinating products, suppliers, quantities
            and delivery.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.map(({ title, copy, img, alt }) => (
            <article key={title} className="group overflow-hidden bg-white shadow-sm ring-1 ring-black/5">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={img}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-[#0f1417]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6a7580]">{copy}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 border-l-4 border-[#e9a13b] bg-white p-6 text-sm leading-relaxed text-[#6a7580]">
          <strong className="font-semibold text-[#0f1417]">Project references.</strong> Specific client
          names, project values and detailed previous-work references are available on request, where
          disclosure is appropriate and authorized.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------- why choose ------------------------------- */

const why = [
  { icon: BoltIcon, title: "Responsive & Professional", copy: "We focus on clear communication, prompt quotations and practical execution." },
  { icon: LayersIcon, title: "Multi-Sector Supply", copy: "Our trading capability spans construction materials, solar equipment and general merchandise." },
  { icon: ScaleIcon, title: "Competitive Sourcing", copy: "We seek suitable suppliers and options that balance price, quality and availability." },
  { icon: ClipboardIcon, title: "Flexible Service", copy: "We support both one-off project requirements and recurring procurement needs." },
  { icon: TruckIcon, title: "Reliable Coordination", copy: "We coordinate suppliers, orders and delivery arrangements to reduce procurement friction." },
  { icon: UsersIcon, title: "Client-Focused Support", copy: "We tailor our approach to the client's specification, quantity, budget and timeline." },
];

function WhyChoose() {
  return (
    <section id="why" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Eyebrow>Why Choose Bitutam International?</Eyebrow>
          <SectionTitle>A practical partner for procurement</SectionTitle>
        </div>

        <div className="mt-14 grid gap-px bg-[#0f1417]/10 sm:grid-cols-2 lg:grid-cols-3">
          {why.map(({ icon: Icon, title, copy }, i) => (
            <div key={title} className="group bg-white p-8 transition-colors hover:bg-[#0f1417]">
              <div className="flex items-center gap-4">
                <span className="font-display text-3xl font-bold text-[#e9a13b]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon className="h-7 w-7 text-[#0f1417] transition-colors group-hover:text-[#e9a13b]" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wide text-[#0f1417] transition-colors group-hover:text-white">
                {title}
              </h3>
              <p className="mt-2.5 leading-relaxed text-[#6a7580] transition-colors group-hover:text-white/70">
                {copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- procurement approach ------------------------- */

const costRows = [
  ["Product / Materials", "Quoted according to specification and quantity"],
  ["Transport & Delivery", "Distance, vehicle/load and delivery schedule"],
  ["Handling / Site Logistics", "Where applicable"],
  ["Procurement / Coordination", "Where applicable"],
  ["Taxes / Statutory Charges", "As applicable"],
  ["Contingency", "Where agreed"],
];

function Approach() {
  return (
    <section className="relative overflow-hidden bg-[#1a2126] py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <Eyebrow light>Procurement &amp; Supply Approach</Eyebrow>
          <SectionTitle light>Illustrative project cost structure</SectionTitle>
          <p className="mt-5 leading-relaxed text-white/75">
            Unlike a fixed service package, supply projects are priced according to the products required,
            quantities, specifications, location, transport requirements and applicable taxes. The structure
            alongside shows the framework we use when preparing project-specific quotations.
          </p>
          <div className="mt-8 border-l-4 border-[#e9a13b] bg-white/[0.04] p-6">
            <p className="font-display text-lg font-bold uppercase tracking-wide text-white">Quotation note</p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Final commercial terms are confirmed in a formal quotation or purchase agreement, including
              product specifications, delivery terms, payment terms, validity period and applicable taxes.
            </p>
          </div>
          <Image
            src="/img/worker-install.jpg"
            alt="A technician completing an installation on site"
            width={1600}
            height={1067}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="mt-8 h-56 w-full object-cover"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[34rem] border-collapse text-left">
            <thead>
              <tr className="bg-[#e9a13b] text-[#0f1417]">
                <th className="px-5 py-4 font-display text-sm font-bold uppercase tracking-wider">Cost Component</th>
                <th className="px-5 py-4 font-display text-sm font-bold uppercase tracking-wider">Basis</th>
                <th className="px-5 py-4 text-right font-display text-sm font-bold uppercase tracking-wider">
                  Amount (KES)
                </th>
              </tr>
            </thead>
            <tbody>
              {costRows.map(([c, b]) => (
                <tr key={c} className="border-b border-white/10">
                  <td className="px-5 py-4 font-medium text-white">{c}</td>
                  <td className="px-5 py-4 text-sm text-white/65">{b}</td>
                  <td className="px-5 py-4 text-right text-sm text-white/40">Per quotation</td>
                </tr>
              ))}
              <tr className="border-t-2 border-[#e9a13b] bg-white/[0.06]">
                <td className="px-5 py-5 font-display text-lg font-bold uppercase tracking-wide text-[#e9a13b]">
                  Total
                </td>
                <td className="px-5 py-5 text-sm text-white/65">Project total</td>
                <td className="px-5 py-5 text-right text-sm text-white/40">Per quotation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- contact -------------------------------- */

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#0f1417]">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[22rem] lg:min-h-full">
          <Image
            src="/img/nairobi.jpg"
            alt="The Nairobi skyline at dusk"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1417] via-[#0f1417]/70 to-[#0f1417]/25 lg:bg-gradient-to-r lg:from-[#0f1417]/85 lg:via-[#0f1417]/55 lg:to-[#0f1417]" />
          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12 lg:top-1/2 lg:-translate-y-1/2">
            <p className="font-display text-4xl font-bold uppercase leading-[1.05] text-white sm:text-5xl">
              Reliable Supply.
              <br />
              <span className="text-[#e9a13b]">Practical Solutions.</span>
            </p>
          </div>
        </div>

        <div className="px-5 py-20 sm:px-12 sm:py-28">
          <Eyebrow light>To Get In Touch</Eyebrow>
          <SectionTitle light>Let&apos;s discuss your supply requirement</SectionTitle>
          <p className="mt-5 max-w-md leading-relaxed text-white/75">
            Whether you are sourcing construction materials, solar equipment or other goods, Bitutam
            International is available to discuss your requirement and develop a practical supply solution.
          </p>

          <div className="mt-10">
            {[
              { icon: PhoneIcon, label: PHONE, href: PHONE_HREF },
              { icon: MailIcon, label: EMAIL, href: `mailto:${EMAIL}` },
              { icon: GlobeIcon, label: "www.bitutam.co.ke", href: "https://www.bitutam.co.ke" },
              { icon: PinIcon, label: "Nairobi, Kenya" },
            ].map(({ icon: Icon, label, href }) => {
              const inner = (
                <span className="flex items-center gap-4 border-b border-white/15 py-4 text-white/90 transition-colors group-hover:text-[#e9a13b]">
                  <Icon className="h-5 w-5 shrink-0 text-[#e9a13b]" />
                  <span className="text-lg">{label}</span>
                </span>
              );
              return href ? (
                <a key={label} href={href} className="group block">
                  {inner}
                </a>
              ) : (
                <div key={label} className="group block">
                  {inner}
                </div>
              );
            })}
          </div>

          <a
            href={`mailto:${EMAIL}`}
            className="group mt-10 inline-flex items-center gap-2.5 bg-[#e9a13b] px-8 py-4 font-display font-semibold uppercase tracking-wider text-[#0f1417] transition-colors hover:bg-[#f5b841]"
          >
            Send an Enquiry
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0f1417] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-center sm:px-8 md:flex-row md:text-left">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center bg-[#e9a13b] font-display text-xl font-bold text-[#0f1417]">
            B
          </span>
          <div className="leading-tight">
            <p className="font-display text-base font-bold uppercase tracking-wide text-white">
              Bitutam International
            </p>
            <p className="text-xs text-[#e9a13b]">Integrated Trading, Procurement &amp; Supply Solutions</p>
          </div>
        </div>
        <p className="text-sm text-white/45">
          © {new Date().getFullYear()} Bitutam International. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ---------------------------------- page ---------------------------------- */

export default function Page() {
  return (
    <main>
      <Hero />
      <Proposition />
      <Introduction />
      <Background />
      <TargetMarket />
      <Services />
      <Products />
      <Process />
      <Portfolio />
      <WhyChoose />
      <Approach />
      <Contact />
      <Footer />
    </main>
  );
}
