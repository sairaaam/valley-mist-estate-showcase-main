import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './dialog';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import { Textarea } from './textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { Calendar, Download, Phone, Mail, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface BookingFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  formType: 'booking' | 'brochure';
}

export const BookingFormDialog: React.FC<BookingFormDialogProps> = ({
  open,
  onOpenChange,
  formType
}) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', visitDate: '', timeSlot: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const downloadBrochure = () => {
    const link = document.createElement('a');
    link.href = '/src/assets/Esthetics-Outline.pdf';
    link.download = 'Valley-Mist-Estate-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (formType === 'brochure') {
      downloadBrochure();
      toast({ title: "Brochure Downloaded!", description: "The brochure has been downloaded." });
    } else {
      toast({ title: "Booking Request Submitted!", description: "We'll contact you within 24 hours." });
    }

    setIsSubmitting(false);
    onOpenChange(false);
    setFormData({ name: '', email: '', phone: '', visitDate: '', timeSlot: '', message: '' });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md md:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl font-bold">
            {formType === 'booking' ? (
              <><Calendar className="h-5 w-5 text-emerald-600" />Book Your Estate Visit</>
            ) : (
              <><Download className="h-5 w-5 text-emerald-600" />Download Brochure</>
            )}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name"><User className="h-4 w-4 inline mr-1" />Full Name *</Label>
              <Input id="name" value={formData.name} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email"><Mail className="h-4 w-4 inline mr-1" />Email *</Label>
              <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone"><Phone className="h-4 w-4 inline mr-1" />Phone *</Label>
            <Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))} required />
          </div>

          {formType === 'booking' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="visitDate">Visit Date</Label>
                <Input id="visitDate" type="date" value={formData.visitDate} onChange={(e) => setFormData(prev => ({ ...prev, visitDate: e.target.value }))} min={new Date().toISOString().split('T')[0]} />
              </div>
              <div className="space-y-2">
                <Label>Time Slot</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, timeSlot: value }))}>
                  <SelectTrigger><SelectValue placeholder="Select time" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                    <SelectItem value="evening">Evening (4 PM - 7 PM)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">Cancel</Button>
            <Button type="submit" disabled={!formData.name || !formData.email || !formData.phone || isSubmitting} className="flex-1 bg-emerald-600 hover:bg-emerald-700">
              {isSubmitting ? 'Processing...' : formType === 'booking' ? 'Submit Request' : 'Download Brochure'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
