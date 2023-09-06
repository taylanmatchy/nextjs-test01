import { v4 as uuidv4 } from "uuid";

const fakeData = [
  {
    id: uuidv4(),
    Eposta: "taylan@example.com",
    Sifre: 1234,
    Isim: "Taylan",
    Soyisim: "Deneme",
    Cep_Telefonu: "1242312",
    Adres: "deneme",
    Daha_Fazla_Bilgi: "bilgiler vs",
    Il: "İzmir",
    Ilce: "DENEME",
    PostaKodu: "24234",
    news: "",
    sms: "",
    KVKK: "KVKK",
  },
  {
    id: uuidv4(),
    Eposta: "test@example.com",
    Sifre: 12345,
    Isim: "test",
    Soyisim: "Deneme",
    Cep_Telefonu: "1242312",
    Adres: "deneme",
    Daha_Fazla_Bilgi: "bilgiler vs",
    Il: "İzmir",
    Ilce: "DENEME",
    PostaKodu: "24234",
    news: "",
    sms: true,
    KVKK: "",
  },
];

export default fakeData;
