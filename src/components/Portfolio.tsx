import Icon from "@/components/ui/icon";

const Portfolio = () => {
  const portfolioItems = [
    {
      category: "Электроника",
      title: "Наушники Bluetooth",
      before: "Продажи: 10 в день",
      after: "Продажи: 45 в день",
      improvement: "+350%",
    },
    {
      category: "Одежда",
      title: "Женские платья",
      before: "Продажи: 5 в день",
      after: "Продажи: 25 в день",
      improvement: "+400%",
    },
    {
      category: "Дом и сад",
      title: "Кухонная посуда",
      before: "Продажи: 8 в день",
      after: "Продажи: 32 в день",
      improvement: "+300%",
    },
    {
      category: "Спорт",
      title: "Фитнес оборудование",
      before: "Продажи: 3 в день",
      after: "Продажи: 18 в день",
      improvement: "+500%",
    },
    {
      category: "Красота",
      title: "Косметика",
      before: "Продажи: 15 в день",
      after: "Продажи: 60 в день",
      improvement: "+300%",
    },
    {
      category: "Автотовары",
      title: "Аксессуары для авто",
      before: "Продажи: 6 в день",
      after: "Продажи: 24 в день",
      improvement: "+300%",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Наши работы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Реальные результаты наших клиентов. Смотрите, как изменились их
            продажи после обновления дизайна карточек.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-brand-blue bg-blue-100 px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <div className="text-2xl font-bold text-success">
                  {item.improvement}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {item.title}
              </h3>

              <div className="space-y-4">
                {/* Before */}
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="font-medium text-gray-700">ДО</span>
                  </div>
                  <span className="text-gray-600">{item.before}</span>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center">
                    <Icon name="ArrowDown" size={16} className="text-white" />
                  </div>
                </div>

                {/* After */}
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-medium text-gray-700">ПОСЛЕ</span>
                  </div>
                  <span className="text-gray-600">{item.after}</span>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <Icon
                    name="ExternalLink"
                    size={20}
                    className="text-brand-blue mx-auto"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Посмотреть детали
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-600 mb-6">
            Хотите такие же результаты для своих товаров?
          </p>
          <button className="btn-brand">
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Заказать дизайн карточки
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
