
import { ReactNode } from 'react';


// AdminTopbar is now a client component in _components/AdminTopbar.tsx
// import { AdminTopbar } from './_components/AdminTopbar';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
   

     

        <main className="flex-1 w-full p-6">
          {children}
        </main>
      
  );
}
