import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white relative">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
