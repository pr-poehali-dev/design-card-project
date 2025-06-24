import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Отправка формы:", formData);
    onOpenChange(false);
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-gray-900">
            Заказать дизайн карточки
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Имя *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Как вас зовут?"
              required
            />
          </div>

          <div>
            <Label htmlFor="phone">Телефон *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="+7 (999) 123-45-67"
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="your@email.com"
            />
          </div>

          <div>
            <Label htmlFor="message">Сообщение</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Расскажите о вашем товаре..."
              rows={3}
            />
          </div>

          <Button type="submit" className="w-full btn-brand">
            <Icon name="Send" size={16} className="mr-2" />
            Отправить заявку
          </Button>
        </form>

        <div className="border-t pt-4 mt-6">
          <h4 className="font-semibold text-gray-900 mb-3">Наши контакты:</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Icon
                name="MessageCircle"
                size={16}
                className="text-brand-blue"
              />
              <span className="text-gray-600">Telegram: @designcards</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Mail" size={16} className="text-brand-blue" />
              <span className="text-gray-600">design@cards.ru</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
