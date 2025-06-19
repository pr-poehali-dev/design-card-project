import Icon from "@/components/ui/icon";

const Benefits = () => {
  const benefits = [
    {
      icon: "TrendingUp",
      title: "Рост продаж до 300%",
      description:
        "Профессиональный дизайн увеличивает конверсию и привлекает больше покупателей к вашим товарам",
    },
    {
      icon: "Zap",
      title: "Быстро — за 24 часа",
      description:
        "Получите готовый дизайн карточки уже завтра. Не теряйте продажи из-за долгого ожидания",
    },
    {
      icon: "Eye",
      title: "Выделяемся среди конкурентов",
      description:
        "Уникальный стиль и подход к каждой карточке. Ваш товар заметят среди тысяч других",
    },
    {
      icon: "Target",
      title: "Точно в цель",
      description:
        "Изучаем вашу нишу и целевую аудиторию для создания максимально эффективного дизайна",
    },
    {
      icon: "RefreshCw",
      title: "3 бесплатные правки",
      description:
        "Доводим дизайн до совершенства. Вносим изменения, пока результат вас не устроит",
    },
    {
      icon: "Award",
      title: "500+ довольных клиентов",
      description:
        "Опыт работы с самыми разными нишами. Знаем, что работает на маркетплейсах",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы знаем секреты создания карточек, которые продают. Каждый элемент
            продуман для максимальной конверсии.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mb-6">
                <Icon
                  name={benefit.icon as any}
                  size={32}
                  className="text-white"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 bg-white rounded-3xl p-12 shadow-xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-blue mb-2">
                500+
              </div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-orange mb-2">
                24ч
              </div>
              <div className="text-gray-600">Среднее время работы</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-blue mb-2">
                300%
              </div>
              <div className="text-gray-600">Рост продаж в среднем</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-orange mb-2">
                99%
              </div>
              <div className="text-gray-600">Положительных отзывов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
