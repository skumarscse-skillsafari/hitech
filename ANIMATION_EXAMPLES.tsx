/**
 * 🎨 ANIMATION EXAMPLES - Before & After
 * Copy these patterns and apply them to DepartmentDetail.tsx and other pages
 */

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedSection from './components/AnimatedSection';

// ============================================
// EXAMPLE 1: Hero Section / Department Header
// ============================================

// ❌ BEFORE (Static)
const HeroSectionBefore = () => (
  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-14 text-white">
    <div className="max-w-4xl space-y-4 sm:space-y-6">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold">
        Department Name
      </h1>
      <p className="text-base sm:text-lg lg:text-sl text-gray-200">
        Department description
      </p>
    </div>
  </div>
);

// ✅ AFTER (Animated)
const HeroSectionAfter = () => (
  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-14 text-white">
    <div className="max-w-4xl space-y-4 sm:space-y-6">
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="text-3xl sm:text-5xl lg:text-6xl font-bold"
      >
        Department Name
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-base sm:text-lg lg:text-sl text-gray-200"
      >
        Department description
      </motion.p>
    </div>
  </div>
);

// ============================================
// EXAMPLE 2: Vision & Mission Cards
// ============================================

// ❌ BEFORE (Static)
const VisionMissionBefore = () => (
  <div className="grid md:grid-cols-2 gap-6 mt-16 lg:mt-20">
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <h4 className="text-lg font-bold">Vision</h4>
      <p>Vision text...</p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <h4 className="text-lg font-bold">Mission</h4>
      <p>Mission text...</p>
    </div>
  </div>
);

// ✅ AFTER (Animated with AnimatedSection)
const VisionMissionAfter = () => (
  <div className="grid md:grid-cols-2 gap-6 mt-16 lg:mt-20">
    <AnimatedSection animation="slideInLeft" duration={0.8}>
      <motion.div 
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-yellow-400"
      >
        <h4 className="text-lg font-bold">Vision</h4>
        <p>Vision text...</p>
      </motion.div>
    </AnimatedSection>
    
    <AnimatedSection animation="slideInRight" duration={0.8}>
      <motion.div 
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-yellow-400"
      >
        <h4 className="text-lg font-bold">Mission</h4>
        <p>Mission text...</p>
      </motion.div>
    </AnimatedSection>
  </div>
);

// ============================================
// EXAMPLE 3: Programs Grid Cards
// ============================================

// ❌ BEFORE (Static)
const ProgramsGridBefore = ({ programs }: any) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {programs.map((program: any, index: number) => (
      <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl">
        <h5 className="font-bold">{program.name}</h5>
        <p>{program.duration}</p>
      </div>
    ))}
  </div>
);

// ✅ AFTER (Animated with Stagger)
const ProgramsGridAfter = ({ programs }: any) => (
  <motion.div 
    variants={{
      animate: {
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2
        }
      }
    }}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.2 }}
    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
  >
    {programs.map((program: any, index: number) => (
      <motion.div
        key={index}
        variants={{
          initial: { opacity: 0, y: 50, scale: 0.9 },
          animate: { opacity: 1, y: 0, scale: 1 }
        }}
        whileHover={{ 
          scale: 1.05, 
          y: -10,
          transition: { duration: 0.3 }
        }}
        className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 hover:border-yellow-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
      >
        <h5 className="font-bold">{program.name}</h5>
        <p>{program.duration}</p>
      </motion.div>
    ))}
  </motion.div>
);

// ============================================
// EXAMPLE 4: OBE Principles Cards
// ============================================

// ❌ BEFORE (Static)
const OBEPrinciplesBefore = ({ principles }: any) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {principles.map((principle: any, index: number) => (
      <div key={index} className="bg-gray-50 p-6 rounded-xl">
        <h5>{principle.title}</h5>
        <p>{principle.description}</p>
      </div>
    ))}
  </div>
);

// ✅ AFTER (Animated with Rotation)
const OBEPrinciplesAfter = ({ principles }: any) => (
  <motion.div 
    variants={{
      animate: {
        transition: {
          staggerChildren: 0.15
        }
      }
    }}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.3 }}
    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
  >
    {principles.map((principle: any, index: number) => (
      <motion.div
        key={index}
        variants={{
          initial: { opacity: 0, rotate: -15, scale: 0.8 },
          animate: { opacity: 1, rotate: 0, scale: 1 }
        }}
        whileHover={{ 
          scale: 1.08, 
          rotate: 2,
          boxShadow: "0 20px 40px rgba(245, 158, 11, 0.2)",
          transition: { duration: 0.3 }
        }}
        className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-yellow-400 transition-colors duration-300 cursor-pointer"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
          className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center mb-4"
        >
          {/* Icon here */}
        </motion.div>
        <h5>{principle.title}</h5>
        <p>{principle.description}</p>
      </motion.div>
    ))}
  </motion.div>
);

// ============================================
// EXAMPLE 5: Section Headers with Underline
// ============================================

// ❌ BEFORE (Static)
const SectionHeaderBefore = () => (
  <div className="text-center mb-12">
    <h4 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
      Section Title
    </h4>
    <div className="w-32 h-1 bg-yellow-500 rounded-full mx-auto mb-6"></div>
  </div>
);

// ✅ AFTER (Animated)
const SectionHeaderAfter = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  
  return (
    <div ref={ref} className="text-center mb-12">
      <motion.h4 
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
      >
        Section Title
      </motion.h4>
      <motion.div 
        initial={{ width: 0, opacity: 0 }}
        animate={inView ? { width: 128, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="h-1 bg-yellow-500 rounded-full mx-auto mb-6"
      />
    </div>
  );
};

// ============================================
// EXAMPLE 6: Buttons with Premium Hover
// ============================================

// ❌ BEFORE (Static hover)
const ButtonBefore = () => (
  <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded-lg">
    Click Me
  </button>
);

// ✅ AFTER (Animated hover)
const ButtonAfter = () => (
  <motion.button
    whileHover={{ 
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(245, 158, 11, 0.5)",
      y: -3
    }}
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold"
  >
    Click Me
  </motion.button>
);

// ============================================
// EXAMPLE 7: Faculty/Team Cards Grid
// ============================================

// ❌ BEFORE (Static)
const FacultyGridBefore = ({ faculty }: any) => (
  <div className="grid md:grid-cols-3 gap-6">
    {faculty.map((member: any) => (
      <div key={member.id} className="bg-white rounded-xl shadow-lg p-6">
        <img src={member.image} alt={member.name} className="w-full rounded-lg" />
        <h3>{member.name}</h3>
        <p>{member.designation}</p>
      </div>
    ))}
  </div>
);

// ✅ AFTER (Animated)
const FacultyGridAfter = ({ faculty }: any) => (
  <div className="grid md:grid-cols-3 gap-6">
    {faculty.map((member: any, index: number) => (
      <AnimatedSection 
        key={member.id}
        animation="rotateIn"
        delay={index * 0.1}
      >
        <motion.div 
          whileHover={{ 
            scale: 1.05, 
            y: -10,
            rotateY: 5,
            transition: { duration: 0.4, ease: "easeOut" }
          }}
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
        >
          <motion.img 
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            src={member.image} 
            alt={member.name} 
            className="w-full rounded-lg overflow-hidden"
          />
          <h3 className="mt-4 font-bold">{member.name}</h3>
          <p className="text-gray-600">{member.designation}</p>
        </motion.div>
      </AnimatedSection>
    ))}
  </div>
);

// ============================================
// EXAMPLE 8: Statistics Counter
// ============================================

// ✅ Animated Counter
const AnimatedCounter = ({ value, label }: { value: number; label: string }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = value / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="text-center"
    >
      <motion.div 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        className="text-5xl font-bold text-yellow-600 mb-2"
      >
        {count}+
      </motion.div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  );
};

// ============================================
// EXAMPLE 9: Image Gallery with Hover Effect
// ============================================

// ✅ Animated Gallery
const AnimatedGallery = ({ images }: any) => (
  <motion.div
    variants={{
      animate: {
        transition: {
          staggerChildren: 0.05
        }
      }
    }}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="grid grid-cols-2 md:grid-cols-4 gap-4"
  >
    {images.map((image: any, index: number) => (
      <motion.div
        key={index}
        variants={{
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 }
        }}
        whileHover={{ 
          scale: 1.1, 
          rotate: 5,
          zIndex: 10,
          transition: { duration: 0.3 }
        }}
        className="relative overflow-hidden rounded-lg cursor-pointer"
      >
        <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4"
        >
          <p className="text-white font-semibold">{image.title}</p>
        </motion.div>
      </motion.div>
    ))}
  </motion.div>
);

// ============================================
// EXAMPLE 10: Floating Elements
// ============================================

// ✅ Floating Icon/Badge
const FloatingElement = () => (
  <motion.div
    animate={{
      y: [0, -15, 0],
      rotate: [0, 5, 0, -5, 0]
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="absolute top-10 right-10"
  >
    <div className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-full shadow-xl">
      New!
    </div>
  </motion.div>
);

// ============================================
// 🎯 QUICK IMPLEMENTATION STEPS
// ============================================

/*
1. Import AnimatedSection at the top of your file:
   import AnimatedSection from './components/AnimatedSection';
   import { motion } from 'framer-motion';

2. Wrap sections with AnimatedSection:
   <AnimatedSection animation="fadeInUp">
     <YourContent />
   </AnimatedSection>

3. Add hover effects to cards:
   <motion.div whileHover={{ scale: 1.05, y: -10 }}>
     Card content
   </motion.div>

4. Add button animations:
   <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
     Button text
   </motion.button>

5. For grids, use stagger animation (see ProgramsGridAfter example)

6. Test on mobile - animations should be smooth on all devices
*/

export default {
  HeroSectionAfter,
  VisionMissionAfter,
  ProgramsGridAfter,
  OBEPrinciplesAfter,
  SectionHeaderAfter,
  ButtonAfter,
  FacultyGridAfter,
  AnimatedCounter,
  AnimatedGallery,
  FloatingElement
};
