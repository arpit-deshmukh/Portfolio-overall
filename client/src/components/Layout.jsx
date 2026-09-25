import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#f1f7f3] dark:bg-[#0d0d0d] text-gray-900 dark:text-white relative transition-colors duration-300">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}