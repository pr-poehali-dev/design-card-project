import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-brand min-h-screen flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 opacity-30"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Увеличьте продажи на <span className="text-yellow-300">300%</span>{" "}
              с дизайном карточек
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Профессиональный дизайн карточек товаров для Wildberries и Ozon.
              От идеи до результата за 24 часа.
            </p>

            {/* Key benefits */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Icon name="Check" size={16} className="text-blue-900" />
                </div>
                <span className="text-lg">Рост конверсии</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Icon name="Zap" size={16} className="text-blue-900" />
                </div>
                <span className="text-lg">За 24 часа</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Icon name="Award" size={16} className="text-blue-900" />
                </div>
                <span className="text-lg">500+ довольных клиентов</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Icon name="RefreshCw" size={16} className="text-blue-900" />
                </div>
                <span className="text-lg">3 бесплатные правки</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="btn-brand text-lg px-8 py-4 animate-fade-in-delay"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Заказать дизайн
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="btn-outline bg-white/10 border-white text-white hover:bg-white hover:text-brand-blue text-lg px-8 py-4"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Посмотреть портфолио
              </Button>
            </div>
          </div>

          {/* Visual content */}
          <div className="animate-scale-in">
            <div className="relative">
              {/* Main showcase image */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-80 flex items-center justify-center">
                  <div className="text-center">
                    <Icon
                      name="ShoppingCart"
                      size={64}
                      className="text-brand-blue mx-auto mb-4"
                    />
                    <p className="text-2xl font-bold text-gray-800">ДО</p>
                    <p className="text-gray-600">Скучная карточка</p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute top-1/2 -right-8 bg-yellow-400 rounded-full p-3 shadow-lg">
                <Icon name="ArrowRight" size={24} className="text-blue-900" />
              </div>

              {/* After showcase */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-brand rounded-xl h-48 w-64 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Icon
                      name="TrendingUp"
                      size={48}
                      className="mx-auto mb-2"
                    />
                    <p className="text-xl font-bold">ПОСЛЕ</p>
                    <p className="text-sm opacity-90">Продающая карточка</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
