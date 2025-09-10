import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    position: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
    // Здесь будет отправка на сервер
    alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', position: '', message: '' });
  };

  const positions = [
    {
      title: 'Грузчик',
      description: 'Погрузка, разгрузка товаров, работа на складе',
      image: '/img/e00aa82d-2336-41e7-a1d3-ced94a697362.jpg',
      requirements: ['Физическая выносливость', 'Ответственность', 'Опыт от 1 года'],
      salary: 'от 40 000 ₽'
    },
    {
      title: 'Упаковщик',
      description: 'Упаковка товаров, контроль качества продукции',
      image: '/img/e08a81c9-8f32-419d-8c19-28fcc3bdbc6b.jpg',
      requirements: ['Внимательность', 'Аккуратность', 'Опыт приветствуется'],
      salary: 'от 35 000 ₽'
    },
    {
      title: 'Водитель-погрузчик',
      description: 'Управление погрузочной техникой, транспортировка грузов',
      image: '/img/39309860-353a-43c0-b700-fc1d062af5b1.jpg',
      requirements: ['Права категории B', 'Опыт работы на погрузчике', 'Знание ТБ'],
      salary: 'от 50 000 ₽'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" size={32} className="text-primary" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">SHIFT РАБОТА</h1>
                <p className="text-sm text-gray-600">Надежный работодатель</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Icon name="Phone" size={20} className="text-primary" />
              <span className="text-gray-700 font-medium">+7 (800) 123-45-67</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Работа вахтовым методом
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Стабильная работа с официальным трудоустройством. 
            Полное обеспечение проживанием и питанием на период вахты.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" size={20} className="text-green-500" />
              <span>Официальное трудоустройство</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" size={20} className="text-green-500" />
              <span>Бесплатное проживание</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" size={20} className="text-green-500" />
              <span>Стабильная зарплата</span>
            </div>
          </div>
        </div>
      </section>

      {/* Positions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Открытые вакансии
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {positions.map((position, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-100">
                  <img 
                    src={position.image} 
                    alt={position.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{position.title}</CardTitle>
                  <CardDescription>{position.description}</CardDescription>
                  <div className="text-2xl font-bold text-primary">{position.salary}</div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Требования:</h4>
                  <ul className="space-y-1 text-sm text-gray-600 mb-4">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Icon name="Dot" size={16} className="text-primary" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    onClick={() => setFormData({...formData, position: position.title})}
                  >
                    Откликнуться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Подать заявку на работу
            </h3>
            <p className="text-center text-gray-600 mb-8">
              Заполните форму, и мы свяжемся с вами в течение рабочего дня
            </p>
            
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Полное имя *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Иванов Иван Иванович"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Номер телефона *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="position">Желаемая должность *</Label>
                    <select
                      id="position"
                      required
                      value={formData.position}
                      onChange={(e) => setFormData({...formData, position: e.target.value})}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Выберите должность</option>
                      <option value="Грузчик">Грузчик</option>
                      <option value="Упаковщик">Упаковщик</option>
                      <option value="Водитель-погрузчик">Водитель-погрузчик</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Дополнительная информация</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Расскажите о своем опыте работы, навыках..."
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building2" size={28} className="text-primary" />
                <span className="text-xl font-bold">SHIFT РАБОТА</span>
              </div>
              <p className="text-gray-400">
                Надежная компания с многолетним опытом. 
                Обеспечиваем комфортные условия труда и стабильную оплату.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (800) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>work@shiftwork.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>г. Москва, ул. Рабочая, 123</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Преимущества</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-green-500" />
                  <span>Белая зарплата</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-green-500" />
                  <span>Социальные гарантии</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-green-500" />
                  <span>Карьерный рост</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-green-500" />
                  <span>Обучение за счет компании</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SHIFT РАБОТА. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}