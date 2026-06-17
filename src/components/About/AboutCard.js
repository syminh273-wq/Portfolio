import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useI18n } from "../../i18n/I18nContext";

const ACTIVITIES = [
  { en: "Exploring AI Technologies & applying them to real-world products 🤖", vi: "Khám phá công nghệ AI & áp dụng vào sản phẩm thực tế 🤖" },
  { en: "Building Side Projects to experiment with new ideas 🚀", vi: "Làm side project để thử nghiệm ý tưởng mới 🚀" },
  { en: "Learning New Frameworks and keeping up with industry trends 📚", vi: "Học framework mới và theo kịp xu hướng ngành 📚" },
  { en: "Contributing to team growth through code reviews and knowledge sharing 🤝", vi: "Đóng góp vào sự phát triển của team qua code review và chia sẻ kiến thức 🤝" },
  { en: "Reading tech blogs and open-source exploration 🌐", vi: "Đọc blog công nghệ và khám phá mã nguồn mở 🌐" },
];

function AboutCard() {
  const { t, locale } = useI18n();
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t("aboutCard.greeting")} <span className="purple">{t("aboutCard.name")}</span>{" "}
            {t("aboutCard.from")} <span className="purple">{t("aboutCard.country")}</span>.
            <br />
            {locale === "vi" ? "Tôi hiện đang làm" : "I'm currently working as a"}{" "}
            <span className="purple">{t("aboutCard.role")}</span> {t("aboutCard.at")}{" "}
            <span className="purple">{t("aboutCard.company")}</span>, {t("aboutCard.where")}
            <br />
            {t("aboutCard.edu")}{" "}
            <span className="purple">{t("aboutCard.major")}</span> {locale === "vi" ? "từ" : "from"}{" "}
            <span className="purple">{t("aboutCard.school")}</span>, {t("aboutCard.schoolYear")}
            <br />
            <br />
            {locale === "vi"
              ? "Trong suốt sự nghiệp, tôi đã có cơ hội làm việc trên nhiều dự án đa dạng từ SaaS, hệ thống real-time đến ứng dụng desktop doanh nghiệp. Tôi thích giải quyết các bài toán kỹ thuật phức tạp và biến ý tưởng thành sản phẩm đáng tin cậy, có khả năng mở rộng."
              : "Throughout my career, I have had the opportunity to work on diverse projects ranging from SaaS platforms and real-time systems to enterprise desktop applications. I enjoy tackling complex technical challenges and turning ideas into reliable, scalable products."}
            <br />
            <br />
            {locale === "vi" ? "Ngoài coding, còn một số hoạt động khác tôi cũng thích làm!" : "Apart from coding, some other activities that I love to do!"}
          </p>

          <ul>
            {ACTIVITIES.map((act, i) => (
              <li key={i} className="about-activity">
                <ImPointRight /> {locale === "vi" ? act.vi : act.en}
              </li>
            ))}
          </ul>

          <p style={{ color: "rgb(126 155 172)" }}>
            {locale === "vi" ? '"Xây bằng đam mê, mở rộng bằng chính xác!"' : '"Build with passion, scale with precision!"'}{" "}
          </p>
          <footer className="blockquote-footer">Minh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
