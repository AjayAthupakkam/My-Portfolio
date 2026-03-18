import Navbar from '@/components/Navbar';
import FloatingIcons from '@/components/FloatingIcons';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ChatButton from '@/components/ChatButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <FloatingIcons />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <ChatButton />
    </div>
  );
};

export default Index;
