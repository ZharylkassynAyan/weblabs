import { Component } from '@angular/core';

interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
      name: 'Coca-Cola',
      description: 'Один из самых популярных безалкогольных напитков в истории.',
      rating: 5,
      link: 'https://kaspi.kz/product1'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      name: 'Apple iPhone 13',
      description: 'iPhone 13 с дисплеем 6.1 дюйма Super Retina XDR.',
      rating: 5,
      link: 'https://kaspi.kz/product2'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5b/h9b/82803977289758.jpg?format=gallery-medium',
      name: 'Электрочайник Yingzheng ZY-305',
      description: 'Элегантный дизайн и передовые функции.',
      rating: 4,
      link: 'https://kaspi.kz/product3'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      name: 'Apple AirPods Pro 2',
      description: 'Улучшенное шумоподавление и режим прозрачности.',
      rating: 5,
      link: 'https://kaspi.kz/product4'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h18/63760532275230.jpg?format=gallery-medium',
      name: 'Роутер TP-LINK TD-W8961N',
      description: 'Беспроводной маршрутизатор N с ADSL2+.',
      rating: 5,
      link: 'https://kaspi.kz/product5'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9b/h48/86777038274590.png?format=gallery-medium',
      name: 'Morbido диван',
      description: 'Практичный диван-кровать.',
      rating: 4,
      link: 'https://kaspi.kz/product6'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h01/hb5/64089895010334.jpg?format=gallery-medium',
      name: 'Детское пюре ФрутоНяня',
      description: 'Вкусный и полезный перекус.',
      rating: 5,
      link: 'https://kaspi.kz/product7'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3a/hae/64041791717406.jpg?format=gallery-medium',
      name: 'Xiaomi камера видеонаблюдения',
      description: 'Камера 360 Home Security.',
      rating: 5,
      link: 'https://kaspi.kz/product8'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2f/hf8/64312482824222.jpg?format=gallery-medium',
      name: 'Touch Cool',
      description: 'Набор из 60 двусторонних маркеров.',
      rating: 5,
      link: 'https://kaspi.kz/product9'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h44/86684858679326.jpg?format=gallery-medium',
      name: 'Кольцо Anartxy Gold_Anar',
      description: 'Размер 19, вес 6.19 г, золото, рубин.',
      rating: 4,
      link: 'https://kaspi.kz/product10'
    }
  ];
}
