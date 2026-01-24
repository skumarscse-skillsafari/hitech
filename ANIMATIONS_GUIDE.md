# 🎨 Premium Animations Implementation Guide

## Overview
A comprehensive animation system has been added to the department pages using **Framer Motion** and **React Intersection Observer** for smooth, jaw-dropping effects.

## 🚀 Quick Start

### 1. Using the AnimatedSection Component (Easiest)

```tsx
import AnimatedSection from './components/AnimatedSection';

// Basic usage - fadeInUp animation
<AnimatedSection>
  <div>Your content here</div>
</AnimatedSection>

// With custom animation
<AnimatedSection animation="slideInLeft" delay={0.2} duration={1}>
  <div>Content slides in from left</div>
</AnimatedSection>
```

### Available Animations:
- `fadeInUp` - Fade in from bottom with scale (default)
- `fadeInDown` - Fade in from top
- `slideInLeft` - Slide in from left with spring
- `slideInRight` - Slide in from right with spring
- `scaleIn` - Scale and fade in
- `rotateIn` - Rotate and fade in (perfect for cards)

## 🎭 Animation Examples by Section

### Hero Section / Headers
```tsx
<motion.h1
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="text-5xl font-bold"
>
  Department of Computer Science
</motion.h1>
```

### Cards (Grid Layout)
```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
  animate={{ opacity: 1, scale: 1, rotate: 0 }}
  whileHover={{ scale: 1.05, y: -10 }}
  transition={{ duration: 0.6 }}
  className="bg-white rounded-xl shadow-lg p-6"
>
  Card content
</motion.div>
```

### Staggered List Animation
```tsx
<motion.div
  variants={{
    animate: {
      transition: { staggerChildren: 0.1 }
    }
  }}
  initial="initial"
  animate="animate"
>
  {items.map((item, index) => (
    <motion.div
      key={index}
      variants={{
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 }
      }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

### Buttons with Hover Effect
```tsx
<motion.button
  whileHover={{ 
    scale: 1.05, 
    boxShadow: "0 10px 30px rgba(245, 158, 11, 0.4)" 
  }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
  className="bg-yellow-500 px-6 py-3 rounded-lg"
>
  Click Me
</motion.button>
```

### Scroll-Based Parallax
```tsx
import { useScroll, useTransform } from 'framer-motion';

const { scrollYProgress } = useScroll();
const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

<motion.div style={{ y }}>
  Parallax content
</motion.div>
```

## 🎯 Specific Section Implementations

### 1. About Department Section
```tsx
<AnimatedSection animation="fadeInUp">
  <h2>About Our Department</h2>
  <p>Department description...</p>
</AnimatedSection>
```

### 2. Vision & Mission (Side by Side)
```tsx
<div className="grid md:grid-cols-2 gap-8">
  <AnimatedSection animation="slideInLeft">
    <div className="vision-card">Vision content</div>
  </AnimatedSection>
  
  <AnimatedSection animation="slideInRight">
    <div className="mission-card">Mission content</div>
  </AnimatedSection>
</div>
```

### 3. Faculty Cards Grid
```tsx
{faculty.map((member, index) => (
  <AnimatedSection 
    key={member.id}
    animation="rotateIn"
    delay={index * 0.1}
  >
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      className="faculty-card"
    >
      Faculty details
    </motion.div>
  </AnimatedSection>
))}
```

### 4. Statistics Counter with Animation
```tsx
<motion.div
  initial={{ scale: 0 }}
  whileInView={{ scale: 1 }}
  viewport={{ once: true }}
  transition={{ type: "spring", stiffness: 100 }}
>
  <CountUp end={1000} duration={2} />
</motion.div>
```

### 5. Image Gallery with Stagger
```tsx
<motion.div
  variants={{
    animate: { transition: { staggerChildren: 0.05 } }
  }}
  initial="initial"
  whileInView="animate"
  className="grid grid-cols-3 gap-4"
>
  {images.map((img, i) => (
    <motion.img
      key={i}
      variants={{
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 }
      }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      src={img}
    />
  ))}
</motion.div>
```

## 🌟 Advanced Effects

### 1. Magnetic Button Effect
```tsx
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

<motion.button
  animate={{
    x: mousePosition.x * 0.1,
    y: mousePosition.y * 0.1,
  }}
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    });
  }}
  onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
>
  Magnetic Button
</motion.button>
```

### 2. Reveal on Scroll
```tsx
import { useInView } from 'react-intersection-observer';

const [ref, inView] = useInView({
  triggerOnce: true,
  threshold: 0.3,
});

<motion.div
  ref={ref}
  initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
  animate={inView ? {
    opacity: 1,
    clipPath: 'inset(0% 0 0 0)',
  } : {}}
  transition={{ duration: 1, ease: "easeOut" }}
>
  Content reveals from top to bottom
</motion.div>
```

### 3. Floating Animation
```tsx
<motion.div
  animate={{
    y: [0, -20, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  Floating element
</motion.div>
```

## 📱 Mobile Optimization

```tsx
// Reduce motion for mobile
const isMobile = window.innerWidth < 768;

<motion.div
  initial={{ opacity: 0, y: isMobile ? 20 : 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: isMobile ? 0.4 : 0.8 }}
>
  Content
</motion.div>
```

## 🎨 CSS Classes for Additional Effects

Add these to your `index.css`:

```css
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Gradient animation */
@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}

/* Glow effect */
.glow {
  box-shadow: 0 0 20px rgba(245, 158, 11, 0.5);
  transition: box-shadow 0.3s ease;
}

.glow:hover {
  box-shadow: 0 0 30px rgba(245, 158, 11, 0.8);
}
```

## 🚦 Performance Tips

1. **Use `triggerOnce: true`** in `useInView` to prevent re-animations
2. **Limit animations** on mobile devices
3. **Use `will-change`** CSS property for frequently animated elements
4. **Debounce scroll events** for better performance
5. **Lazy load** heavy animation components

## 💡 Best Practices

1. **Consistency**: Use similar animations for similar elements
2. **Timing**: Keep animations between 0.3s - 0.8s for best UX
3. **Easing**: Use custom easing `[0.6, -0.05, 0.01, 0.99]` for premium feel
4. **Stagger delays**: Use 0.1s - 0.2s between items
5. **Hover states**: Always add subtle hover animations for interactive elements

## 🎬 Example: Complete Section with Animations

```tsx
import AnimatedSection from './components/AnimatedSection';
import { motion } from 'framer-motion';

const MySection = () => {
  return (
    <section className="py-16">
      {/* Animated Header */}
      <AnimatedSection animation="fadeInDown">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Features
        </h2>
      </AnimatedSection>

      {/* Animated Cards Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <AnimatedSection
            key={feature.id}
            animation="fadeInUp"
            delay={index * 0.1}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};
```

---

## 📝 Quick Reference

| Effect | Code |
|--------|------|
| Fade In Up | `<AnimatedSection animation="fadeInUp">` |
| Slide Left | `<AnimatedSection animation="slideInLeft">` |
| Scale | `<AnimatedSection animation="scaleIn">` |
| Hover Scale | `whileHover={{ scale: 1.05 }}` |
| Tap Effect | `whileTap={{ scale: 0.95 }}` |
| Stagger | `transition={{ staggerChildren: 0.1 }}` |
| Spring | `transition={{ type: "spring" }}` |
| Delay | `delay={0.2}` |

---

**Ready to animate!** 🎉 Start with simple `AnimatedSection` components and progressively add more complex effects as needed.
