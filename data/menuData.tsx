import {
    FaMugHot,
    FaGlassWater,
    FaIceCream,
    FaCookie,
    FaLeaf,
    FaBreadSlice,
    FaWineGlass
} from "react-icons/fa6";
import { BiSolidCoffeeBean } from "react-icons/bi";
import { GiCoffeeCup, GiSodaCan } from "react-icons/gi";
import { getAssetPath } from "@/lib/utils";

export interface MenuItem {
    name: string;
    price: string;
    description?: string;
    image?: string;
}

export interface MenuCategory {
    category: string;
    icon: React.ReactNode;
    image?: string;
    items: MenuItem[];
}

export const menuData: MenuCategory[] = [
    {
        category: "SICAK KAHVELER",
        icon: <FaMugHot />,
        image: "/o2photos/sicakkahveler.jpg",
        items: [
            { name: "Espresso", price: "₺75,00", description: "Yoğun ve zengin aromalı klasik İtalyan kahvesi.", image: "/o2photos/espresso.jpg" },
            { name: "Türk Kahvesi", price: "₺90,00", description: "Geleneksel yöntemlerle hazırlanan bol köpüklü Türk kahvesi.", image: "/o2photos/turkkahvesi.jpg" },
            { name: "Affogato", price: "₺135,00", description: "Sıcak espresso ve vanilyalı dondurmanın mükemmel uyumu.", image: "/o2photos/affogato.jpg" },
            { name: "Americano", price: "₺100,00", description: "Espresso ve sıcak suyun dengeli buluşması.", image: "/o2photos/americano.jpg" },
            { name: "Cappucino", price: "₺125,00", description: "Espresso, sıcak süt ve süt köpüğü.", image: "/o2photos/cappucino.jpg" },
            { name: "Con Panna", price: "₺135,00", description: "Espresso üzerine krema dokunuşu.", image: "/o2photos/conpanna.jpg" },
            { name: "Cortado", price: "₺100,00", description: "Espresso ve az miktarda sıcak süt.", image: "/o2photos/cortado.jpg" },
            { name: "Filtre Kahve", price: "₺135,00", description: "Taze demlenmiş yumuşak içimli filtre kahve.", image: "/o2photos/filtre-kahve.jpg" },
            { name: "Flat White", price: "₺125,00", description: "İnce süt köpüğü ve yoğun espresso.", image: "/o2photos/flatwhite.jpg" },
            { name: "Latte", price: "₺125,00", description: "Bol sütlü ve yumuşak içimli espresso.", image: "/o2photos/latte.jpg" },
            { name: "Extra Shot", price: "₺35,00", description: "Kahvenize ekstra enerji katın.", image: "/o2photos/extrashot.jpg" },
            { name: "Badem Sütü", price: "₺30,00", description: "Bitkisel badem sütü alternatifi.", image: "/o2photos/bademsutu.jpg" },
            { name: "Yulaf Sütü", price: "₺30,00", description: "Bitkisel yulaf sütü alternatifi.", image: "/o2photos/yulafsutu.jpg" }
        ]
    },
    {
        category: "SPECIAL KAHVELER",
        icon: <BiSolidCoffeeBean />,
        image: "/o2photos/specialkahveler.jpg",
        items: [
            { name: "Caramello Latte", price: "₺140,00", description: "Karamel aromalı sıcak latte.", image: "/o2photos/hotcaranellolatte.png" },
            { name: "Cinnamon Latte", price: "₺140,00", description: "Tarçın aromalı sıcak latte.", image: "/o2photos/hotcinmmonlatte.png" },
            { name: "Cookie Latte", price: "₺140,00", description: "Kurabiye aromalı sıcak latte.", image: "/o2photos/hotcookielatte.png" },
            { name: "Mocha", price: "₺140,00", description: "Espresso, süt ve çikolatanın sıcak buluşması.", image: "/o2photos/hotchocklatelatte.png" },
            { name: "Pistachio Latte", price: "₺140,00", description: "Antep fıstığı aromalı özel latte.", image: "/o2photos/hotbistaschiolatte.png" },
            { name: "Pumpkin Latte", price: "₺140,00", description: "Bal kabağı aromalı baharatlı latte.", image: "/o2photos/hotpumpkinlatte.png" },
            { name: "Strawberry Mocha", price: "₺140,00", description: "Çilek ve çikolata aromalı mocha.", image: "/o2photos/hotStrawberryMochalatte.png" },
            { name: "Toffee Nut Latte", price: "₺140,00", description: "Karamel ve fındık aromalı latte.", image: "/o2photos/hottoffeenutlatte.png" },
            { name: "Vanilla Latte", price: "₺140,00", description: "Vanilya aromalı yumuşak latte.", image: "/o2photos/hotvanillalatte.png" },
            { name: "White Mocha", price: "₺140,00", description: "Beyaz çikolatalı sıcak mocha.", image: "/o2photos/hotwhitemochalatte.png" }
        ]
    },
    {
        category: "BİTKİ ÇAYLARI",
        icon: <FaLeaf />,
        image: "/o2photos/BİTKİÇAYLARI.jpg",
        items: [
            { name: "Detox Tea", price: "₺150,00", description: "Vücudunuzu arındıran özel bitki karışımı.", image: "/o2photos/detoxcay.png" },
            { name: "Ihlamur Çayı", price: "₺150,00", description: "Rahatlatıcı ve yumuşak içimli ıhlamur.", image: "/o2photos/ihlamurcay.png" },
            { name: "Kış Çayı", price: "₺150,00", description: "Bağışıklık sistemini destekleyen bitki karışımı.", image: "/o2photos/kiscay.png" },
            { name: "Limon Zencefil Çayı", price: "₺150,00", description: "Tazeleyici limon ve zencefil aroması.", image: "/o2photos/limonzencefilcay.png" },
            { name: "Mavi Kelebek", price: "₺200,00", description: "Egzotik mavi kelebek sarmaşığı çayı.", image: "/o2photos/mavikelebekcay.png" },
            { name: "Orman Meyveli Çay", price: "₺150,00", description: "Kırmızı orman meyvelerinin tatlı aroması.", image: "/o2photos/ormanmeyvelicay.png" },
            { name: "Relax Tea", price: "₺150,00", description: "Günün yorgunluğunu atmanıza yardımcı olur.", image: "/o2photos/relaxtea.png" }
        ]
    },
    {
        category: "SICAK İÇECEKLER",
        icon: <GiCoffeeCup />,
        image: "/o2photos/SICAK İÇECEKLER.jpg",
        items: [
            { name: "Matcha Çayı", price: "₺170,00", description: "Japon yeşil çay tozu ile hazırlanan özel içecek.", image: "/o2photos/MatchaÇayı.jpg" },
            { name: "Chai Tea Latte", price: "₺100,00", description: "Baharatlı çay ve sütün sıcak uyumu.", image: "/o2photos/chaitealatte.png" },
            { name: "Sıcak Çikolata", price: "₺90,00", description: "Yoğun kıvamlı sıcak çikolata.", image: "/o2photos/SıcakÇikolata.jpg" },
            { name: "Sahlep", price: "₺90,00", description: "Tarçın ile servis edilen geleneksel lezzet.", image: "/o2photos/Sahlep.jpg" },
            { name: "Çay", price: "₺40,00", description: "Taze demlenmiş Türk çayı.", image: "/o2photos/cay.jpg" }
        ]
    },
    {
        category: "SOĞUK KAHVELER",
        icon: <FaGlassWater />,
        image: "/o2photos/SOĞUK KAHVELER.jpg",
        items: [
            { name: "Ice Americano", price: "₺120,00", description: "Buzlu su ve espresso ile serinletici kahve.", image: "/o2photos/Iced_Americano.jpg" },
            { name: "Ice Latte", price: "₺130,00", description: "Buzlu süt ve espresso.", image: "/o2photos/Iced-latte.jpg" },
            { name: "Ice Mocha", price: "₺140,00", description: "Buzlu süt, espresso ve çikolata.", image: "/o2photos/iced-mocha-1.jpg" },
            { name: "Ice White Mocha", price: "₺140,00", description: "Buzlu süt, espresso ve beyaz çikolata.", image: "/o2photos/iced-white-mocha-7.jpg" },
            { name: "Ice Caramel Latte", price: "₺140,00", description: "Karamel aromalı buzlu latte.", image: "/o2photos/IceCaramelLatte.jpg" },
            { name: "Ice Cinnamon Latte", price: "₺140,00", description: "Tarçın aromalı buzlu latte.", image: "/o2photos/IceCinnamonLatte.jpg" },
            { name: "Ice Cookie Latte", price: "₺140,00", description: "Kurabiye aromalı buzlu latte.", image: "/o2photos/icecookielatte.png" },
            { name: "Ice Pistachio Latte", price: "₺140,00", description: "Antep fıstığı aromalı buzlu latte.", image: "/o2photos/IcePistachioLatte.jpg" },
            { name: "Ice Pumpkin Latte", price: "₺140,00", description: "Bal kabağı aromalı buzlu latte.", image: "/o2photos/IcedPumpkinSpiceLatte.jpg" },
            { name: "Strawberry Mocha", price: "₺140,00", description: "Çilek aromalı buzlu mocha.", image: "/o2photos/StrawberryMocha.jpg" },
            { name: "Toffee Nut Latte", price: "₺140,00", description: "Karamel ve fındık aromalı buzlu latte.", image: "/o2photos/toffeenutlatteice.png" },
            { name: "Vanilla Latte", price: "₺140,00", description: "Vanilya aromalı buzlu latte.", image: "/o2photos/icedlattevanilla.jpg" },
            { name: "Caramel Frappe", price: "₺140,00", description: "Karamel soslu buzlu frappe.", image: "/o2photos/CaramelFrappe.jpg" },
            { name: "Chocolate Frappe", price: "₺140,00", description: "Çikolata soslu buzlu frappe.", image: "/o2photos/ChocolateFrappe.jpg" },
            { name: "Cookie Frappe", price: "₺140,00", description: "Kurabiye parçacıklı buzlu frappe.", image: "/o2photos/CookieFrappe.jpg" },
            { name: "Oreo Frappe", price: "₺140,00", description: "Oreo bisküvili buzlu frappe.", image: "/o2photos/oreofrappe.png" },
            { name: "Vanilla Frappe", price: "₺140,00", description: "Vanilya aromalı buzlu frappe.", image: "/o2photos/vanilla-frappe.jpg" }
        ]
    },
    {
        category: "MILKSHAKE",
        icon: <FaGlassWater />,
        image: "/o2photos/milkshake.jpg",
        items: [
            { name: "Çikolata", price: "₺140,00", description: "Yoğun çikolatalı milkshake.", image: "/o2photos/Çikolatamilkshake.jpg" },
            { name: "Çilek", price: "₺140,00", description: "Gerçek çilek parçacıklı milkshake.", image: "/o2photos/Cilekmilkshake.jpg" },
            { name: "Karamel", price: "₺140,00", description: "Karamel soslu milkshake.", image: "/o2photos/karamelmilkshake.jpg" },
            { name: "Oreo", price: "₺150,00", description: "Oreo parçacıklı milkshake.", image: "/o2photos/oreomilkshake.jpg" },
            { name: "Vanilya", price: "₺140,00", description: "Klasik vanilyalı milkshake.", image: "/o2photos/vanilyamilkshake.jpg" }
        ]
    },
    {
        category: "FROZEN",
        icon: <FaIceCream />,
        image: "/o2photos/forzen.jpg",
        items: [
            { name: "Çilek", price: "₺140,00", description: "Buzlu çilek ferahlatlığı.", image: "/o2photos/cilekforzen.jpg" },
            { name: "Limonata", price: "₺100,00", description: "Ev yapımı taze limonata.", image: "/o2photos/lemonatafrozen.jpg" },
            { name: "Naneli Limonata", price: "₺115,00", description: "Taze nane yaprakları ile limonata.", image: "/o2photos/nanelilimonataforzen.jpg" },
            { name: "O2 Frozen", price: "₺150,00", description: "O2 Coffee özel karışımı frozen." },
            { name: "Orman Meyveli", price: "₺140,00", description: "Buzlu orman meyveleri.", image: "/o2photos/ormanmeyvelifrozen.jpg" },
            { name: "Şeftali", price: "₺140,00", description: "Buzlu şeftali ferahlatlığı.", image: "/o2photos/seftalifrozen.jpg" },
            { name: "Lychee", price: "₺140,00", description: "Egzotik liçi meyveli frozen.", image: "/o2photos/lycheefrozen.png" }
        ]
    },
    {
        category: "SPECIALS",
        icon: <FaWineGlass />,
        items: [
            { name: "Amsterdam", price: "₺150,00", description: "O2 Coffee imza kokteyli." },
            { name: "Mono", price: "₺150,00", description: "O2 Coffee imza kokteyli." },
            { name: "Nairobi", price: "₺150,00", description: "O2 Coffee imza kokteyli." },
            { name: "Panama", price: "₺150,00", description: "O2 Coffee imza kokteyli." },
            { name: "Serenity", price: "₺150,00", description: "O2 Coffee imza kokteyli." },
            { name: "Tokyo", price: "₺150,00", description: "O2 Coffee imza kokteyli." }
        ]
    },
    {
        category: "SANDVİÇLER",
        icon: <FaBreadSlice />,
        image: "/o2photos/SANDVİÇLER.jpg",
        items: [
            { name: "Beyaz Peynirli Panini", price: "₺140,00", description: "Taze beyaz peynir ve yeşilliklerle.", image: "/o2photos/Beyaz Peynirli Panini.jpg" },
            { name: "Hindi Füme Baget", price: "₺150,00", description: "Hindi füme ve özel soslu baget.", image: "/o2photos/Hindi Füme Baget.png" },
            { name: "Izgara Tavuklu Baget", price: "₺160,00", description: "Izgara tavuk dilimleri ve taze sebzeler.", image: "/o2photos/Izgara Tavuklu Baget.png" },
            { name: "Kaşar Peynirli Panini", price: "₺130,00", description: "Erimiş kaşar peyniri ile sıcak panini.", image: "/o2photos/Kaşar Peynirli Panini.png" }
        ]
    },
    {
        category: "TATLILAR",
        icon: <FaCookie />,
        image: "/o2photos/TATLILAR.jpg",
        items: [
            { name: "Frambuazlı Cheesecake", price: "₺150,00", description: "Frambuaz soslu cheesecake.", image: "/o2photos/Frambuazlı Cheesecake.png" },
            { name: "Limonlu Cheesecake", price: "₺150,00", description: "Limon soslu ferahlatıcı cheesecake.", image: "/o2photos/Limonlu Cheesecake.jpg" },
            { name: "Oreo Cheesecake", price: "₺150,00", description: "Oreo parçacıklı cheesecake.", image: "/o2photos/Oreo Cheesecake.jpg" },
            { name: "Orman Meyveli Cheesecake", price: "₺150,00", description: "Orman meyveleri soslu cheesecake.", image: "/o2photos/Orman Meyveli.png" },
            { name: "Çilekli Magnolia", price: "₺100,00", description: "Taze çilek ve özel krema.", image: "/o2photos/Çilekli Magnolia.png" },
            { name: "Muzlu Magnolia", price: "₺100,00", description: "Taze muz ve özel krema.", image: "/o2photos/Muzlu Magnolia.jpg" },
            { name: "Oreolu Magnolia", price: "₺100,00", description: "Oreo parçacıklı magnolia.", image: "/o2photos/Oreolu Magnolia.jpg" },
            { name: "Cevizli Kek", price: "₺100,00", description: "Bol cevizli ev yapımı kek.", image: "/o2photos/Cevizli Kek.jpg" },
            { name: "Kremalı Havuçlu Kek", price: "₺150,00", description: "Tarçın ve havuçlu kek, krema ile.", image: "/o2photos/Kremalı Havuçlu Kek.jpg" },
            { name: "Mozaik Kek", price: "₺150,00", description: "Kakaolu ve bisküvili klasik lezzet.", image: "/o2photos/Mozaik Kek.jpg" },
            { name: "Sufle", price: "₺150,00", description: "Akışkan çikolatalı sıcak kek.", image: "/o2photos/Sufle.jpg" },
            { name: "Tiramisu", price: "₺150,00", description: "Kahve aromalı İtalyan tatlısı.", image: "/o2photos/Tiramisu.jpg" },
            { name: "Meyve Şöleni", price: "₺150,00", description: "Mevsim meyveleri ile hazırlanan tatlı.", image: "/o2photos/Meyve Şöleni.png" },
            { name: "Fıstık Rüyası", price: "₺150,00", description: "Antep fıstıklı özel tatlı.", image: "/o2photos/Fıstık Rüyası.jpg" },
            { name: "Karamelli Donut", price: "₺100,00", description: "Karamel dolgulu taze donut.", image: "/o2photos/Karamelli Donut.jpg" },
            { name: "Kruvasan", price: "₺125,00", description: "Tereyağlı taze kruvasan.", image: "/o2photos/Kruvasan.jpeg" }
        ]
    },
    {
        category: "YÖRESEL KAHVELER",
        icon: <BiSolidCoffeeBean />,
        image: "/o2photos/YÖRESEL KAHVELER.jpg",
        items: [
            { name: "Brezilya Santos", price: "₺120,00", description: "Yumuşak içimli Brezilya kahvesi.", image: "/o2photos/Brezilya Santos.png" },
            { name: "Colombia", price: "₺120,00", description: "Dengeli asiditeye sahip Kolombiya kahvesi.", image: "/o2photos/Colombia.jpg" },
            { name: "Ethiopia", price: "₺120,00", description: "Çiçeksi notalara sahip Etiyopya kahvesi.", image: "/o2photos/Ethiopia.jpg" },
            { name: "Guatemala", price: "₺120,00", description: "Baharatlı notalara sahip Guatemala kahvesi.", image: "/o2photos/Guatemala.jpg" }
        ]
    },
    {
        category: "SOFT İÇECEKLER",
        icon: <GiSodaCan />,
        image: "/o2photos/SOFT İÇECEKLER.jpg",
        items: [
            { name: "C Max Kivi Soda", price: "₺50,00", description: "Serinletici içecek.", image: "/o2photos/C Max Kivi Soda.jpg" },
            { name: "C Max Limon Soda", price: "₺50,00", description: "Serinletici içecek.", image: "/o2photos/C Max Limon Soda.jpg" },
            { name: "Cam Su", price: "₺50,00", description: "Serinletici içecek.", image: "/o2photos/Cam Su.jpg" },
            { name: "Deep Enerji İçeceği", price: "₺90,00", description: "Serinletici içecek.", image: "/o2photos/Deep Enerji İçeceği.png" },
            { name: "Efsane Gazoz", price: "₺75,00", description: "Serinletici içecek.", image: "/o2photos/Efsane Gazoz.jpg" },
            { name: "Frutti Ekstra Armutlu", price: "₺75,00", description: "Serinletici içecek.", image: "/o2photos/Frutti Ekstra Armutlu.jpg" },
            { name: "Frutti Ekstra Orman Meyveli", price: "₺75,00", description: "Serinletici içecek.", image: "/o2photos/Frutti Ekstra Orman Meyveli.png" },
            { name: "Karpuz-Çilek Meyveli Soda", price: "₺50,00", description: "Serinletici içecek.", image: "/o2photos/Karpuz-Çilek Meyveli Soda.jpg" },
            { name: "Nar Meyveli Soda", price: "₺50,00", description: "Serinletici içecek.", image: "/o2photos/Nar Meyveli Soda.jpg" },
            { name: "Premium Soda", price: "₺50,00", description: "Serinletici içecek.", image: "/o2photos/Premium Soda.jpg" },
            { name: "Sade Soda", price: "₺30,00", description: "Serinletici içecek.", image: "/o2photos/Sade Soda.jpg" },
            { name: "Su", price: "₺25,00", description: "Serinletici içecek.", image: "/o2photos/Su.png" }
        ]
    },
    {
        category: "DONDURMALAR",
        icon: <FaIceCream />,
        image: "/o2photos/DONDURMALAR.jpg",
        items: [
            { name: "Çikolatalı Dondurma", price: "₺25,00", description: "Top dondurma.", image: "/o2photos/Çikolatalı Dondurma.jpg" },
            { name: "Çilekli Dondurma", price: "₺25,00", description: "Top dondurma.", image: "/o2photos/Çilekli Dondurma.jpg" },
            { name: "Karamelli Dondurma", price: "₺25,00", description: "Top dondurma.", image: "/o2photos/Karamelli Dondurma.jpg" },
            { name: "Vanilyalı Dondurma", price: "₺25,00", description: "Top dondurma.", image: "/o2photos/Vanilyalı Dondurma.jpg" }
        ]
    }
];
