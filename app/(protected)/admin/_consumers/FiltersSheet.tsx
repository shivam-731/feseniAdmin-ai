"use client";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetClose, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { ConsumersFilters } from './ConsumersFilters';

export default function FiltersSheet({ filters, setFilters }: { filters: any; setFilters: (f: any) => void }) {
  const defaults = { search: '', geography: 'All', status: 'All', agentsMin: '', agentsMax: '', duration: 'All', expiryStatus: 'All', promoChannel: 'All', agentFilter: '' };

  const handleReset = () => setFilters(defaults);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Filters</Button>
      </SheetTrigger>
    <SheetContent side="right" className="w-[400px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>

        <div className="py-4">
          <ConsumersFilters filters={filters} setFilters={setFilters} />
        </div>

        <SheetFooter>
          <div className="flex w-full justify-between">
            <Button variant="ghost" onClick={handleReset}>Reset</Button>
            <SheetClose asChild>
              <Button>Apply Filters</Button>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
