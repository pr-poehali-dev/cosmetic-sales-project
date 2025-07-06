import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("все");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["все", "губы", "глаза", "тон", "брови", "скулы"];
  const brands = [
    "MAC",
    "Dior",
    "Chanel",
    "YSL",
    "Maybelline",
    "L'Oreal",
    "NYX",
  ];

  const products = [
    {
      id: 1,
      name: "Матовая помада Ruby Woo",
      brand: "MAC",
      price: 2490,
      oldPrice: 2990,
      category: "губы",
      rating: 4.8,
      reviews: 124,
      discount: 15,
      image: "/img/3d10d291-538b-406a-b20c-dbb2bb3fe108.jpg",
    },
    {
      id: 2,
      name: "Тональная основа Teint Idole",
      brand: "Lancôme",
      price: 4200,
      oldPrice: 4800,
      category: "тон",
      rating: 4.9,
      reviews: 89,
      discount: 12,
      image: "/img/3d10d291-538b-406a-b20c-dbb2bb3fe108.jpg",
    },
    {
      id: 3,
      name: "Палетка теней Naked Heat",
      brand: "Urban Decay",
      price: 3590,
      oldPrice: 3990,
      category: "глаза",
      rating: 4.7,
      reviews: 156,
      discount: 10,
      image: "/img/3d10d291-538b-406a-b20c-dbb2bb3fe108.jpg",
    },
    {
      id: 4,
      name: "Тушь для ресниц Big Shot",
      brand: "Maybelline",
      price: 890,
      oldPrice: 1090,
      category: "глаза",
      rating: 4.6,
      reviews: 203,
      discount: 18,
      image: "/img/3d10d291-538b-406a-b20c-dbb2bb3fe108.jpg",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "все" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Beauty Store
              </div>
              <nav className="hidden md:flex space-x-6">
                <a
                  href="#home"
                  className="text-gray-700 hover:text-pink-600 transition-colors"
                >
                  Главная
                </a>
                <a
                  href="#catalog"
                  className="text-gray-700 hover:text-pink-600 transition-colors"
                >
                  Каталог
                </a>
                <a
                  href="#promotions"
                  className="text-gray-700 hover:text-pink-600 transition-colors"
                >
                  Акции
                </a>
                <a
                  href="#blog"
                  className="text-gray-700 hover:text-pink-600 transition-colors"
                >
                  Блог
                </a>
                <a
                  href="#reviews"
                  className="text-gray-700 hover:text-pink-600 transition-colors"
                >
                  Отзывы
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="Heart" size={20} />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="ShoppingCart" size={20} />
              </Button>
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-200">
                  ✨ Скидки до 50% на бестселлеры
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 bg-clip-text text-transparent leading-tight">
                  Твоя красота — наша страсть
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Откройте для себя мир декоративной косметики! Более 1000
                  товаров от ведущих брендов. Скидки постоянным клиентам и в
                  день рождения.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 text-lg"
                >
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Каталог товаров
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-3 text-lg"
                >
                  <Icon name="Gift" size={20} className="mr-2" />
                  Акции и скидки
                </Button>
              </div>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">1000+</div>
                  <div className="text-sm text-gray-600">товаров</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600">брендов</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">15%</div>
                  <div className="text-sm text-gray-600">скидка</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                src="/img/de3ee451-d899-41b5-92f5-907ac574286f.jpg"
                alt="Beauty Model"
                className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Популярные товары
            </h2>
            <p className="text-xl text-gray-600">
              Хиты продаж и новинки от ведущих брендов
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <Input
                placeholder="Поиск по товарам и брендам..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {product.discount > 0 && (
                      <Badge className="absolute top-2 left-2 bg-pink-500 text-white">
                        -{product.discount}%
                      </Badge>
                    )}
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Icon name="Heart" size={16} />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">
                      {product.brand}
                    </Badge>
                    <CardTitle className="text-lg line-clamp-2">
                      {product.name}
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Icon
                          name="Star"
                          size={16}
                          className="text-yellow-400 fill-current"
                        />
                        <span className="text-sm text-gray-600 ml-1">
                          {product.rating}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">
                        ({product.reviews})
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-pink-600">
                        {product.price.toLocaleString()} ₽
                      </span>
                      {product.oldPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          {product.oldPrice.toLocaleString()} ₽
                        </span>
                      )}
                    </div>
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />В
                      корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section
        id="promotions"
        className="py-20 bg-gradient-to-r from-pink-100 to-purple-100"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Акции и скидки
            </h2>
            <p className="text-xl text-gray-600">
              Специальные предложения для наших клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-pink-500 to-pink-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Icon name="Gift" size={32} />
                  <Badge className="bg-white text-pink-600">Новичкам</Badge>
                </div>
                <CardTitle className="text-2xl mb-2">Скидка 20%</CardTitle>
                <CardDescription className="text-pink-100">
                  На первую покупку от 3000 ₽
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Icon name="Calendar" size={32} />
                  <Badge className="bg-white text-purple-600">
                    Именинникам
                  </Badge>
                </div>
                <CardTitle className="text-2xl mb-2">Скидка 30%</CardTitle>
                <CardDescription className="text-purple-100">
                  В день рождения и неделю после
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Icon name="Crown" size={32} />
                  <Badge className="bg-white text-orange-600">VIP</Badge>
                </div>
                <CardTitle className="text-2xl mb-2">Скидка 15%</CardTitle>
                <CardDescription className="text-orange-100">
                  Постоянным клиентам на всё
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Отзывы наших клиентов
            </h2>
            <p className="text-xl text-gray-600">
              Что говорят о нас покупатели
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Анна К.",
                rating: 5,
                text: "Потрясающий выбор косметики! Заказывала помаду MAC, пришла быстро и в отличном состоянии. Буду заказывать еще!",
                product: "Помада MAC Ruby Woo",
              },
              {
                name: "Мария Д.",
                rating: 5,
                text: "Отличные цены и качество! Особенно понравилась программа лояльности. Скидка в день рождения - приятный бонус.",
                product: "Тональная основа Lancôme",
              },
              {
                name: "Елена С.",
                rating: 5,
                text: "Заказала палетку теней, очень довольна! Консультанты помогли выбрать идеальный оттенок. Рекомендую всем!",
                product: "Палетка Urban Decay",
              },
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={16}
                          className="fill-current"
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {review.name}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{review.text}</p>
                  <Badge variant="outline" className="text-xs">
                    {review.product}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-4">
                Beauty Store
              </div>
              <p className="text-gray-400">
                Ваш надежный партнер в мире красоты
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-pink-400">
                    Губы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400">
                    Глаза
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400">
                    Тон
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400">
                    Брови
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-pink-400">
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400">
                    Оплата
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400">
                    Возврат
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (999) 123-45-67</p>
                <p>info@beautystore.ru</p>
                <div className="flex space-x-4 mt-4">
                  <Icon
                    name="Instagram"
                    size={20}
                    className="hover:text-pink-400 cursor-pointer"
                  />
                  <Icon
                    name="Facebook"
                    size={20}
                    className="hover:text-pink-400 cursor-pointer"
                  />
                  <Icon
                    name="Twitter"
                    size={20}
                    className="hover:text-pink-400 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Beauty Store. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
