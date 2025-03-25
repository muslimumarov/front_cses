import { Check } from "lucide-react";
import { Timeline } from "flowbite-react";
import { Shield, UserCog, Wrench, Lock } from "lucide-react";

const CompanyInfo = () => {
  return (
    <div className="space-y-10">
      <h1 className={"text-center text-2xl font-bold"}>Markaz Tarixi</h1>
      <div className="mx-auto max-w-5xl p-6">
        <Timeline>
          <Timeline.Item>
            <Timeline.Point icon={Shield} />
            <Timeline.Content>
              <Timeline.Time>2013 – INFOSEC.UZ</Timeline.Time>
              <Timeline.Title>
                "Axborot xavfsizligini ta’minlash markazi"
              </Timeline.Title>
              <Timeline.Body>
                O‘zbekiston Respublikasi Prezidentining 2013 yil 27 iyundagi
                PQ-1989-son Qarori asosida tashkil etilgan.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>

          <Timeline.Item>
            <Timeline.Point icon={UserCog} />
            <Timeline.Content>
              <Timeline.Time>2017 – IPSC.UZ</Timeline.Time>
              <Timeline.Title>
                "Axborot xavfsizligi va jamoat tartibini ta’minlashga
                ko‘maklashish markazi"
              </Timeline.Title>
              <Timeline.Body>
                2017 yil 29 avgustdagi PQ-3245-son Qarori asosida qayta tashkil
                etilgan.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>

          <Timeline.Item>
            <Timeline.Point icon={Wrench} />
            <Timeline.Content>
              <Timeline.Time>2018 – TACE.UZ</Timeline.Time>
              <Timeline.Title>
                "Texnik ko‘maklashish markazi" DUK
              </Timeline.Title>
              <Timeline.Body>
                2018 yil 21 noyabrdagi PQ-4024-son Qarori asosida tashkil
                etilgan.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>

          <Timeline.Item>
            <Timeline.Point icon={Lock} />
            <Timeline.Content>
              <Timeline.Time>2019 – CSEC.UZ</Timeline.Time>
              <Timeline.Title>
                "Kiberxavfsizlik markazi" davlat unitar korxonasi
              </Timeline.Title>
              <Timeline.Body>
                2019 yil 14 sentyabrdagi PQ-4452-son Qaroriga muvofiq faoliyat
                yuritib kelmoqda.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </div>
      <p>
        Markaz dastlab Oʻzbekiston Respublikasi Axborot texnologiyalari va
        kommunikatsiyalarini rivojlantirish vazirligi huzuridagi “Axborot
        xavfsizligini taʼminlash markazi” davlat muassasasi nomi bilan...
      </p>

      <p className="font-bold">
        Markazning asosiy vazifalari quyidagilardan iborat:
      </p>
      <ul className="space-y-4">
        {[
          "Axborot xavfsizligiga hozirgi vaqtdagi tahdidlar toʻgʻrisidagi maʼlumotlarni yigʻish...",
          "Qonun buzuvchilarni, axborotlar makonidagi ruxsatsiz harakatlarni amalga oshirishda foydalaniladigan metodlarni tahlil qilish...",
          "Axborotlashtirish obyektlarida apparat vositalari va dasturiy mahsulotlarni attestatsiya qilish...",
          "Davlat organlari va tashkilotlari axborot tizimlari va resurslari axborot xavfsizligi siyosatini ishlab chiqish va amalga oshirishda koʻmaklashish...",
          "Davlat axborot tizimlari va resurslari, shuningdek, Internet tarmogʻi milliy segmentining axborot xavfsizligini taʼminlash...",
          "Internetning milliy foydalanuvchilarini axborot xavfsizligiga tahdidlar toʻgʻrisida oʻz vaqtida xabardor qilish...",
        ].map((task, index) => (
          <li key={index} className="flex  items-center gap-2">
            <Check className="size-5  text-green-500" />
            <span>{task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyInfo;
