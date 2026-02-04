
import React from 'react';
import { Camera, MapPin, Car, ShieldCheck, Heart } from 'lucide-react';
import { Destination, Itinerary, ServiceFeature } from './types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'kanas',
    name: '喀纳斯湖',
    location: '阿勒泰地区',
    description: '神的后花园，秋色斑斓的如画胜境。',
    image: 'https://picsum.photos/seed/kanas/800/600',
    tag: '摄影天堂'
  },
  {
    id: 'sailimu',
    name: '赛里木湖',
    location: '博尔塔拉州',
    description: '大西洋最后一滴眼泪，湛蓝如镜的纯净之地。',
    image: 'https://picsum.photos/seed/sailimu/800/600',
    tag: '极致纯净'
  },
  {
    id: 'kashi',
    name: '喀什古城',
    location: '喀什地区',
    description: '两千年的活古城，体验最浓郁的西域风情。',
    image: 'https://picsum.photos/seed/kashi/800/600',
    tag: '人文历史'
  },
  {
    id: 'nalati',
    name: '那拉提草原',
    location: '伊犁州',
    description: '空中草原，云端之上的绿色海洋。',
    image: 'https://picsum.photos/seed/nalati/800/600',
    tag: '高山草场'
  }
];

export const ITINERARIES: Itinerary[] = [
  {
    id: 'north-1',
    title: '北疆大环线·寻找喀纳斯水怪之旅',
    days: 9,
    price: 6880,
    route: ['乌鲁木齐', '五彩滩', '喀纳斯', '禾木', '魔鬼城'],
    highlights: ['禾木星空下', '喀纳斯漫步', '魔鬼城日落'],
    image: 'https://picsum.photos/seed/north-trip/600/400'
  },
  {
    id: 'south-1',
    title: '南疆秘境·塔里木胡杨与帕米尔高原',
    days: 12,
    price: 8500,
    route: ['库尔勒', '塔中', '喀什', '塔县', '和田'],
    highlights: ['穿越沙漠公路', '帕米尔雪山', '古城人文'],
    image: 'https://picsum.photos/seed/south-trip/600/400'
  },
  {
    id: 'ili-1',
    title: '浪漫伊犁·万亩薰衣草与空中草原',
    days: 7,
    price: 5200,
    route: ['赛里木湖', '霍尔果斯', '那拉提', '唐布拉'],
    highlights: ['蓝色赛湖', '花海漫步', '百里画廊'],
    image: 'https://picsum.photos/seed/ili-trip/600/400'
  }
];

export const SERVICES: ServiceFeature[] = [
  {
    icon: <Car className="w-8 h-8 text-amber-600" />,
    title: '越野包车',
    description: '专属SUV/越野车，随停随走，深入秘境。'
  },
  {
    icon: <MapPin className="w-8 h-8 text-amber-600" />,
    title: '本地向导',
    description: '十年驾龄本地老司机，既是司机也是向导。'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-amber-600" />,
    title: '安全保障',
    description: '全流程意外保险，24小时地接管家服务。'
  },
  {
    icon: <Heart className="w-8 h-8 text-amber-600" />,
    title: '定制路线',
    description: '拒绝走马观花，为您量身定制专属行程。'
  }
];
