import Icon from "@/components/ui/icon";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Базовый",
      subtitle: "Аналитика и стратегия",
      price: "15 000",
      popular: false,
      features: [
        "Анализ целей и задач бизнеса (на основе данных)",
        "Сбор информации о потребностях ЦА",
        "Исследование ниши и конкурентов",
        "Подбор контент-стратегии (тезисы, образы, фотостиль)",
        "Проработка структуры продуктовой воронки",
        "Аудит необходимых ресурсов (фото, ТЗ)",
        "Формирование гипотез для тестирования карточек",
      ],
    },
    {
      name: "Расширенный",
      subtitle: "Полное сопровождение",
      price: "35 000",
      popular: true,
      features: [
        "Все услуги базового тарифа",
        "Обработка и ретушь исходников (до 15 фото)",
        "Разработка логотипа и элементов бренда",
        "Уникальный дизайн карточек товаров",
        "3 бесплатных правки по всем пунктам",
        "Рекомендации по упаковке товара",
        "Бонус: Гайд по оформлению карточек под конкретный маркетплейс",
      ],
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Тарифы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите подходящий тариф для увеличения продаж на маркетплейсах
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in ${
                plan.popular ? "ring-4 ring-brand-orange scale-105" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-brand-orange text-white px-6 py-2 rounded-full text-sm font-bold">
                    🔥 ПОПУЛЯРНЫЙ
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.subtitle}</p>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-5xl font-bold text-brand-blue">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">₽</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={16} className="text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  plan.popular
                    ? "bg-brand-orange text-white hover:bg-orange-600 hover:scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Выбрать тариф
              </button>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Остались вопросы?
            </h3>
            <p className="text-gray-600 mb-6">
              Не знаете, какой тариф выбрать? Обсудим ваши задачи и подберём
              оптимальное решение
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-brand">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Бесплатная консультация
              </button>
              <button className="btn-secondary">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
